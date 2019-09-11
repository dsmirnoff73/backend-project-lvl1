import readlineSync from 'readline-sync';


const introduction = (rulesMssg = '') => {
  console.log(`\nWelcome to the Brain Games!\n${rulesMssg}`);
  const name = readlineSync.question('\nMay I have your name? : ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playOneTime = (name, game, numberOfTries) => {
  if (!numberOfTries) return `\nCongratulations, ${name}!\n`;

  const {
    setQuestion, questionToString, getRightAnswer, normalizeAnswer,
  } = game;
  const question = setQuestion();
  const rightAnswer = getRightAnswer(question);
  const answer = normalizeAnswer(readlineSync.question(`\nQuestion: ${questionToString(question)}\nYour answer?: `));

  if (rightAnswer !== answer) {
    return `\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
        Let's try again, ${name}!\n`;
  }
  console.log('Correct!');
  return playOneTime(name, game, numberOfTries - 1);
};

export default (game, maxNumberOfRounds = 3) => {
  const { rules } = game;
  const playersName = introduction(rules);

  return playOneTime(playersName, game, maxNumberOfRounds);
};
