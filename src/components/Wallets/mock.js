import shuffleArray from 'shuffle-array';
import { TRENDS } from '../Wallet/Plot';

const generateArray = (max, last) =>
  shuffleArray([...Array(max).keys()])
    .slice(0, last)
    .sort((a, b) => a - b);

export const generatePoints = trend => {
  const points = [
    {
      x: 0,
      y: 0
    }
  ];
  const maxX = 29;
  const maxY = 9;

  const pointsNumber = 5;
  const xPoints = generateArray(maxX, pointsNumber);
  const yPoints = generateArray(maxY, pointsNumber);

  for (let i = 0; i < pointsNumber; i++) {
    points.push({
      x: xPoints[i],
      y: yPoints[i]
    });
  }

  if (trend === TRENDS.UP) {
    points.push({
      x: maxX,
      y: 0
    });
  } else {
    points.push({
      x: maxX,
      y: maxY
    });
  }

  return points;
};
