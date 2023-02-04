import { Mesh, MeshBuilder, TransformNode, Vector3 } from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";
import { DEGREE } from "./consts";
import { Plant } from "./plant";
import { getRandomRangeDegree } from "./util";

const BASE_SIZE = 1.8;
const startSize = new Vector3(BASE_SIZE, BASE_SIZE, BASE_SIZE);

export class Leaf {
  node: TransformNode;
  stem: TransformNode;
  leaves: Mesh[];
  growFactor = 0.95;
  constructor() {
    this.node = new TransformNode("full-leaf");
    this.stem = new TransformNode("stem");
    this.stem.parent = this.node;
    this.leaves = [];
    this.createStem();
    this.createLeaf(1, 60);
    this.createLeaf(Math.random() * 0.3 + 0.35, 80, 0.4);
    this.stem.scaling.setAll(0);
    this.creationAnimation();
  }
  creationAnimation() {
    const bump = DEGREE * 10;
    const originalRotation = this.leaves.map((l) => l.rotation.x);
    this.leaves.forEach((l, i) => {
      animateTo(l, "rotation.x", 1, [DEGREE * 180, originalRotation[i] - bump, originalRotation[i]]);
    });
    animateToVector(this.stem, "scaling", 1, [Vector3.Zero(), startSize]);
  }

  createStem() {
    const height = 1;
    const stem = MeshBuilder.CreateCylinder("steam", {
      height,
      diameterBottom: 0.1,
      diameterTop: 0.05,
      updatable: true,
      tessellation: 4,
    });
    stem.setPivotPoint(new Vector3(0, -height / 2, 0));
    stem.position.y = height / 2;
    stem.material = Plant.instance.getPlantMaterial();
    stem.parent = this.stem;
  }

  private createLeaf(position: number, rotation = 60, scale = 1) {
    const widths = [0, 0.8, 1, 0.9, 0.7, 0];
    const WIDTH_SCALE = 0.3;
    const leaf = MeshBuilder.CreateTube("tube", {
      path: widths.map((w, i) => new Vector3(0, i / (widths.length - 1))),
      radiusFunction: (i) => widths[i],
      updatable: true,
    });

    leaf.material = Plant.instance.getPlantMaterial();
    leaf.setPivotPoint(new Vector3(0, 0, 0));

    leaf.parent = this.stem;
    leaf.setPositionWithLocalVector(new Vector3(0, position, 0));
    leaf.rotation = new Vector3(getRandomRangeDegree(rotation - 30, rotation + 30), 0, 0);
    leaf.scaling = new Vector3(WIDTH_SCALE * scale, 1 * scale, 0.1 * scale);

    this.leaves.push(leaf);
  }
  grow = () => {
    const bump = -DEGREE * 10;
    const bumpArr = [0, bump, -bump, bump / 2, -bump / 4, bump / 8, 0];
    const originalRotation = this.leaves.map((l) => l.rotation.x);
    this.leaves.forEach((l, i) => {
      animateTo(
        l,
        "rotation.x",
        1,
        bumpArr.map((delta) => originalRotation[i] + delta)
      );
    });

    const lastRotation = this.node.rotation.x;
    const scale = this.stem.scaling.x + 0.2;

    animateTo(this.node, "rotation.x", 1, [lastRotation, lastRotation * this.growFactor]);
    animateToVector(this.stem, "scaling", 1, [this.stem.scaling, new Vector3(scale, scale, scale)]);
  };
}
