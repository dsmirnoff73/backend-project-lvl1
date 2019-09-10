import {getRandom} from '..';

const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y
};

export default () => ({
        rules: `What is the result of the expression?`,
        setQuestion: () => ({
            frstArg: getRandom(0, 100),
            scndArg: getRandom(0, 100),
            operation: Object.keys(operations)[getRandom(0,3)],
        }),
        questionToString: ({ frstArg, scndArg, operation }) => `${frstArg} ${operation} ${scndArg}`,
        getRightAnswer: ({ frstArg, scndArg, operation }) => operations[operation](frstArg, scndArg),
        normalizeAnswer: (answer) => Number(answer),
    }
);