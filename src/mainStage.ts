import { Color3, Engine, MeshBuilder, PointLight, TransformNode, Vector3 } from "@babylonjs/core";
import { DEGREE } from "./consts";
import { createMaterial, createUndergroundMaterial } from "./materials";
import { Plant } from "./plant";
import { Rock } from "./rock";
import { Water } from "./Water";
import { createNME } from "./WaterBlock";

const groundWidth = 100;
const skyHeight = 50;
const groundDepth = 1;

export function createMainStage() {
  createGround();
  createRocks();
  const waterPools = createWater();
  new Plant();
  const dirt = createUnderground();
  return { waterPools, dirt };
}

function createGround() {
  const root = new TransformNode("ground");

  const topGround = MeshBuilder.CreatePlane("topGround", {
    width: groundWidth,
    height: groundDepth,
  });
  const bottomGround = MeshBuilder.CreatePlane("bottomGround", {
    width: groundWidth,
    height: groundDepth,
  });
  topGround.material = createMaterial(new Color3(0, 1, 0), "groundTop");
  bottomGround.material = createMaterial(new Color3(1, 1, 0), "groundBottom");
  bottomGround.parent = root;
  topGround.parent = root;

  root.addRotation(DEGREE * 90, 0, 0);
}

function createUnderground() {
  const root = new TransformNode("underground");
  const dirt = MeshBuilder.CreatePlane("dirt", {
    width: skyHeight,
    height: skyHeight,
  });
  dirt.material = createUndergroundMaterial();
  dirt.position.y = -skyHeight / 2;
  dirt.position.z = -0;
  const light = new PointLight("point", new Vector3(0, 0, -0.5), Engine.LastCreatedScene!);
  light.radius = 1;
  light.range = 5;
  light.intensity = 1;
  light.parent = root;
  dirt.parent = root;
  return dirt;
}

function createRocks() {
  const maxX = 15;
  const maxY = 70;
  const yRanges = [
    [5, maxY - 5],
    [15, maxY - 15],
    [30, maxY - 30],
    [40, maxY - 40],
    [50, maxY - 50],
  ];

  for (let i = 0; i < 400; i++) {
    const x = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
    const yRange = yRanges[i % yRanges.length];
    const y = Math.floor(Math.random() * (yRange[1] - yRange[0] + 1)) + yRange[0];
    new Rock(new Vector3(x, -y, 0));
  }
}

function createWater() {
  const waterPools = [];
  const startingWater = new Water();
  startingWater.transform.position = new Vector3(0.5, -1.3, 0);
  waterPools.push(startingWater.waterCollider);

  const maxX = 15;
  const maxY = 70;
  const yRanges = [
    [maxY - 1, 1],
    [maxY - 3, 3],
    [maxY - 5, 5],
    [maxY - 15, 10],
    [maxY - 25, 20],
    [maxY - 35, 30],
    [maxY - 45, 40],
    [maxY - 55, 50],
    [maxY - 60, 60],
  ];

  for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
    const yRange = yRanges[i % yRanges.length];
    const y = Math.floor(Math.random() * (yRange[0] - yRange[1] + 1)) + yRange[1];
    const w = new Water();
    w.transform.position = new Vector3(x, -y, 0);
    waterPools.push(w.waterCollider);
  }
  return waterPools;
}
