import {getRandom} from '..';

const isPrime = (num) => {
    for (let divider = 2, controlValue = Math.sqrt(num); divider <= controlValue; divider += 1)
        if (num % divider === 0) return 'no';
    return num > 1 ? 'yes' : 'no';
};

export default () => ({
    rules: `Answer "yes" if given number is prime. Otherwise answer "no".`,
    setQuestion: () => getRandom(0, 100),
    questionToString: (question) => String(question),
    getRightAnswer: (num) => isPrime(num),
    normalizeAnswer: (answer) => ((answer === 'yes') ? 'yes' : 'no'),
});
