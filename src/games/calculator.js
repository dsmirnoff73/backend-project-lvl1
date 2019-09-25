import getRandom from '../randomizer';
import playGame from '..';

const description = 'What is the result of the expression?';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const rangeForArguments = [0, 100];
const operationSigns = Object.keys(operations);

const setRiddle = () => {
  const a = getRandom(...rangeForArguments);
  const b = getRandom(...rangeForArguments);
  const operation = operationSigns[getRandom(0, operationSigns.length - 1)];
  const question = `${a} ${operation} ${b}`;
  const rightAnswer = String(operations[operation](a, b));
  return { question, rightAnswer };
};

const game = (nameOfPlayer) => playGame(description, setRiddle, nameOfPlayer);

export default game;
