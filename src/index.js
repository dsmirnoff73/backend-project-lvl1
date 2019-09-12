import readlineSync from 'readline-sync';


const playOneTime = (name, game, numberOfTries) => {
  if (!numberOfTries) return `\nCongratulations, ${name}!\n`;

  const {
    setQuestion, questionToString, getRightAnswer, normalizeAnswer,
  } = game;
  const question = setQuestion();
  const rightAnswer = getRightAnswer(question);
  const answer = normalizeAnswer(readlineSync
    .question(`\nQuestion: ${questionToString(question)}\nYour answer?: `));

  if (rightAnswer !== answer) {
    return `\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
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
