import {getRandom} from '..';

const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y
};

const rangeForArgumenGeneration = [0, 100];

export default () => ({
        rules: `What is the result of the expression?`,
        setQuestion: () => {
            const operands = Object.keys(operations);
            return {
                frstArg: getRandom(...rangeForArgumenGeneration),
                scndArg: getRandom(...rangeForArgumenGeneration),
                operation: operands[getRandom(0, operands.length)],
            };
        },
        questionToString: ({ frstArg, scndArg, operation }) => `${frstArg} ${operation} ${scndArg}`,
        getRightAnswer: ({ frstArg, scndArg, operation }) => operations[operation](frstArg, scndArg),
        normalizeAnswer: (answer) => Number(answer),
    }
);