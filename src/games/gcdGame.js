import getRandom from '../randomizer';
import letsPlay from '..';

//  Instead of generating two random numbers, I decided to produce factors of those numbers.
//  By that we get numbers with GCD > 1 with much higher probability.
const rangeForFactors = [1, 11];

const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x, y) - Math.min(x, y), Math.min(x, y)));

const game = (name) => {
  const description = 'Find the greatest common divisor of given numbers.';
  const setRiddle = () => {
    const firstArgument = getRandom(...rangeForFactors) * getRandom(...rangeForFactors);
    const secondArgument = getRandom(...rangeForFactors) * getRandom(...rangeForFactors);
    const question = `${firstArgument} ${secondArgument}`;
    const rightAnswer = String(gcd(firstArgument, secondArgument));
    return { question, rightAnswer };
  };
  letsPlay(description, setRiddle, name);
};

export default game;
