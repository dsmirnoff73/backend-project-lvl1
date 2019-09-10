import readlineSync from 'readline-sync';

// export const getName = () => readlineSync.question('May I have your name? :');
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const introduction = (rulesMssg = '') => {
    console.log('\nWelcome to the Brain Games!\n', rulesMssg);
    const name = readlineSync.question('\nMay I have your name? : ');
    console.log(`Hello, ${name}!`);
    return name;
};

const tryGuess = (name, numberOfTries) => {
    if (!numberOfTries) return `\nCongratulations, ${name}!`;

    const randomRange = [0, 100];
    const guessNumber = getRandom(...randomRange);
    const isEven = (guessNumber % 2 === 0) ? 'yes' : 'no';
    const answer = (readlineSync.question(`\nQuestion: ${guessNumber}\nYour answer?: `) === 'yes') ? 'yes' : 'no';

    if (isEven !== answer) {
        return `\n'${answer}' is a wrong answer ;(. Correct answer was '${isEven}'\nLet's try again sometime, ${name}!`;
    };
    console.log('Correct!');
    return tryGuess(name, numberOfTries - 1);
};

const guessGameRules = `Answer 'yes' if the number is even, otherwise answer 'no'.`;

export const guessGame = () => { console.log(tryGuess(introduction(guessGameRules), 3)) };