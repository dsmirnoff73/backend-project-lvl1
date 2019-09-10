import {getRandom} from '..';

export default () => ({
    rules: `Answer 'yes' if the number is even, otherwise answer 'no'.`,
    setQuestion: () => getRandom(0, 100),
    questionToString: (question) => String(question),
    getRightAnswer: (num) => ((num % 2 === 0) ? 'yes' : 'no'),
    normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
