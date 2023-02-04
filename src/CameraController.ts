import {
  Camera,
  Color3,
  Engine,
  Mesh,
  MeshBuilder,
  Nullable,
  PointLight,
  Texture,
  TransformNode,
  Vector3,
} from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";
import { createMaterial } from "./materials";

const REGULAR_ZOOM = -12;
const CLOSE_UP = -5;

const baseLocation = new Vector3(0, 0.1, REGULAR_ZOOM);
const baseZoomLocation = new Vector3(0, 2, CLOSE_UP);

export class CameraConrtoller {
  cameraContainer: TransformNode;
  target?: Mesh;
  light: PointLight;
  lastExitPoint = baseLocation;
  isUpgrade: boolean = false;
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
    const size = 20;
    const sky = MeshBuilder.CreatePlane("sky", {
      width: size,
      height: size,
    });
    const m = createMaterial(Color3.White(), "skyMaterial");
    m.diffuseTexture = new Texture("./textures/gradient.png");
    m.specularColor = Color3.Black();
    m.emissiveColor = Color3.White();
    sky.material = m;
    sky.position.z = 20;
    sky.scaling.x = 2;
    sky.parent = this.cameraContainer;
  }
  startFollow = (target: Mesh) => {
    this.target = target;
    this.lastExitPoint = new Vector3(target.position.x, target.position.y, REGULAR_ZOOM);
    animateTo(this.cameraContainer, "position.z", 1, [REGULAR_ZOOM, CLOSE_UP]);
  };

  stopFollow = () => {
    this.target = undefined;

    if (!this.isUpgrade) {
      animateTo(this.cameraContainer, "position.z", 1, [CLOSE_UP, REGULAR_ZOOM]);
      animateToVector(this.cameraContainer, "position", 1, [
        this.cameraContainer.position,
        this.lastExitPoint,
      ]);
    }
  };

  goTo(target: Vector3, zoomOut = false) {
    return animateToVector(this.cameraContainer, "position", 1, [
      this.cameraContainer.position,
      zoomOut ? new Vector3(target.x, target.y, REGULAR_ZOOM) : target,
    ]);
  }

  goToBase() {
    if (!this.isUpgrade) {
      return this.goTo(baseLocation);
    }
  }
  focusOnBase() {
    return this.goTo(baseZoomLocation);
  }
}
