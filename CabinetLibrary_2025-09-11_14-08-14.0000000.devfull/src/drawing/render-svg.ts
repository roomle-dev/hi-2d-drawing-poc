import { Box3, Camera, Group, Mesh, OrthographicCamera, Quaternion, Scene, Vector3 } from "three";
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js';

export const renderSVG = (scene: Scene, camera: Camera, width: number, height: number): Blob => {
    const svgRenderer = new SVGRenderer();
    svgRenderer.setSize(width, height);
    svgRenderer.setQuality('low');
    svgRenderer.setPrecision(0);
    svgRenderer.domElement.innerHTML = '';
    svgRenderer.render(scene, camera);
    const svgData = svgRenderer.domElement.outerHTML;
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
    svgScene.traverse((node) => {
        if (node instanceof Mesh) {
            node.visible = false;
        } else if (node instanceof Group) {
            if (node.name.startsWith('part-Drilling')) {
                node.visible = false;
            }
        }
    });
    return svgScene;
}