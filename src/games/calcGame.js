import getRandom from '../randomizer';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const rangeForArgument = [0, 100];

export default () => ({
  description: 'What is the result of the expression?',
  setQuestion: () => {
    const operands = Object.keys(operations);
    const firstArgument = getRandom(...rangeForArgument);
    const secondArgument = getRandom(...rangeForArgument);
    const operand = operands[getRandom(0, operands.length)];
    return {
      question: `${firstArgument} ${operand} ${secondArgument}`,
      rightAnswer: operations[operand](firstArgument, secondArgument),
    };
  },
  normalizeAnswer: (answer) => Number(answer),
}
);
