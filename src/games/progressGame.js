import {getRandom} from '..';

const rangeForIcrementGeneration = [2, 20];
const rangeForFirstTerm = [-100, 100];
const rangeForProgressionLength = [7, 15];

export default () => ({
    rules: `What number is missing in the progression?`,
    setQuestion: () => {
        const incProgress = getRandom(...rangeForIcrementGeneration);
        const a0 = getRandom(...rangeForFirstTerm);
        const length = getRandom(...rangeForProgressionLength);
        const secretIndex = getRandom(0, length);
        const progression = [...new Array(length)].map((value, i) => a0 + incProgress * i);
        return { progression, secretIndex };
    },
    questionToString: ({ progression, secretIndex }) => progression.reduce(
        (acc, value, i) => `${acc} ${(i === secretIndex) ? '..' : value}`, ''),
    getRightAnswer: ({ progression, secretIndex }) => progression[secretIndex],
    normalizeAnswer: (answer) => Number(answer),
}
);