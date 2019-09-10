import {getRandom} from '..';

export default () => ({
    rules: `What number is missing in the progression?`,
    setQuestion: () => {
        const incProgress = getRandom(2, 20);
        const a0 = getRandom(-100, 100);
        const length = getRandom(7, 15);
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