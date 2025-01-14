import {
  Color3,
  Material,
  Mesh,
  MeshBuilder,
  StandardMaterial,
  TransformNode,
  Vector3,
} from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";
import { createNME } from "./WaterBlock";

export class Water {
  static m: Material;
  mesh: Mesh;
  transform: TransformNode;
  waterCollider: Mesh;

  constructor() {
    this.transform = new TransformNode("waterTransform");
    const animation = new TransformNode("waterTransform");
    this.mesh = MeshBuilder.CreateSphere("water", { diameter: 1, segments: 4 });
    this.waterCollider = MeshBuilder.CreateSphere("waterCollider", {
      diameter: 0.1,
      segments: 4,
    });
    this.waterCollider.visibility = 0;
    this.mesh.material = this.getMaterial();
    this.mesh.overlayAlpha = 0.5;
    this.mesh.scaling = new Vector3(Math.random() * 0.3 + 0.5, Math.random() * 0.3 + 0.5, 0.2);
    const scale1 = Vector3.One();
    const scale2 = new Vector3(Math.random() * 0.4 + 0.8, Math.random() * 0.4 + 0.8, 1);
    this.waterCollider.parent = this.mesh;
    this.mesh.parent = animation;
    animation.parent = this.transform;
    this.transform.scaling = new Vector3(1.5, 1, 1);
    animateToVector(animation, "scaling", 3, [scale1, scale2, scale1], true);
  }
  getMaterial = () => {
    if (Water.m) {
      return Water.m;
    }

    const m = createNME();
    m.alpha = 0.65;
    m.alphaMode = Material.MATERIAL_ALPHABLEND;
    Water.m = m;
    return m;
  };

  consumed() {
    animateTo(this.mesh, "visibility", 0.5, [1, 0.8, 1], true);
  }
}
