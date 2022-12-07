#!/usr/bin/env node
import gcdgame from '../src/games/gcd.js';
import { welcome } from '../src/cli.js';

const name = welcome();
gcdgame(name);
