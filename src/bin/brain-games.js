#!/usr/bin/env node
import evenGame from '../games/evenGame';
import calcGame from '../games/calcGame';
import gcdGame from '../games/gcdGame';
import progressGame from '../games/progressGame';
import primeGame from '../games/primeGame';
import playWithStyle from '../menu';

const games = {
  'Even/Odd?': evenGame,
  Calculator: calcGame,
  'Find Greatest Common Divisor': gcdGame,
  'Fix Progression': progressGame,
  'Prime or Not?': primeGame,
};

playWithStyle(games);
