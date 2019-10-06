import getRandom from '../randomizer';
import play from '..';

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const range = [0, 100];

const isEven = (n) => n % 2 === 0;

const makeRiddle = () => {
  const question = getRandom(...range);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export const game = { description, makeRiddle };

export default () => play(game);
