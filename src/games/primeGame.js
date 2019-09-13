import getRandom from '../randomizer';

const rangeForArgument = [2, 100];

const isPrime = (num) => {
  for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1) {
    if (num % divider === 0) return false;
  }
  return num > 1;
};

export default () => ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  setQuestion: () => {
    const argument = getRandom(...rangeForArgument);
    return {
      question: argument,
      rightAnswer: isPrime(argument) ? 'yes' : 'no',
    };
  },
  normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
