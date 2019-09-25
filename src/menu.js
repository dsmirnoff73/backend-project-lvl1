import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calculator';
import gcdGame from './games/gcd';
import progressGame from './games/progression';
import primeGame from './games/prime';

const games = {
  'Even/Odd?': evenGame,
  Calculator: calcGame,
  'Find Greatest Common Divisor': gcdGame,
  'Fix Progression': progressGame,
  'Prime or Not?': primeGame,
};
const menu = Object.keys(games);

const playWithStyle = (name) => {
  console.log('\n\nWelcome to the Brain Games!');
  const playerName = name || readlineSync.question('\nMay I have your name? : ');
  const selector = readlineSync.keyInSelect(menu, `Which game you are playing next, ${playerName}?`);
  if (selector > -1) {
    games[menu[selector]](playerName);
    return playWithStyle(playerName);
  }
  return console.log("\nThat's all for today, folks!\n");
};

export default playWithStyle;
