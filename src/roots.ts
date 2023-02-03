import {
  AbstractMesh,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import { SingleRoot } from "./singleRoot";

export class Roots {
  scene: Scene;
  waterPools: Mesh[];
  waterConsumed = 0;
  isDragging = false;
  timer?: NodeJS.Timer;
  currentMousePosition = Vector3.Zero();
  rootsPoints: Vector3[][] = [[Vector3.Zero()]];
  currentRoot: number = 0;
  roots: SingleRoot[] = [];
  sphere!: Mesh;
  rootSpeed = 0.015;

  baseRoot: Mesh;

  constructor(scene: Scene, waterPools: Mesh[]) {
    this.scene = scene;
    this.baseRoot = MeshBuilder.CreateBox(
      "baseRoot",
      { size: 0.4 },
      this.scene
    );
    this.baseRoot.position.y = -0.2;
    this.waterPools = waterPools;
  }

  getIsDragging() {
    return this.isDragging;
  }

  isMeshInRoots(mesh: AbstractMesh) {
    return (
      this.baseRoot === mesh || this.roots.some((root) => root.tube === mesh)
    );
  }

  addRoot() {
    this.currentRoot += 1;
    this.rootsPoints.push([]);
    this.addRootPoint();
    this.roots[this.currentRoot] = new SingleRoot();
  }

  addRootPoint() {
    this.rootsPoints[this.currentRoot].push(this.sphere.position.clone());
  }

  addTime() {
    this.timer = setInterval(() => {
      this.addRootPoint();
    }, 300);
  }

  createSphere(position: Vector3) {
    this.sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 0.2 },
      this.scene
    );
    this.sphere.visibility = 0;
    this.sphere.position = position;
    this.sphere.checkCollisions = true;
    this.sphere.ellipsoid = new Vector3(0.08, 0.08, 0.08);
    this.isDragging = true;
    return this.sphere;
  }

  deleteSphere() {
    this.sphere.dispose();
    clearInterval(this.timer);
    this.isDragging = false;
  }

  moveSphere() {
    const direction = this.currentMousePosition.subtract(this.sphere.position);
    const distance = direction.length();
    direction.normalize();

    // Move the sphere in the direction of the mouse with speed 1
    if (distance > 0.1) {
      this.sphere?.moveWithCollisions(
        new Vector3(
          direction.x * this.rootSpeed,
          direction.y * this.rootSpeed,
          0
        )
      );
      this.roots[this.currentRoot].update([
        ...this.rootsPoints[this.currentRoot],
        this.sphere.position,
      ]);
      this.checkIfRootConsumesWater(this.roots[this.currentRoot]);
    }
  }

  checkIfRootConsumesWater(root: SingleRoot) {
    for (let i = 0; i < this.waterPools.length; i++) {
      const mesh = this.waterPools[i];

      if (root.tube.intersectsMesh(mesh)) {
        this.waterConsumed++; // Increment the counter

        this.waterPools.splice(i, 1);
        i--; // Decrement the index so that we don't skip the next mesh in the array
      }
    }
  }

  updateMousePosition(position: Vector3) {
    this.currentMousePosition = position;
  }
}
