import { Sound } from "@babylonjs/core";
import { animateTo } from "./animations";

const DIG_VOLUME = 0.1;
const MUSIC_VOLUME = 0.3;
// const DIG_VOLUME = 0;
// const MUSIC_VOLUME = 0;

export class SoundMananger {
  dig: Sound;
  music: Sound;
  upgrade: Sound;

  constructor() {
    this.dig = new Sound("dig", "./sounds/dig.mp3", undefined, () => {}, { loop: true, volume: DIG_VOLUME });
    this.upgrade = new Sound("dig", "./sounds/upgrade.mp3", undefined, () => {}, {});
    this.music = new Sound(
      "music",
      "./sounds/music.mp3",
      undefined,
      () => {
        this.music.play();
      },
      { loop: true, volume: MUSIC_VOLUME }
    );
    this.dig.loop = true;
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
