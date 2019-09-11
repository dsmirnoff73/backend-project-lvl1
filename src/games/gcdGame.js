import { getRandom, gcd } from '../AllTheMath';

//  Instead of generating two random numbers, I decided to produce factors of those numbers. 
//  By that we get numbers with GCD > 1 with much higher probability.
const rangeForFactorGeneration = [1, 11];

export default () => ({
    rules: `Find the greatest common divisor of given numbers.`,
    setQuestion: () => ({
        frstArg: getRandom(...rangeForFactorGeneration) * getRandom(...rangeForFactorGeneration),
        scndArg: getRandom(...rangeForFactorGeneration) * getRandom(...rangeForFactorGeneration),
    }),
    questionToString: ({ frstArg, scndArg }) => `${frstArg} ${scndArg}`,
    getRightAnswer: ({ frstArg, scndArg }) => gcd(frstArg, scndArg),
    normalizeAnswer: (answer) => Number(answer),
});