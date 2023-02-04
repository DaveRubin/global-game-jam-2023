import { Color3, Engine, Mesh, MeshBuilder, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { animateTo } from "./animations";
import { CustomAssetManger } from "./assetsManager";
import { DEGREE } from "./consts";

export class TutorialHand {
  hand: Mesh;
  isTutorial = false;
  constructor() {
    this.hand = MeshBuilder.CreatePlane("hand");
    const m = new StandardMaterial("handMaterial");
    const t = CustomAssetManger.instance.hand;
    t.hasAlpha = true;
    m.diffuseTexture = t;
    m.emissiveColor = Color3.White();
    m.specularColor = Color3.Black();
    m.useAlphaFromDiffuseTexture = true;
    this.hand.material = m;
    this.hand.position.z = -2;
  }

  showDrag(base: Vector3, water: Vector3) {
    this.isTutorial = true;
    animateTo(this.hand, "position.x", 2, [base.x, base.x, water.x, water.x], true);
    animateTo(this.hand, "position.y", 2, [base.y, base.y, water.y, water.y], true);
    animateTo(this.hand, "rotation.z", 2, [0, DEGREE * 15, DEGREE * 15, DEGREE * 15], true);
  }

  stopDrag() {
    Engine.LastCreatedScene?.stopAnimation(this.hand);
    animateTo(this.hand, "visibility", 2, [1, 0]);
    this.isTutorial = false;
  }
}
