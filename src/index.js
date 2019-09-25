import readlineSync from 'readline-sync';

const maxNumberOfRounds = 3;

const playGame = (description, _setRiddle, name) => {
  const playOneRound = (setRiddle, roundsCount) => {
    if (!roundsCount) return console.log(`\nCongratulations, ${name}!\n`);
    const { question, rightAnswer } = setRiddle();
    const answer = readlineSync.question(`\nQuestion: ${question}\nYour answer?: `);
    if (rightAnswer !== answer) {
      return console.log(`\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
      \nLet's try again, ${name}!\n`);
    }
    console.log('Correct!');
    return playOneRound(setRiddle, roundsCount - 1);
  };

  const playerName = name
    || readlineSync.question('\nWelcome to the Brain Games!\n\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);
  playOneRound(_setRiddle, maxNumberOfRounds);
};

export default playGame;
