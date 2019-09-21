import getRandom from '../randomizer';
import letsPlay from '..';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const rangeForArgument = [0, 100];

const game = (name) => {
  const description = 'What is the result of the expression?';
  const operands = Object.keys(operations);
  const setRiddle = () => {
    const firstArgument = getRandom(...rangeForArgument);
    const secondArgument = getRandom(...rangeForArgument);
    const operand = operands[getRandom(0, operands.length - 1)];
    const question = `${firstArgument} ${operand} ${secondArgument}`;
    const rightAnswer = String(operations[operand](firstArgument, secondArgument));
    return { question, rightAnswer };
  };
  letsPlay(description, setRiddle, name);
};

export default game;
