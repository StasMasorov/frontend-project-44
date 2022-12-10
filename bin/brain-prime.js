#!/usr/bin/env node
import primegame from '../src/games/prime.js';
import engine from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(rules, primegame);
