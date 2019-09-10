import {getRandom} from '..';

const gcd = (x, y) => ((x === y) ? x : gcd(Math.max(x,y) - Math.min(x,y), Math.min(x,y)));

export default () => ({
    rules: `Find the greatest common divisor of given numbers.`,
    setQuestion: () => ({
        frstArg: getRandom(1, 11) * getRandom(1, 11),
        scndArg: getRandom(1, 11) * getRandom(1, 11),
    }),
    questionToString: ({ frstArg, scndArg }) => `${frstArg} ${scndArg}`,
    getRightAnswer: ({ frstArg, scndArg }) => gcd(frstArg, scndArg),
    normalizeAnswer: (answer) => Number(answer),
}
);