import { Camera, Engine, Mesh, PointLight, TransformNode, Vector3 } from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";

const REGULAR_ZOOM = -12;
const CLOSE_UP = -5;

export class CameraConrtoller {
  cameraContainer: TransformNode;
  target?: Mesh;
  light: PointLight;
  constructor(camera: Camera) {
    this.cameraContainer = new TransformNode("cameraNode");
    this.light = new PointLight("cameraPointLight", new Vector3(0, 0, 2), Engine.LastCreatedScene!);
    this.light.radius = 1;
    this.light.range = 5;
    this.light.intensity = 2;

    this.light.parent = this.cameraContainer;
    camera.parent = this.cameraContainer;
    this.cameraContainer.position.set(0, 0.1, REGULAR_ZOOM);
    Engine.LastCreatedScene?.onBeforeRenderObservable.add(() => {
      if (this.target) {
        const diff = this.target.position.subtract(this.cameraContainer.position);
        diff.z = 0;

        this.cameraContainer.position.x += diff.x / 4;
        this.cameraContainer.position.y += diff.y / 4;
      }
    });
  }
  startFollow = (target: Mesh) => {
    this.target = target;
    animateTo(this.cameraContainer, "position.z", 1, [REGULAR_ZOOM, CLOSE_UP]);
  };
  stopFollow = () => {
    this.target = undefined;
    animateTo(this.cameraContainer, "position.z", 1, [CLOSE_UP, REGULAR_ZOOM]);
    animateToVector(this.cameraContainer, "position", 1, [
      this.cameraContainer.position,
      new Vector3(0, 0.1, REGULAR_ZOOM),
    ]);
  };
}
