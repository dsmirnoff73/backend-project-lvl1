import getRandom from '../randomizer';
import play from '..';

const description = 'What is the result of the expression?';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const range = [0, 100];
const signs = Object.keys(operations);

const makeRiddle = () => {
  const a = getRandom(...range);
  const b = getRandom(...range);
  const operation = signs[getRandom(0, signs.length - 1)];
  const question = `${a} ${operation} ${b}`;
  const rightAnswer = String(operations[operation](a, b));
  return { question, rightAnswer };
};

export const game = { description, makeRiddle };

export default () => play(game);
