import { Box3, BoxGeometry, Camera, EdgesGeometry, Group, LineBasicMaterial, LineSegments, MathUtils, Mesh, MeshBasicMaterial, OrthographicCamera, Quaternion, Scene, Vector3 } from "three";
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js';
import room from './room.json';

export interface PosContourSegment {
  angle?: number | null;
  cmd: string;
  height?: number | null;
  thickness?: number | null;
  type?: string | null;
  x: number;
  y: number;
}

export interface PosContour {
  level: number;
  segments: PosContourSegment[];
}

export const renderSVG = (scene: Scene, camera: Camera, width: number, height: number, svgRenderer?: SVGRenderer): Blob => {
    const renderer = svgRenderer ?? new SVGRenderer();
    renderer.setSize(width, height);
    renderer.setQuality('low');
    renderer.setPrecision(0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    renderer.domElement.innerHTML = '';
    renderer.render(scene, camera);
    const svgData = renderer.domElement.outerHTML;
    return new Blob([svgData], { type: 'image/svg+xml' });
}

export const newPlanCamera = (orientation: Quaternion, sceneBox: Box3, margin: number): OrthographicCamera => {
    const sceneSize = sceneBox.getSize(new Vector3());
    const tempSize = sceneSize.clone().applyQuaternion(orientation);
    const projectionSize = new Vector3(Math.abs(tempSize.x), Math.abs(tempSize.y), Math.abs(tempSize.z))
        .multiplyScalar(0.5)
        .addScalar(margin);
    const sceneCenter = sceneBox.getCenter(new Vector3());
    const topCamera = new OrthographicCamera(
        -projectionSize.x,
        projectionSize.x,
        projectionSize.y,
        -projectionSize.y,
        -projectionSize.z,
        projectionSize.z,
    );
    topCamera.applyQuaternion(orientation);
    topCamera.position.copy(sceneCenter);
    return topCamera;
}

export const newFloorPlanScene = (scene3d: Scene): Scene => {
    const svgScene = scene3d.clone();
    setPositionOfPosGroup(svgScene);
	addWallGeometryToScene(svgScene);
    svgScene.traverse((node) => {
        if (node instanceof Mesh) {
            node.visible = false;
        } else if (node instanceof Group) {
            if (node.name.startsWith('part-Drilling')) {
                node.visible = false;
            } else if (node.name === 'walls') {
                node.visible = true;
            }
        }
    });
    return svgScene;
}

export const setPositionOfPosGroup = (scene: Scene): void => {
    const posGroup = scene.getObjectByName('pos-group');
    if (!posGroup) {
        return;
    }
    const groupPos = {
        pos: [4815.000228700228, 0, -3765.000178827904],
        rotationY: 270.00001282431185,
    };
    posGroup.position.set(groupPos.pos[0], groupPos.pos[1], groupPos.pos[2]);
	posGroup.rotation.y = MathUtils.degToRad(groupPos.rotationY);
}

export const addWallGeometryToScene = (scene: Scene): void => {
    const roomData = room as Array<PosContour>;
    if (!roomData?.length) {
        return;
    }
    const wallGroup = new Group();
    wallGroup.name = 'walls';
    scene.add(wallGroup);

    for (const contour of roomData) {
        for (let segmentI = 1; segmentI < contour.segments.length; segmentI++) {
            const segment = contour.segments[segmentI];
            const prevSegment = contour.segments[segmentI - 1];
            if (segment.cmd !== 'L' || segment.type !== 'wall' || !segment.height || !segment.thickness) {
               continue;
            }
            const segmentGroup = new WallSegment(prevSegment, segment);
            wallGroup.add(segmentGroup);
        }
    }
}

export class WallSegment extends Group {
    public direction: Vector3;
    public wallLength: number;
    public rotationY: number;
    public normalToWall: Vector3;

    constructor(from: PosContourSegment, to: PosContourSegment) {
        super();
        const thickness = to.thickness ?? 120;
        const height = to.height ?? 2800;
        const segmentStart = new Vector3(from.x, 0, from.y);
        const segmentEnd = new Vector3(to.x, 0, to.y);
        this.direction = new Vector3().subVectors(segmentEnd, segmentStart);
        this.wallLength = this.direction.length();  
        this.direction.normalize();
        this.rotationY = Math.atan2(this.direction.z, this.direction.x);
        this.normalToWall = new Vector3(-this.direction.z, 0, this.direction.x);
        this._createGeometry(segmentStart, segmentEnd, height, thickness);
    }

    private _createGeometry(segmentStart: Vector3, segmentEnd: Vector3, height: number, thickness: number): void {
        const segmentEndBack = segmentEnd.clone().addScaledVector(this.normalToWall, thickness);
        const segmentCenter = new Vector3().addVectors(segmentStart, segmentEndBack).multiplyScalar(0.5);
        this.position.copy(segmentCenter);
        this.position.y = height * 0.5;
        this.rotation.y = this.rotationY;

        const wallGeometry = new BoxGeometry(this.wallLength, height, thickness);
        const wallMesh = new Mesh(wallGeometry, new MeshBasicMaterial({ color: 0xcccccc }));
        this.add(wallMesh);

        const edgeGeometry = new EdgesGeometry(wallGeometry);
        const wireframe = new LineSegments(edgeGeometry, new LineBasicMaterial({ color: 0x000000, linewidth: 1 }));
        this.add(wireframe);
    }
}