import getRandom from '../randomizer';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const rangeForFactors = [1, 11];

const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x, y) - Math.min(x, y), Math.min(x, y)));

const generateNumber = () => getRandom(...rangeForFactors) * getRandom(...rangeForFactors);

const setRiddle = () => {
  const a = generateNumber();
  const b = generateNumber();
  const question = `${a} ${b}`;
  const rightAnswer = String(gcd(a, b));
  return { question, rightAnswer };
};

const game = (nameOfPlayer) => playGame(description, setRiddle, nameOfPlayer);

export default game;
