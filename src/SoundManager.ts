import { Sound } from "@babylonjs/core";
import { animateTo } from "./animations";

// const DIG_VOLUME = 0.1;
// const MUSIC_VOLUME = 0.3;
const DIG_VOLUME = 0;
const MUSIC_VOLUME = 0;

export class SoundMananger {
  dig: Sound;
  music: Sound;

  constructor() {
    this.dig = new Sound("dig", "./sounds/dig.mp3", undefined, () => {}, { loop: true, volume: DIG_VOLUME });
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
  startDig = () => {
    this.dig.play(0, Math.random() * 4);
    const gain = this.dig.getSoundGain();
    if (gain) {
      gain.gain.value = 0;
      animateTo(gain.gain, "value", 1, [0, DIG_VOLUME]);
    }
  };
  stopDig = () => {
    const gain = this.dig.getSoundGain();

    if (gain) {
      animateTo(gain.gain, "value", 1, [DIG_VOLUME, 0]).then(() => {
        this.dig.stop();
      });
    }
  };
}
