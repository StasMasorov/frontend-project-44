#!/usr/bin/env node
import calcgame from '../src/games/calc.js';
import welcome from '../src/cli.js';

const name = welcome();
calcgame(name);
