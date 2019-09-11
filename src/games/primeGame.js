import { getRandom, isPrime } from '../AllTheMath';

const rangeForArgumentGeneration = [0, 100];

export default () => ({
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  setQuestion: () => getRandom(...rangeForArgumentGeneration),
  questionToString: (question) => String(question),
  getRightAnswer: (num) => isPrime(num) ? 'yes' : 'no',
  normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
