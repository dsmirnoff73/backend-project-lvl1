import readlineSync from 'readline-sync';


const playOneTime = (name, game, numberOfTries) => {
  if (!numberOfTries) return `\nCongratulations, ${name}!\n`;

  const { setQuestion, normalizeAnswer } = game;
  const riddle = setQuestion();
  const answer = normalizeAnswer(readlineSync
    .question(`\nQuestion: ${riddle.question}\nYour answer?: `));

  if (riddle.rightAnswer !== answer) {
    return `\n'${answer}' is a wrong answer ;(. Correct answer was '${riddle.rightAnswer}'.
        \nLet's try again, ${name}!\n`;
  }
  console.log('Correct!');
  return playOneTime(name, game, numberOfTries - 1);
};

export default (game, name, maxNumberOfRounds = 3) => {
  const { description } = game;
  const playerName = name
    || readlineSync.question('\nWelcome to the Brain Games!\n\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);
  console.log(playOneTime(playerName, game, maxNumberOfRounds));
};
