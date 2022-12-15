#!/usr/bin/env node
import generateRound from '../src/games/calc.js';
import engine from '../src/index.js';

const rules = 'What is the result of the expression?';
engine(rules, generateRound);
