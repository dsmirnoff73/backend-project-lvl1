import getRandom from '../randomizer';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';
const range = [1, 11];

const findGCD = (x, y) => ((x === y)
  ? x
  : findGCD(Math.max(x, y) - Math.min(x, y), Math.min(x, y))
);

const generateNumber = () => getRandom(...range) * getRandom(...range);

const makeRiddle = () => {
  const a = generateNumber();
  const b = generateNumber();
  const question = `${a} ${b}`;
  const rightAnswer = String(findGCD(a, b));
  return { question, rightAnswer };
};

export const game = { description, makeRiddle };

export default () => play(game);
