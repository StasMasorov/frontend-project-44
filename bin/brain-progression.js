#!/usr/bin/env node
import proggame from '../src/games/progression.js';
import { welcome } from '../src/cli.js';

const name = welcome();
proggame(name);
