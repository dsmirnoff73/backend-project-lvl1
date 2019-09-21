import getRandom from '../randomizer';
import letsPlay from '..';

const rangeForArgument = [2, 100];

const isPrime = (num) => {
  for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1) {
    if (num % divider === 0) return false;
  }
  return num > 1;
};

const game = (name) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const setRiddle = () => {
    const question = getRandom(...rangeForArgument);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  letsPlay(description, setRiddle, name);
};

export default game;
