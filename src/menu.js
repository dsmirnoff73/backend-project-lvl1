import readlineSync from 'readline-sync';
import { game as evenGame } from './games/even';
import { game as calcGame } from './games/calculator';
import { game as gcdGame } from './games/gcd';
import { game as progressGame } from './games/progression';
import { game as primeGame } from './games/prime';
import play from '.';

const games = {
  'Even/Odd?': evenGame,
  Calculator: calcGame,
  'Find Greatest Common Divisor': gcdGame,
  'Fix Progression': progressGame,
  'Prime or Not?': primeGame,
};
const menu = Object.keys(games);

export default () => {
  console.log('\n\nWelcome to the Brain Games!');
  const playerName = readlineSync.question('\nMay I have your name? : ');
  let selector = readlineSync.keyInSelect(menu, `Which game you are playing next, ${playerName}?`);
  while (selector >= 0) {
    play(games[menu[selector]], playerName);
    selector = readlineSync.keyInSelect(menu, `Which game you are playing next, ${playerName}?`);
  }
  console.log("\nThat's all for today, folks!\n");
};
