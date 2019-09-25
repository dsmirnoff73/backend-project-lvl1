import getRandom from '../randomizer';
import playGame from '..';

const description = 'What number is missing in the progression?';
const rangeForIncrement = [2, 20];
const rangeForFirstTerm = [-100, 100];
const rangeForProgressionLength = [7, 15];


const setRiddle = () => {
  const increment = getRandom(...rangeForIncrement);
  const firstTerm = getRandom(...rangeForFirstTerm);
  const length = getRandom(...rangeForProgressionLength);
  const secretElementIndex = getRandom(0, length);
  const progression = [...new Array(length)].map((value, i) => firstTerm + increment * i);
  const question = progression
    .reduce((acc, value, i) => `${acc} ${(i === secretElementIndex) ? '..' : value}`, '').trim();
  const rightAnswer = String(progression[secretElementIndex]);
  return { question, rightAnswer };
};

const game = (nameOfPalyer) => playGame(description, setRiddle, nameOfPalyer);

export default game;
