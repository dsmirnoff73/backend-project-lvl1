import getRandom from '../randomizer';

const rangeForArgument = [0, 100];
const isEven = (n) => n % 2 === 0;

export default () => ({
  description: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  setQuestion: () => {
    const argument = getRandom(...rangeForArgument);
    return {
      question: argument,
      rightAnswer: isEven(argument) ? 'yes' : 'no',
    };
  },
  normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
