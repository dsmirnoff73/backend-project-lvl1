#!/usr/bin/env node
import readlineSync from 'readline-sync';
import evenGame from '../games/evenGame';
import calcGame from '../games/calcGame';
import gcdGame from '../games/gcdGame';
import progressGame from '../games/progressGame';
import primeGame from '../games/primeGame'
import { letsPlay } from '..';

const games = {
      'Even/Odd?': evenGame,
      'Calculator': calcGame,
      'Find Greatest Common Divisor': gcdGame,
      'Fix Progression': progressGame,
      'Prime or Not?': primeGame,
  };

const playWithStyle = (_games) => {
    const menu = Object.keys(_games);
    const selector = readlineSync.keyInSelect(menu, 'Which game?');
    if (selector === -1) return `That's all for today, folks!`;
    console.log(letsPlay(_games[menu[selector]]()));
    return playWithStyle(_games);
} ; 

console.log(`\n`, playWithStyle(games));