#!/usr/bin/env node
import primegame from '../src/games/prime.js';
import { welcome } from '../src/cli.js';

const name = welcome();
primegame(name);
