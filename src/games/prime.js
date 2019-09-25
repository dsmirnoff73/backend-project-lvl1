import getRandom from '../randomizer';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rangeForArgument = [2, 100];

const isPrime = (num) => {
  for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1) {
    if (num % divider === 0) return false;
  }
  return num > 1;
};

const setRiddle = () => {
  const question = getRandom(...rangeForArgument);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const game = (nameOfPlayer) => playGame(description, setRiddle, nameOfPlayer);

export default game;
