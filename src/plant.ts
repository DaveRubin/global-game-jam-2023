import {
  Color3,
  Color4,
  Engine,
  MeshBuilder,
  ParticleSystem,
  StandardMaterial,
  Texture,
  TransformNode,
  Vector3,
  VertexBuffer,
} from "@babylonjs/core";
import { animateTo, animateToVector } from "./animations";
import { CustomAssetManger } from "./assetsManager";
import { DEGREE } from "./consts";
import { Leaf } from "./Leaf";
import { createMaterial } from "./materials";
import { getRandomRangeDegree } from "./util";

export class Plant {
  leavesCreated = 0;
  material: StandardMaterial;
  root: TransformNode;
  pairs: TransformNode[];
  leaves: Leaf[];
  static instance: Plant;
  particle: ParticleSystem;

  constructor() {
    this.leaves = [];
    this.root = new TransformNode("plant");
    this.material = this.getPlantMaterial();
    const base = this.getPlantBase();
    this.pairs = [];
    this.particle = this.initParticles();
    base.position.set(0, -0.2, 0);

    base.parent = this.root;
    Plant.instance = this;
    this.addPairOfLeaves(-90);
  }

  initParticles = () => {
    const particleSystem = new ParticleSystem("particles", 2000, Engine.LastCreatedScene!);

    particleSystem.particleTexture = CustomAssetManger.instance.particle;
    particleSystem.emitRate = 40;
    particleSystem.minSize = 0.005;
    particleSystem.minSize = 0.2;
    particleSystem.color1 = Color4.FromHexString("#8888ff");
    particleSystem.color2 = Color4.FromHexString("#0088ff");
    particleSystem.emitter = new Vector3(0, 0.5, 0);
    return particleSystem;
  };
  addPairOfLeaves = (baseRotation: number) => {
    const pair = new TransformNode("pairOfLeaves");
    const small = new Leaf();
    const big = new Leaf();
    this.particleBurst();

    big.node.rotation.set(15 * DEGREE, (180 + baseRotation) * DEGREE, 0);
    small.node.rotation.set(15 * DEGREE, baseRotation * DEGREE, 0);
    const smallSize = 0.25 + Math.random() / 10;
    const bigSize = 0.3 + Math.random() / 5;
    big.node.scaling.setAll(bigSize);
    small.node.scaling.setAll(smallSize);
    small.node.parent = pair;
    big.node.parent = pair;
    let anim: Promise<any> = new Promise((a) => {});
    this.pairs.push(pair);
    this.pairs.forEach((p, i) => {
      const prev = p.rotation.y;
      anim = animateTo(p, "rotation.y", 2, [prev, prev + getRandomRangeDegree(10, 20)]);
    });
    this.leaves.push(big, small);
    return anim;
  };

  private getPlantBase() {
    const sphere = MeshBuilder.CreateSphere("plantBase", { segments: 1, diameter: 0.7 });
    sphere.material = this.material;
    return sphere;
  }

  private createLeaf() {
    const stemNode = new TransformNode("stemNode");
    const stem = MeshBuilder.CreateCylinder("steam", {
      height: 2,
      diameterBottom: 0.2,
      diameterTop: 0.1,
      updatable: true,
      tessellation: 4,
    });
    stem.material = this.getPlantMaterial();

    const leaf = MeshBuilder.CreateCylinder("leaf", {
      height: 2,
      diameterBottom: 1,
      diameterTop: 1,
      updatable: true,
      tessellation: 5,
      subdivisions: 4,
    });
    leaf.material = this.getPlantMaterial();
    leaf.setPivotPoint(new Vector3(0, -1, 0));
    const vertices = leaf.getVerticesData(VertexBuffer.PositionKind);
    const map = {
      ["-1"]: 0,
      ["-0.5"]: 1,
      ["0"]: 1.5,
      ["0.5"]: 1.2,
      ["1"]: 0,
    };
    vertices!.forEach((v, i, arr) => {
      if (i % 3 === 0) {
        const key = arr[i + 1].toString() as unknown as keyof typeof map;
        const y = map[key];
        arr[i] *= y;
        arr[i + 2] *= 0.2 * y;
      }
    });

    leaf.setVerticesData(VertexBuffer.PositionKind, vertices!);
    leaf.addRotation(DEGREE * 15, 0, 0);
    stem.position.y = 1;
    leaf.position.y = 2.8;
    stem.parent = stemNode;
    leaf.parent = stemNode;

    return stemNode;
  }

  getPlantMaterial() {
    const mat = createMaterial(Color3.FromHexString("#5EED5E"), "leaf");
    mat.specularPower = 5.7;
    mat.diffuseColor = Color3.FromHexString("#4BBD4B");
    mat.emissiveColor = Color3.FromHexString("#183A2B");
    mat.ambientColor = Color3.FromHexString("#407D3A");
    mat.specularColor = Color3.FromHexString("#263D1C");
    return mat;
  }

  particleBurst() {
    this.particle.start();
    setTimeout(() => {
      this.particle.stop();
    }, 1500);
  }
}
