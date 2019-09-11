import {getRandom} from '..';

const rangeForArgumenGeneration = [0, 100];

export default () => ({
    rules: `Answer 'yes' if the number is even, otherwise answer 'no'.`,
    setQuestion: () => getRandom(...rangeForArgumenGeneration),
    questionToString: (question) => String(question),
    getRightAnswer: (num) => ((num % 2 === 0) ? 'yes' : 'no'),
    normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
