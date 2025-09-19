import { logError } from './lib/internal/logging';
import { findWallSegmentsAroundGroup, hideAllOtherWallSegments, newFloorPlanScene, newPlanCamera, renderSVG } from './drawing/render-svg';
import {
	ArrowHelper,
	AxesHelper,
	Box3,
	BoxGeometry,
	BufferGeometry,
	Camera,
	Color,
	ColorManagement,
	EdgesGeometry,
	ExtrudeGeometry,
	Group,
	HemisphereLight,
	Line,
	LineBasicMaterial,
	LineSegments,
	Material,
	MathUtils,
	Matrix4,
	Mesh,
	MeshBasicMaterial,
	Object3D,
	OrthographicCamera,
	PerspectiveCamera,
	Quaternion,
	Scene,
	Shape,
	Vector3,
	WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

ColorManagement.enabled = false;

const scene = new Scene();
let canvas: HTMLElement | null = null;
var renderer: WebGLRenderer | undefined = undefined;
var camera: Camera | PerspectiveCamera | undefined = undefined;
var lastParts: IVisualPart | undefined = undefined;
var lastHighlightIds: string[] = [];
var labelRenderer: CSS2DRenderer | undefined = undefined;

export function Clear3dView() {
	canvas = null;
	renderer = undefined;
	camera = undefined;
	labelRenderer = undefined;
}

// ###################
export interface IVisualPart {
	_id: string; // unique id (automatically created)
	_partId: string; // part id (part code)
    parentId?: string;
    _parentPartId?: string; // Is set for BOM/NC parts
	_x: number;
	_y: number;
	_z: number;
	_fullMatrix?: Matrix4;
	_openFullMatrix?: Matrix4;
	_xAbs: number;
	_yAbs: number;
	_zAbs: number;
	_dimx: number;
	_dimy: number;
	_dimz: number;
	_extrude?: IExtrudeInfo;
	_hidden?: boolean;
	_3DElements?: IVisualPart[]; // used in BOM/NC creation
	_threedModel?: IThreeDModelData;
	_hideThreedModelWhenOpen?: boolean; // hide 3D model if part is "opened" in viewer
	_threedModelOpen?: IThreeDModelData; // 3D model to be shown if part is "opened" in viewer
	_specialType?: PartSpecialType;
}

export enum PartSpecialType {
	None,
	DockingVector,
	InsertLevelHeight,
	InsertLevelHeightDefault
}

export interface IThreeDModelData {
	_3dUrl: string;
	_3dParameters: any | undefined; // any (string as json)
}

export interface IExtrudeInfo {
	// The SVG string like
	svg: string;
	// Contains "x", "y" or "z" which defines the direction for extruding
	direction: string;
}
// ###################
export async function exportModel() {
	const exporter = new GLTFExporter();

	return exporter.parseAsync(scene, { binary: true }).then(
		// called when the gltf has been generated
		function (result) {
			if (result instanceof ArrayBuffer) {
				return new Blob([result], { type: 'application/octet-stream' });
			} else {
				const output = JSON.stringify(result, undefined, 2);
				return new Blob([output], { type: 'text/plain' });
			}
		},
		// called when there is an error in the generation
		function (error) {
			console.log('An error happened during parsing', error);
			return undefined;
		}
	);
}

export interface PlanExport {
	name: string;
	blob: Blob;
}

export async function exportPlans(): Promise<PlanExport[]> {
	const svgScene = newFloorPlanScene(scene);
	const margin = 100;
	const sceneBox = new Box3().setFromObject(svgScene);
	const sceneSize = sceneBox.getSize(new Vector3()).addScalar(2 * margin);
	const floorPlanOrientation = new Quaternion()
		.setFromAxisAngle(new Vector3(1, 0, 0), MathUtils.degToRad(-90));	
	const floorPlanCamera = newPlanCamera(floorPlanOrientation, sceneBox, margin);

	const plans: PlanExport[] = [];
	plans.push({
		'name': 'floor-plan',
		'blob': await renderSVG(svgScene, floorPlanCamera, sceneSize.x, sceneSize.z),
	});

	const wallsSegmentsAroundGroup = findWallSegmentsAroundGroup(svgScene);
	if (!wallsSegmentsAroundGroup) {
		return plans;
	}
	hideAllOtherWallSegments(svgScene, wallsSegmentsAroundGroup);
	for (let segmentIndex = 0; segmentIndex < wallsSegmentsAroundGroup.length; segmentIndex++) {
		const wallSegment = wallsSegmentsAroundGroup[segmentIndex];
		const rotationY = (wallSegment.rotationY + Math.PI / 2) % (2 * Math.PI);
		const elevationOrientation = new Quaternion()
			.setFromAxisAngle(new Vector3(0, 1, 0), rotationY);
		const elevationCamera = newPlanCamera(elevationOrientation, sceneBox, margin);
		const sizeVector = new Vector3(sceneSize.x, 0, sceneSize.z).applyQuaternion(elevationOrientation);
		plans.push({
			'name': `elevation-${segmentIndex}`,
			'blob': await renderSVG(svgScene, elevationCamera, Math.abs(sizeVector.x), sceneSize.y),
		});
	}
	return plans;
}

async function createPart(parent: Object3D, part: IVisualPart, showOpen: boolean, showDocking: boolean) {
	let grp = new Group();
    grp.name = (part._partId ?? 'part-') + part._id;
    if (part.parentId) {
      grp.name += '-' + part.parentId;
    }
    if (part._parentPartId) {
      grp.name += '-' + part._parentPartId;
    }
	parent.add(grp);

	const material = new MeshBasicMaterial({ color: 0x333333 }); // light gray
	material.transparent = true;
	material.opacity = 0.2;

	if (part._hidden) {
		return;
	}

	if (showOpen && part._openFullMatrix) {
		grp.applyMatrix4(part._openFullMatrix);
	} else {
		if (part._fullMatrix) {
			grp.applyMatrix4(part._fullMatrix);
		}
	}

	if (part._specialType === PartSpecialType.InsertLevelHeight || part._specialType === PartSpecialType.InsertLevelHeightDefault) {
		if (!showDocking) {
			return;
		}

		const start = new Vector3(part._x + part._xAbs, part._y + part._yAbs, part._z + part._zAbs);
		const end = new Vector3(part._x + part._xAbs + part._dimx, part._y + part._yAbs + part._dimy, part._z + part._zAbs + part._dimz);
		const geometry = new BufferGeometry().setFromPoints([start, end]);
		let mat = new LineBasicMaterial({ color: 0x0000ff });
		if (part._specialType === PartSpecialType.InsertLevelHeightDefault) {
			mat = new LineBasicMaterial({ color: 0xff00ff });
		}
		const line = new Line(geometry, mat);
		grp.add(line);
	}

	if (part._specialType === PartSpecialType.DockingVector) {
		if (!showDocking) {
			return;
		}

		const endPoint = new Vector3(part._dimx, part._dimy, part._dimz);
		const origin = new Vector3(part._x, part._y, part._z);
		const originWithOffset = new Vector3(part._x + part._xAbs, part._y + part._yAbs, part._z + part._zAbs);
		const length = endPoint.clone().sub(origin).length();
		const direction = endPoint.clone().sub(origin).normalize();
		const arrowHelper = new ArrowHelper(direction, originWithOffset, length, 0xffff00);
		grp.add(arrowHelper);

		const arrowLabelDiv = document.createElement('div');
		arrowLabelDiv.className = 'label';
		let label = '';
		// Only display the UPPER CASE characters (so we display a short name)
		if (part._partId) {
			for (let i = 0; i < part._partId.length; i++) {
				const c = part._partId[i];
				if (c === c.toUpperCase()) {
					label += c;
				}
			}
		}
		// Fallback for label if there was not a single upper case character
		if (!label) {
			label = part._partId;
		}
		arrowLabelDiv.textContent = label;
		arrowLabelDiv.style.backgroundColor = 'transparent';
		arrowLabelDiv.style.fontFamily = 'Sans-serif';
		arrowLabelDiv.style.fontSize = '20px';
		arrowLabelDiv.style.color = 'black';
		arrowLabelDiv.style.fontWeight = 'bold';
		const arrowLabel = new CSS2DObject(arrowLabelDiv);
		arrowLabel.position.set(
			part._xAbs + (part._x + part._dimx) / 2,
			part._yAbs + (part._y + part._dimy) / 2,
			part._zAbs + (part._z + part._dimz) / 2
		);
		grp.add(arrowLabel);
	} else if (part._extrude) {
		let mesh;
		let wireframe;
		const loader = new SVGLoader();
		const svgData = loader.parse(part._extrude.svg);
		let shapes: any[] = [];
		if (svgData.paths.length <= 0) {
			logError(
				`SVG data does not contain any paths! Part '${part._partId + ':' + part._id}' will not be drawn! Is the SVG valid? (SVG: ${
					part._extrude.svg
				})`
			);
		}

		let rot = new Matrix4();
		let extrusionDepth = part._dimz;

		if (part._extrude.direction == 'x') {
			extrusionDepth = part._dimx;
			rot.makeRotationAxis(new Vector3(0, 1, 0), MathUtils.degToRad(270));
			extrusionDepth *= -1;
		} else if (part._extrude.direction == 'y') {
			extrusionDepth = part._dimy;
			rot.makeRotationAxis(new Vector3(1, 0, 0), MathUtils.degToRad(90));
			extrusionDepth *= -1;
		}

		svgData.paths.forEach(path => {
			shapes = path.toShapes(true);
		});

		shapes.forEach(shape => {
			let geometry2 = new ExtrudeGeometry(shape, {
				depth: extrusionDepth,
				bevelEnabled: false
			});

			geometry2.applyMatrix4(rot);

			let geo = new EdgesGeometry(geometry2);
			let mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
			wireframe = new LineSegments(geo, mat);
			grp.add(wireframe);
			mesh = new Mesh(geometry2, material);

			mesh.position.x = wireframe.position.x = part._x;
			mesh.position.y = wireframe.position.y = part._y;
			mesh.position.z = wireframe.position.z = part._z;
			grp.add(mesh);
		});
	} else if (showOpen && part._threedModelOpen && part._threedModelOpen._3dUrl) {
		await load3DModel(part, material, grp, part._threedModelOpen);
	} else if (part._threedModel && part._threedModel._3dUrl) {
		if (!showOpen || part._hideThreedModelWhenOpen != true) {
			await load3DModel(part, material, grp, part._threedModel);
		}
	} else {
		const geometry2 = new BoxGeometry(part._dimx, part._dimy, part._dimz);
		let mesh;
		let wireframe;
		let geo = new EdgesGeometry(geometry2);
		let mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
		wireframe = new LineSegments(geo, mat);
		grp.add(wireframe);

		mesh = new Mesh(geometry2, material);
        mesh.position.x = wireframe.position.x = part._x + (part._dimx / 2);
        mesh.position.y = wireframe.position.y = part._y + (part._dimy / 2);
        mesh.position.z = wireframe.position.z = part._z + (part._dimz / 2);
		grp.add(mesh);
	}

	if (part._3DElements) {
		part._3DElements.forEach(element => {
        element._parentPartId = part._partId;
			createPart(parent, element, showOpen, showDocking);
		});
	}
}

async function load3DModel(part: IVisualPart, material: MeshBasicMaterial, grp: Group, threeDModel: IThreeDModelData) {
	// We have a 3d model assigned
	let md: string | null;

	try {
		const result = await fetch(threeDModel._3dUrl);
		md = await result!.text();
	} catch (e) {
		console.error('Failed to fetch 3d model for part: ' + part._partId + ' exception: ' + e);
		AddMissingPart(part, material, grp);
		return;
	}

	const loader = new OBJLoader();
	const obj = loader.parse(md);

	let objGrp = obj;

	let bbox = new Box3().setFromObject(objGrp);
	let bsize = new Vector3(0, 0, 0);
	bbox.getSize(bsize);
	let m4 = new Matrix4();
	m4.scale(new Vector3(part._dimx / bsize.x, part._dimy / bsize.y, part._dimz / bsize.z));
	objGrp.applyMatrix4(m4);

	bbox = new Box3().setFromObject(objGrp);
	m4 = new Matrix4();
	m4.setPosition(part._x - bbox.min.x, part._y - bbox.min.y, part._z - bbox.min.z);
	objGrp.applyMatrix4(m4);

	grp.add(objGrp);
}

function AddMissingPart(part: IVisualPart, material: MeshBasicMaterial, grp: Group) {
	const geometry2 = new BoxGeometry(part._dimx, part._dimy, part._dimz);
	let mesh;
	let wireframe;
	let geo = new EdgesGeometry(geometry2);
	let mat = new LineBasicMaterial({ color: 0x000000, linewidth: 1 });
	wireframe = new LineSegments(geo, mat);
	grp.add(wireframe);

	material.color = new Color(0xff0000);
	mesh = new Mesh(geometry2, material);
    mesh.position.x = wireframe.position.x = part._x + (part._dimx / 2);
    mesh.position.y = wireframe.position.y = part._y + (part._dimy / 2);
    mesh.position.z = wireframe.position.z = part._z + (part._dimz / 2);
	grp.add(mesh);
}

function HightLightIds(group: Group | Scene, highlightIds: any[]) {
	if (highlightIds.find(p => 'part-' + p == group.name)) {
		((group.children[1] as LineSegments).material as LineBasicMaterial).color.set(0xff0000);
	}
	group.children.forEach(p => HightLightIds(p as Group, highlightIds));
}

export async function AssignParts(
	parts: IVisualPart[] | undefined,
	highlightIds: string[] | undefined,
	showOpen: boolean,
	showDocking: boolean
) {
	if (highlightIds === undefined) {
		highlightIds = JSON.parse(JSON.stringify(lastHighlightIds));
	}

	// The part groups
	let pas = parts;
	if (pas == undefined) {
		pas = JSON.parse(JSON.stringify(lastParts));
		if (highlightIds === undefined) {
			highlightIds = JSON.parse(JSON.stringify(lastHighlightIds));
		}
	} else {
		lastParts = JSON.parse(JSON.stringify(pas)); // keep the last parts
	}

	while (scene.children.length > 0) {
		scene.remove(scene.children[0]);
	}
	const labelDiv = document.querySelector('#labelRenderer');
	if (labelDiv !== null) {
		labelDiv.innerHTML = '';
	}

	const light = new HemisphereLight(0xcbcbcb, 0x080820, 1);
	scene.add(light);

	if (highlightIds == undefined) {
		highlightIds = [];
	}
	lastHighlightIds = JSON.parse(JSON.stringify(highlightIds));

	if (pas) {
		const posGroup = new Group();
		posGroup.name = 'pos-group';
		scene.add(posGroup);
		for (const part of pas) {
			//place the parts which have no group assigned
			await createPart(posGroup, part, showOpen, showDocking);
		}
	}

	// The X axis is red. The Y axis is green. The Z axis is blue
	scene.add(new AxesHelper(500));

	if (canvas === null) {
		canvas = document.getElementById('root3d');
		if (canvas !== null) {
			init3d(canvas);
		}
	}

	// try to highlight all parts, which we should highlight...
	HightLightIds(scene, highlightIds);
}

function init3d(myCanvas: HTMLElement) {
	camera = new PerspectiveCamera(75, myCanvas.clientWidth / myCanvas.clientHeight, 0.1, 10000);
	camera.position.z = 2000;

	renderer = new WebGLRenderer({ antialias: true });
	renderer.setClearColor(0xffffff, 0);
	renderer.domElement.style.position = 'absolute';

	renderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight);
	myCanvas.appendChild(renderer.domElement);

	labelRenderer = new CSS2DRenderer();
	labelRenderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight);
	labelRenderer.domElement.id = 'labelRenderer';

	myCanvas.appendChild(labelRenderer.domElement);

	let controls = new OrbitControls(camera, renderer.domElement);
	controls.target = new Vector3(300, 400, 0);
	controls.update();

	animate();
}

function animate() {
	requestAnimationFrame(animate);
	if (renderer !== undefined) {
		renderer.render(scene, camera!);
	}
	if (labelRenderer !== undefined) {
		labelRenderer.render(scene, camera!);
	}
}
