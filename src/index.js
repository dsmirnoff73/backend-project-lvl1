import readlineSync from 'readline-sync';

const roundsCount = 3;

export default ({ description, makeRiddle }, name) => {
  if (!name) console.log('\nWelcome to the Brain Games!\n');
  const playerName = name || readlineSync.question('\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);

  const playRound = (counter) => {
    if (!counter) {
      console.log(`\nCongratulations, ${playerName}!\n`);
      return;
    }
    const { question, rightAnswer } = makeRiddle();
    const answer = readlineSync.question(`\nQuestion: ${question}\nYour answer?: `);
    if (rightAnswer !== answer) {
      console.log(`\n'${answer}' is a wrong answer ;(. 
        Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!\n`);
      return;
    }
    console.log('Correct!');
    playRound(counter - 1);
  };

  playRound(roundsCount);
};
