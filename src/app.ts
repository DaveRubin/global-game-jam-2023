import {
  Engine,
  FreeCamera,
  HemisphericLight,
  Scene,
  Vector3,
} from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders";
import "@babylonjs/loaders/glTF";
import { CameraConrtoller } from "./CameraController";
import { DEGREE } from "./consts";
import { MainGUI } from "./gui";
import { MainGame } from "./MainGame";
import { createMainStage } from "./mainStage";
import { Roots } from "./roots";
import { SoundMananger } from "./SoundManager";

class App {
  constructor() {
    // create the canvas html element and attach it to the webpage
    var canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.id = "gameCanvas";
    document.body.appendChild(canvas);

    var engine = new Engine(canvas, true);
    var scene = new Scene(engine);

    const camera = new FreeCamera("camera1", Vector3.Zero(), scene);
    const controller = new CameraConrtoller(camera);
    var mainLight: HemisphericLight = new HemisphericLight(
      "light1",
      new Vector3(0, -DEGREE * 90, DEGREE * 90),
      scene
    );
    mainLight.intensity = 0.2;
    const game = new MainGame();
    const mainGui = new MainGUI();
    mainGui.progress = game.energyRatio;
    const soundManage = new SoundMananger();
    // animateFloat(mainGui, "progress", 4, [0, 1]).then(() => console.log("DONE!"));
    const { dirt, waterPools } = createMainStage();
    scene.registerBeforeRender(() => {
      // leaf.addRotation(0, 0.05, 0);
    });
    // scene.onPointerDown = function castRay() {
    //   var ray = scene.createPickingRay(scene.pointerX, scene.pointerY, Matrix.Identity(), camera, false);

    //   var hit = scene.pickWithRay(ray);

    //   if (hit?.pickedMesh?.id === "plantBase") {
    //     const p = hit?.pickedMesh?.position;
    //     animateTo(CoT, "position.x", 1, [CoT.position.x, p.x]);
    //     animateTo(CoT, "position.y", 1, [CoT.position.y, p.y]);
    //   }
    // };

    // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {
      // Shift+Ctrl+Alt+I
      if (ev.key === "i") {
        // if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.key === 'i') {
        if (scene.debugLayer.isVisible()) {
          scene.debugLayer.hide();
        } else {
          scene.debugLayer.show();
        }
      }
    });

    const roots = new Roots(scene, waterPools);

    canvas.addEventListener("pointerdown", (event) => {
      const pickRoots = scene.pick(event.clientX, event.clientY, (mesh) =>
        roots.isMeshInRoots(mesh)
      );
      if (pickRoots.hit) {
        const pickDirt = scene.pick(
          event.clientX,
          event.clientY,
          (mesh) => mesh === dirt
        );
        if (pickDirt.hit) {
          const target = pickDirt.pickedPoint;
          target!.z = 0;
          const sph = roots.createSphere(target!);
          controller.startFollow(sph);
          roots.updateMousePosition(target!);
          soundManage.startDig();
          roots.addRoot();
          roots.addTime();
        }
      }
    });
    const finishFollow = () => {
      soundManage.stopDig();
      roots.deleteSphere();
      controller.stopFollow();
    };

    canvas.addEventListener("pointermove", (event) => {
      if (roots.getIsDragging() && game.currentEnergy > 0) {
        let pickResult = scene.pick(event.clientX, event.clientY, (mesh) => {
          return mesh === dirt;
        });
        let target = pickResult.pickedPoint;
        target!.z = 0;
        roots.updateMousePosition(target!);
      } else if (game.currentEnergy <= 0) {
        finishFollow();
      }
    });

    canvas.addEventListener("pointerup", () => {
      if (roots.getIsDragging()) {
        finishFollow();
      }
    });

    scene.registerBeforeRender(() => {
      if (roots.getIsDragging()) {
        roots.moveSphere();
        game.updateEnergyPerTick(roots.waterConsumed);
      }
    });

    // run the main render loop
    engine.runRenderLoop(() => {
      if (!roots.getIsDragging()) {
        game.updateEnergy();
      } else {
        game.useEnergy();
      }

      mainGui.progress = game.energyRatio;
      scene.render();
    });
  }
}
new App();
