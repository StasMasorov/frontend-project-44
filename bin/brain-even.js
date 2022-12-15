#!/usr/bin/env node
import generateRound from '../src/games/evenchek.js';
import engine from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
engine(rules, generateRound);
