import readlineSync from 'readline-sync';
import evenGame from './games/evenGame';
import calcGame from './games/calcGame';
import gcdGame from './games/gcdGame';
import progressGame from './games/progressGame';
import primeGame from './games/primeGame';

const games = {
  'Even/Odd?': evenGame,
  Calculator: calcGame,
  'Find Greatest Common Divisor': gcdGame,
  'Fix Progression': progressGame,
  'Prime or Not?': primeGame,
};

const playWithStyle = (name) => {
  const menu = Object.keys(games);
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
