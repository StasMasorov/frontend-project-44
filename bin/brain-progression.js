#!/usr/bin/env node
import proggame from '../src/games/progression.js';
import engine from '../src/index.js';

const rules = 'What number is missing in the progression?';
engine(rules, proggame);
