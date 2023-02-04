import {
  AbstractMesh,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";
import { Plant } from "./plant";
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
  rootTip!: Mesh;
  rootSpeed = 0.015;
  touchedWater: boolean = false;

  baseRoot: Mesh;

  constructor(scene: Scene, waterPools: Mesh[]) {
    this.scene = scene;
    this.baseRoot = MeshBuilder.CreateBox(
      "baseRoot",
      { size: 0.4 },
      this.scene
    );
    this.baseRoot.position.y = -0.2;
    this.baseRoot.visibility = 0;
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
    this.rootsPoints[this.currentRoot].push(this.rootTip.position.clone());
  }

  startRootPointInterval() {
    this.timer = setInterval(() => {
      this.addRootPoint();
    }, 300);
  }

  createRootTip(position: Vector3) {
    this.rootTip = MeshBuilder.CreateSphere(
      "rootTip",
      { diameter: 0.2 },
      this.scene
    );
    this.rootTip.visibility = 0;
    this.rootTip.position = position;
    this.rootTip.checkCollisions = true;
    this.rootTip.ellipsoid = new Vector3(0.05, 0.05, 0.05);
    this.isDragging = true;

    const rootStart = MeshBuilder.CreateSphere(
      "rootStart",
      { diameter: 0.17 },
      this.scene
    );
    animateToVector(
      rootStart,
      "scaling",
      2,
      [
        new Vector3(0.4, 0.4, 0.4),
        new Vector3(0.6, 0.6, 0.6),
        new Vector3(0.8, 0.8, 0.8),
        new Vector3(1, 1, 1),
      ],
      false
    );
    rootStart.material = Plant.instance.material;
    rootStart.position = position.clone();

    return this.rootTip;
  }

  deleteRootTip() {
    this.rootTip.dispose();
    clearInterval(this.timer);
    this.touchedWater = false;
    this.isDragging = false;
  }

  moveRootTip() {
    const direction = this.currentMousePosition.subtract(this.rootTip.position);
    const distance = direction.length();
    direction.normalize();
    if (distance > 0.1) {
      this.rootTip?.moveWithCollisions(
        new Vector3(
          direction.x * this.rootSpeed,
          direction.y * this.rootSpeed,
          0
        )
      );
      this.roots[this.currentRoot].update([
        ...this.rootsPoints[this.currentRoot],
        this.rootTip.position,
      ]);
      this.checkIfRootConsumesWater();
    }
  }

  checkIfRootConsumesWater() {
    for (let i = 0; i < this.waterPools.length; i++) {
      const mesh = this.waterPools[i];

      if (this.rootTip.intersectsMesh(mesh)) {
        this.touchedWater = true;
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
