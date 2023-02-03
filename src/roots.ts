import {
  AbstractMesh,
  Mesh,
  MeshBuilder,
  PointerEventTypes,
  Scene,
  Vector3,
} from "@babylonjs/core";

export class Roots {
  scene: Scene;
  isDragging = false;
  timer = null;
  currentMousePosition = Vector3.Zero();
  roots?: Mesh;
  sphere?: Mesh;
  rootSpeed;

  constructor(scene: Scene) {
    this.scene = scene;
    this.roots = MeshBuilder.CreateBox("baseRoot", { size: 0.4 }, this.scene);
    this.roots.position.y = -0.2;
    this.rootSpeed = 0.015;
  }

  // on click on other roots create sphere on mouse location
  // that goes to mouse possition moves at speed of 1

  getIsDragging() {
    return this.isDragging;
  }

  isMeshInRoots(mesh: AbstractMesh) {
    return mesh === this.roots;
  }

  createSphere() {
    this.sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 0.7 },
      this.scene
    );
    // this.sphere.position = position;
    this.isDragging = true;
  }

  deleteSphere() {
    this.isDragging = false;
    this.sphere.dispose();
  }

  moveSphere(position: Vector3) {
    // Calculate the direction vector from the sphere to the mouse
    const direction = position.subtract(this.sphere.position);
    const distance = direction.length();
    direction.normalize();

    // Move the sphere in the direction of the mouse with speed 1
    if (distance > 0) {
      this.sphere?.moveWithCollisions(
        new Vector3(
          direction.x * this.rootSpeed,
          direction.y * this.rootSpeed,
          0
        )
      );
    }
  }
}
