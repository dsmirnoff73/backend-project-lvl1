import getRandom from '../randomizer';

//  Instead of generating two random numbers, I decided to produce factors of those numbers.
//  By that we get numbers with GCD > 1 with much higher probability.
const rangeForFactors = [1, 11];

const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x, y) - Math.min(x, y), Math.min(x, y)));

export default () => ({
  description: 'Find the greatest common divisor of given numbers.',
  setQuestion: () => {
    const firstArgument = getRandom(...rangeForFactors) * getRandom(...rangeForFactors);
    const secondArgument = getRandom(...rangeForFactors) * getRandom(...rangeForFactors);
    return {
      question: `${firstArgument} ${secondArgument}`,
      rightAnswer: gcd(firstArgument, secondArgument)
    };
  },
  normalizeAnswer: (answer) => Number(answer),
});
