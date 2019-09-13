import getRandom from '../randomizer';

const rangeForIcrement = [2, 20];
const rangeForFirstTerm = [-100, 100];
const rangeForProgressionLength = [7, 15];

export default () => ({
  description: 'What number is missing in the progression?',
  setQuestion: () => {
    const increment = getRandom(...rangeForIcrement);
    const firstTerm = getRandom(...rangeForFirstTerm);
    const length = getRandom(...rangeForProgressionLength);
    const secretIndex = getRandom(0, length);
    const progression = [...new Array(length)].map((value, i) => firstTerm + increment * i);
    return {
      question: progression.reduce(
        (acc, value, i) => `${acc} ${(i === secretIndex) ? '..' : value}`, '',
      ),
      rightAnswer: progression[secretIndex],
    };
  },
  normalizeAnswer: (answer) => Number(answer),
}
);
