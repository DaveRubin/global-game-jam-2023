import { Sound } from "@babylonjs/core";
import { animateTo } from "./animations";
import { CustomAssetManger } from "./assetsManager";

const DIG_VOLUME = 0.2;

export class SoundMananger {
  dig: Sound;
  music: Sound;
  upgrade: Sound;

  constructor() {
    this.dig = CustomAssetManger.instance.dig;
    this.upgrade = CustomAssetManger.instance.upgrade;
    this.music = CustomAssetManger.instance.music;
    this.dig.stop();
    this.music.stop();
    this.upgrade.stop();
  }

  fadeTo = (sound: Sound, duration: number, frames: number[]) => {
    const gain = sound.getSoundGain();
    if (gain) {
      gain.gain.value = 0;
      return animateTo(gain.gain, "value", duration, frames);
    }
  };

  startDig = () => {
    this.dig.play(0, Math.random() * 4);
    this.fadeTo(this.dig, 1, [0, DIG_VOLUME]);
  };

  stopDig = async () => {
    const res = await this.fadeTo(this.dig, 1, [0, DIG_VOLUME]);
    if (res) {
      this.dig.stop();
    }
  };
  playUpgrade() {
    this.upgrade.play();
  }
}
