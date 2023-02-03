import { Color3, MeshBuilder, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";

export class Rock {
  ELLIPSOID = new Vector3(0.4, 0.4, 0.4);

  rockTypes = [
    [
      { size: 0.7, add: new Vector3(0, 0, 0) },
      { size: 1.1, add: new Vector3(-0.5, 0.07, 0) },
      { size: 1.4, add: new Vector3(-0.07, 0, 0) },
      { size: 1.2, add: new Vector3(-0.1, 0, 0) },
      { size: 1.2, add: new Vector3(-0.6, -0.03, 0) },
      { size: 1.1, add: new Vector3(0.7, -0.03, 0) },
      { size: 0.8, add: new Vector3(0.9, 0.4, 0) },
      { size: 0.4, add: new Vector3(1.2, 0.1, 0) },
    ],
    [
      { size: 1, add: new Vector3(0, 0, 0) },
      { size: 1.1, add: new Vector3(0.2, 0.05, 0) },
      { size: 0.9, add: new Vector3(0.4, 0, 0) },
      { size: 0.9, add: new Vector3(-0.4, 0.3, 0) },
      { size: 0.7, add: new Vector3(-0.45, 0.35, 0) },
    ],
    [
      { size: 1.5, add: new Vector3(0, 0, 0) },
      { size: 1.5, add: new Vector3(-0.4, 0, 0) },
      { size: 1.7, add: new Vector3(-0.4, 0.3, 0) },
      { size: 1.3, add: new Vector3(-0.4, 0.6, 0) },
      { size: 0.8, add: new Vector3(-0.4, -0.7, 0) },
    ],
    [
      { size: 0.6, add: new Vector3(0, 0, 0) },
      { size: 0.3, add: new Vector3(1.1, 0.7, 0) },
      { size: 0.4, add: new Vector3(-1.5, 0, 0) },
      { size: 0.55, add: new Vector3(-1.3, -1, 0) },
    ],
    [
      { size: 1.3, add: new Vector3(-0.2, 0, 0) },
      { size: 0.7, add: new Vector3(0, -0.3, 0) },
      { size: 1.5, add: new Vector3(0.3, -0.1, 0) },
      { size: 1, add: new Vector3(0.5, -0.6, 0) },
      { size: 0.9, add: new Vector3(0.8, 0.4, 0) },
      { size: 1.1, add: new Vector3(0.4, 0.7, 0) },
    ],
  ];

  getRandomType() {
    return this.rockTypes[Math.floor(Math.random() * this.rockTypes.length)];
  }
  static mat: StandardMaterial;
  getMaterial = () => {
    if (Rock.mat) {
      return Rock.mat;
    }
    const mat = new StandardMaterial("rockMaterial");
    const scale = 2;
    const textures = [];
    const ao = new Texture("./textures/rock_04_ao_1k.jpg");
    const bump = new Texture("./textures/rock_04_bump_1k.jpg");
    const diff = new Texture("./textures/rock_04_diff_1k.jpg");
    const nor_dx = new Texture("./textures/rock_04_nor_dx_1k.jpg");
    mat.ambientTexture = ao;
    mat.bumpTexture = bump;

    mat.invertNormalMapX = true;
    mat.invertNormalMapY = true;
    mat.diffuseTexture = diff;
    mat.specularColor = Color3.Black();

    textures.push(ao);
    textures.push(diff);
    textures.push(bump);
    textures.push(nor_dx);

    mat.specularPower = 180;

    textures.forEach((tex) => {
      tex.uScale = scale;
      tex.vScale = scale;
    });
    Rock.mat = mat;
    return mat;
  };

  constructor(position: Vector3) {
    this.getRandomType().forEach(({ size, add }) => {
      this.createRockPart(position, size, add);
    });
  }

  createRockPart(position: Vector3, size: number, add: Vector3) {
    const rockPart = MeshBuilder.CreateBox("rockPart", {
      size,
    });
    rockPart.material = this.getMaterial();
    rockPart.position = position.add(add);
    rockPart.checkCollisions = true;
    rockPart.ellipsoid = this.ELLIPSOID;
  }
}
