#!/usr/bin/env node
import generateRound from '../src/games/gcd.js';
import engine from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
engine(rules, generateRound);
