import { Engine, Sound } from "@babylonjs/core";
import { animateTo } from "./animations";

export class SoundMananger {
  dig: Sound;
  constructor() {
    this.dig = new Sound("dig", "./sounds/dig.mp3");
    this.dig.loop = true;
  }
  startDig = () => {
    this.dig.play(0, Math.random() * 4);
    const gain = this.dig.getSoundGain();
    if (gain) {
      gain.gain.value = 0;
      animateTo(gain.gain, "value", 1, [0, 1]);
    }
  };
  stopDig = () => {
    const gain = this.dig.getSoundGain();

    if (gain) {
      animateTo(gain.gain, "value", 1, [1, 0]).then(() => {
        this.dig.stop();
      });
    }
  };
}
