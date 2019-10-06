import getRandom from '../randomizer';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const range = [2, 100];

const isPrime = (num) => {
  for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1) {
    if (num % divider === 0) return false;
  }
  return num > 1;
};

const makeRiddle = () => {
  const question = getRandom(...range);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export const game = { description, makeRiddle };

export default () => play(game);
