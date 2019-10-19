import getRandom from '../randomizer';
import play from '..';

const description = 'What number is missing in the progression?';
const rangeForCommonDifference = [2, 20];
const rangeForFirstTerm = [-100, 100];
const rangeForProgressionLength = [7, 15];

const makeRiddle = () => {
  const commonDifference = getRandom(...rangeForCommonDifference);
  const firstTerm = getRandom(...rangeForFirstTerm);
  const length = getRandom(...rangeForProgressionLength);
  const secretElementIndex = getRandom(0, length - 1);
  const progression = [...new Array(length)].map((value, i) => firstTerm + commonDifference * i);
  const question = progression
    .reduce((acc, value, i) => `${acc} ${(i === secretElementIndex) ? '..' : value}`, '').trim();
  const rightAnswer = String(progression[secretElementIndex]);
  return { question, rightAnswer };
};

export const game = { description, makeRiddle };

export default () => play(game);
