import readlineSync from 'readline-sync';

const roundsCount = 3;

export default ({ description, makeRiddle }, name) => {
  const playerName = name
    || readlineSync.question('\nWelcome to the Brain Games!\n\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);

  const playRound = (counter) => {
    if (!counter) return `\nCongratulations, ${playerName}!\n`;
    const { question, rightAnswer } = makeRiddle();
    const answer = readlineSync.question(`\nQuestion: ${question}\nYour answer?: `);
    if (rightAnswer !== answer) {
      return `\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
      \nLet's try again, ${name}!\n`;
    }
    console.log('Correct!');
    return playRound(counter - 1);
  };

  const gameResult = playRound(roundsCount);
  console.log(gameResult);
};
