import { DEGREE } from "./consts";

export const getRandomRange = (min: number, max: number) => {
  const diff = max - min;
  return Math.random() * diff + min;
};

export const getRandomRangeDegree = (min: number, max: number) => {
  const diff = max - min;
  return (Math.random() * diff + min) * DEGREE;
};
