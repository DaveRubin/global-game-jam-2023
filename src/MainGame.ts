import { MainGUI } from "./gui";

const INITIAL_ENERGY = 3000;
const MS_PER_LEVEL = 2000;
const INITIAL_ENERGY_PER_TICK = 2;

export class MainGame {
  maxTime = INITIAL_ENERGY;
  timeLeft = INITIAL_ENERGY;
  energyPerTick = INITIAL_ENERGY_PER_TICK;
  recoverFactor = 1;
  gui: MainGUI;

  constructor() {
    this.gui = new MainGUI();
    this.gui.progress = 1;
    this.gui.recoverText.text = "+1s / -1s";
    this.gui.totalTimeText.text = "3s";
  }

  changeTime = (delta: number) => {
    this.timeLeft = Math.min(Math.max(this.timeLeft + delta, 0), this.maxTime);
    this.gui.progress = this.timeLeft / this.maxTime;
  };

  updateEnergy = (timeInMS: number) => {
    this.changeTime(timeInMS * this.recoverFactor);
  };

  useEnergy = (timeInMS: number) => {
    this.changeTime(-timeInMS);
  };

  updateEnergyPerTick(level: number) {
    this.maxTime += level * MS_PER_LEVEL;
    this.recoverFactor += 0.5;
    this.gui.recoverText.text = `+${1 * this.recoverFactor}s / -1s`;
    this.gui.totalTimeText.text = `+${Math.floor(this.maxTime / 100) / 10}s`;
  }
}
