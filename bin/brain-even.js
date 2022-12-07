#!/usr/bin/env node
import evengame from '../src/games/evenchek.js';
import welcome from '../src/cli.js';

const name = welcome();
evengame(name);
