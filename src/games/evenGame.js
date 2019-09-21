import getRandom from '../randomizer';
import letsPlay from '..';

const rangeForArgument = [0, 100];
const isEven = (n) => n % 2 === 0;

const game = (name) => {
  const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
  const setRiddle = () => {
    const question = getRandom(...rangeForArgument);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  letsPlay(description, setRiddle, name);
};

export default game;
