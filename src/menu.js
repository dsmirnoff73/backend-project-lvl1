import readlineSync from 'readline-sync';
import letsPlay from '.';

const playWithStyle = (_games, name) => {
  const menu = Object.keys(_games);
  console.log('\n\nWelcome to the Brain Games!');
  const playerName = name || readlineSync.question('\nMay I have your name? : ');
  const selector = readlineSync.keyInSelect(menu, `Which game you are playing next, ${playerName}?`);
  if (selector > -1) {
    letsPlay(_games[menu[selector]](), playerName);
    return playWithStyle(_games, playerName);
  }
  return console.log("\nThat's all for today, folks!\n");
};

export default playWithStyle;
