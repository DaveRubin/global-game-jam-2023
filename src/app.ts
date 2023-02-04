import {
  Engine,
  FreeCamera,
  HemisphericLight,
  Scene,
  Vector3,
} from "@babylonjs/core";
import "@babylonjs/core/Debug/debugLayer";
import { clipPlaneFragment } from "@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment";
import "@babylonjs/inspector";
import "@babylonjs/loaders";
import "@babylonjs/loaders/glTF";
import { CameraConrtoller } from "./CameraController";
import { DEGREE } from "./consts";
import { MainGUI } from "./gui";
import { MainGame } from "./MainGame";
import { createMainStage } from "./mainStage";
import { Plant } from "./plant";
import { Roots } from "./roots";
import { SoundMananger } from "./SoundManager";
import { TutorialHand } from "./TutorialHand";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

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

    const sounds = new SoundMananger();
    const { dirt, waterPools } = createMainStage();
    const tutorial = new TutorialHand();
    tutorial.showDrag(new Vector3(0.25, -0.45, 0), new Vector3(0.65, -1.4));

    const keysState = { shiftPressed: false };

    const upgradeSequence = async () => {
      controller.isUpgrade = true;
      // go to base
      await controller.focusOnBase();
      await delay(300);
      // play sound
      sounds.playUpgrade();
      // add leaf
      await Plant.instance.addPairOfLeaves(Math.random() * 360);
      await delay(1500);
      // increase rate
      controller.isUpgrade = false;
      await controller.goToBase();
    };

    // hide/show the Inspector
    window.addEventListener("keyup", (ev) => {
      if (!ev.shiftKey && keysState.shiftPressed) {
        keysState.shiftPressed = false;
      }
    });
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
      if (ev.shiftKey) {
        keysState.shiftPressed = true;
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

        if (pickDirt.hit && pickDirt.pickedPoint) {
          const target = pickDirt.pickedPoint;
          if (!keysState.shiftPressed) {
            target.z = 0;
            const sph = roots.createRootTip(target);
            controller.startFollow(sph);
            roots.updateMousePosition(target);
            sounds.startDig();
            roots.addRoot();
            roots.startRootPointInterval();
          } else {
            controller.goTo(target, true);
          }
        }
      }
    });
    const finishFollow = () => {
      sounds.stopDig();
      roots.deleteRootTip();
      controller.stopFollow();
    };

    canvas.addEventListener("pointerup", () => {
      if (roots.getIsDragging()) {
        finishFollow();
      }
    });

    let lastTick = Date.now();

    scene.registerBeforeRender(() => {
      if (roots.getIsDragging() && game.timeLeft > 0) {
        let pickResult = scene.pick(scene.pointerX, scene.pointerY, (mesh) => {
          return mesh === dirt;
        });
        let target = pickResult.pickedPoint;
        if (target) {
          target.z = 0;
          roots.updateMousePosition(target);
        }
      } else if (game.timeLeft <= 0) {
        finishFollow();
      }
      const diffInMS = Date.now() - lastTick;
      lastTick = Date.now();
      if (roots.touchedWater) {
        game.updateEnergyPerTick(roots.waterConsumed);
        if (tutorial.isTutorial) {
          tutorial.stopDrag();
        }

        upgradeSequence();
        finishFollow();
      }

      if (roots.getIsDragging()) {
        roots.moveRootTip();
        game.useEnergy(diffInMS);
      } else {
        game.updateEnergy(diffInMS);
      }
    });

    // run the main render loop
    engine.runRenderLoop(() => {
      scene.render();
    });
  }
}
new App();
