import getRandom from '../randomizer';

//  Instead of generating two random numbers, I decided to produce factors of those numbers.
//  By that we get numbers with GCD > 1 with much higher probability.
const rangeForFactors = [1, 11];

const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x, y) - Math.min(x, y), Math.min(x, y)));

export default () => ({
  description: 'Find the greatest common divisor of given numbers.',
  setQuestion: () => ({
    firstArgument: getRandom(...rangeForFactors) * getRandom(...rangeForFactors),
    secondArgument: getRandom(...rangeForFactors) * getRandom(...rangeForFactors),
  }),
  questionToString: ({ firstArgument, secondArgument }) => `${firstArgument} ${secondArgument}`,
  getRightAnswer: ({ firstArgument, secondArgument }) => gcd(firstArgument, secondArgument),
  normalizeAnswer: (answer) => Number(answer),
});
