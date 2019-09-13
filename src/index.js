import readlineSync from 'readline-sync';


const playOneTime = (name, { setRiddle, normalizeAnswer }, numberOfTries) => {
  if (!numberOfTries) return `\nCongratulations, ${name}!\n`;

  const { question, rightAnswer } = setRiddle();
  const answer = normalizeAnswer(readlineSync
    .question(`\nQuestion: ${question}\nYour answer?: `));

  if (rightAnswer !== answer) {
    return `\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
        \nLet's try again, ${name}!\n`;
  }
  console.log('Correct!');
  return playOneTime(name, { setRiddle, normalizeAnswer }, numberOfTries - 1);
};

export default ({ description, setRiddle, normalizeAnswer }, name, maxNumberOfRounds = 3) => {
  const playerName = name
    || readlineSync.question('\nWelcome to the Brain Games!\n\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);
  console.log(playOneTime(playerName, { setRiddle, normalizeAnswer }, maxNumberOfRounds));
};
