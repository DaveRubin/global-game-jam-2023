const INITIAL_ENERGY = 3000;
const MS_PER_LEVEL = 2000;
const INITIAL_ENERGY_PER_TICK = 2;

export class MainGame {
  maxTime = INITIAL_ENERGY;
  timeLeft = INITIAL_ENERGY;
  energyPerTick = INITIAL_ENERGY_PER_TICK;
  recoverFactor = 1;

  constructor() {}

  get energyRatio() {
    return this.timeLeft / this.maxTime;
  }

  updateEnergy = (timeInMS: number) => {
    this.timeLeft += timeInMS * this.recoverFactor;
    if (this.timeLeft > this.maxTime) {
      this.timeLeft = this.maxTime;
    }
  };

  useEnergy = (timeInMS: number) => {
    this.timeLeft -= timeInMS;
    if (this.timeLeft < 0) {
      this.timeLeft = 0;
    }
  };

  updateEnergyPerTick(level: number) {
    this.maxTime += level * MS_PER_LEVEL;
    this.recoverFactor += 0.5;
  }
}
