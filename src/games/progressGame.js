import getRandom from '../randomizer';
import letsPlay from '..';

const rangeForIcrement = [2, 20];
const rangeForFirstTerm = [-100, 100];
const rangeForProgressionLength = [7, 15];

const game = (name) => {
  const description = 'What number is missing in the progression?';
  const setRiddle = () => {
    const increment = getRandom(...rangeForIcrement);
    const firstTerm = getRandom(...rangeForFirstTerm);
    const length = getRandom(...rangeForProgressionLength);
    const secretIndex = getRandom(0, length);
    const progression = [...new Array(length)].map((value, i) => firstTerm + increment * i);
    const question = progression
      .reduce((acc, value, i) => `${acc} ${(i === secretIndex) ? '..' : value}`, '');
    const rightAnswer = String(progression[secretIndex]);
    return { question, rightAnswer };
  };
  letsPlay(description, setRiddle, name);
};

export default game;
