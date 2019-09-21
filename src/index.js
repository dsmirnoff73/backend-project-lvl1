import readlineSync from 'readline-sync';

const maxNumberOfRounds = 3;

const letsPlay = (description, _setRiddle, _name) => {
  const playOneMoreTime = (name, setRiddle, numberOfTries) => {
    if (!numberOfTries) return `\nCongratulations, ${name}!\n`;
    const { question, rightAnswer } = setRiddle();
    const answer = readlineSync.question(`\nQuestion: ${question}\nYour answer?: `);
    if (rightAnswer !== answer) {
      return `\n'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.
      \nLet's try again, ${name}!\n`;
    }
    console.log('Correct!');
    return playOneMoreTime(name, setRiddle, numberOfTries - 1);
  };

  const playerName = _name
    || readlineSync.question('\nWelcome to the Brain Games!\n\nMay I have your name? : ');
  console.log(`\nHello, ${playerName}!\n ${description}`);
  const resultMessage = playOneMoreTime(playerName, _setRiddle, maxNumberOfRounds);
  console.log(resultMessage);
};

export default letsPlay;
