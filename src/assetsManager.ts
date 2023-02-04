import { Sound, Texture } from "@babylonjs/core";
const MUSIC_VOLUME = 0.3;
const DIG_VOLUME = 0.2;

export class CustomAssetManger {
  static instance: CustomAssetManger;
  dig: Sound;
  upgrade: Sound;
  music: Sound;
  hand: Texture;
  gradient: Texture;
  particle: Texture;
  ground: {
    diff: Texture;
    amb: Texture;
    norm: Texture;
    particle: Texture;
  };
  rock: { ao: Texture; bump: Texture; diff: Texture };

  constructor(onReady: VoidFunction) {
    CustomAssetManger.instance = this;
    this.dig = new Sound("dig", "./sounds/dig.mp3", undefined, () => {}, { volume: DIG_VOLUME });
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

    this.ground = {
      diff: new Texture("./textures/forest_ground_04_diff_1k.jpg"),
      amb: new Texture("./textures/forest_ground_04_ao_1k.jpeg"),
      norm: new Texture("./textures/forest_ground_04_nor_gl_1k.jpeg"),
      particle: new Texture("./textures/Flare.png"),
    };
    this.rock = {
      ao: new Texture("./textures/rock_04_ao_1k.jpg"),
      bump: new Texture("./textures/rock_04_bump_1k.jpg"),
      diff: new Texture("./textures/rock_04_diff_1k.jpg"),
    };
    this.hand = new Texture("./textures/hand.png");
    this.gradient = new Texture("./textures/gradient.png");
    this.particle = new Texture("./textures/Flare.png");
    Texture.WhenAllReady(
      [
        this.ground.diff,
        this.ground.amb,
        this.ground.norm,
        this.ground.particle,
        this.rock.ao,
        this.rock.bump,
        this.rock.diff,
        this.hand,
        this.gradient,
        this.particle,
      ],
      onReady
    );
  }
}
