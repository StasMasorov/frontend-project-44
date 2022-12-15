#!/usr/bin/env node
import generateRound from '../src/games/prime.js';
import engine from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(rules, generateRound);
