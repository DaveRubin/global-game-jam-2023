import { Color3, Engine, StandardMaterial, Texture } from "@babylonjs/core";
import { CustomAssetManger } from "./assetsManager";

export const createMaterial = (color: Color3, name = "default") => {
  const scene = Engine.LastCreatedScene;
  const material = new StandardMaterial(name, scene!);
  material.alpha = 1;
  material.diffuseColor = color;
  return material;
};

export const createUndergroundMaterial = () => {
  const mat = new StandardMaterial("underground");
  const scale = 16;
  const textures = [];

  const { diff, amb, norm } = CustomAssetManger.instance.ground;

  mat.diffuseTexture = diff;
  mat.specularColor = Color3.Black();
  mat.ambientTexture = amb;

  textures.push(diff);
  textures.push(amb);
  textures.push(norm);

  mat.specularPower = 180;

  textures.forEach((tex) => {
    tex.uScale = scale;
    tex.vScale = scale;
  });

  return mat;
};
