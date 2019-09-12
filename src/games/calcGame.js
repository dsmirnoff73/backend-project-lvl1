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
    return {
      firstArgument: getRandom(...rangeForArgument),
      secondArgument: getRandom(...rangeForArgument),
      operand: operands[getRandom(0, operands.length)],
    };
  },
  questionToString:
    ({ firstArgument, secondArgument, operand }) => `${firstArgument} ${operand} ${secondArgument}`,
  getRightAnswer:
    ({ firstArgument, secondArgument, operand }) => operations[operand](firstArgument, secondArgument),
  normalizeAnswer: (answer) => Number(answer),
}
);
