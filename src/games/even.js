import getRandom from '../randomizer';
import playGame from '..';

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const rangeForArgument = [0, 100];

const isEven = (n) => n % 2 === 0;

const setRiddle = () => {
  const question = getRandom(...rangeForArgument);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const game = (nameOfPlayer) => playGame(description, setRiddle, nameOfPlayer);

export default game;
