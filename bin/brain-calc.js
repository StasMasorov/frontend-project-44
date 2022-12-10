#!/usr/bin/env node
import calcgame from '../src/games/calc.js';
import engine from '../src/index.js';

const rules = 'What is the result of the expression?';
engine(rules, calcgame);
