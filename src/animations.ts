import { Animation, CubicEase, EasingFunction, Engine, Vector3 } from "@babylonjs/core";

let runner = 1;
const ease = new CubicEase();
ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
export const animateTo = (target: any, key: string, duration: number, values: any[], loopMode = false) =>
  new Promise((resolve) => {
    const frameRate = 10;

    const animation = new Animation(
      "xSlide" + runner,
      key,
      frameRate,
      Animation.ANIMATIONTYPE_FLOAT,
      loopMode ? Animation.ANIMATIONLOOPMODE_CYCLE : Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    animation.setEasingFunction(ease);
    const keyDuration = duration / values.length;

    animation.setKeys(
      values.map((value, index) => ({
        frame: index * keyDuration * frameRate,
        value,
      }))
    );

    Engine.LastCreatedScene?.beginDirectAnimation(
      target,
      [animation],
      0,
      duration * frameRate,
      loopMode,
      undefined,
      () => {
        resolve(true);
      }
    );
  });

export const animateToVector = (
  target: any,
  key: string,
  duration: number,
  values: Vector3[],
  loopMode = false
) =>
  new Promise((resolve) => {
    animateTo(
      target,
      key + ".x",
      duration,
      values.map((val) => val.x),
      loopMode
    );
    animateTo(
      target,
      key + ".y",
      duration,
      values.map((val) => val.y),
      loopMode
    );
    animateTo(
      target,
      key + ".z",
      duration,
      values.map((val) => val.z),
      loopMode
    );
  });
