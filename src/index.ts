#!/usr/bin/env node

import * as yargs from 'yargs';
import * as pkg from '../package.json';
import * as itemsCommand from './items/command';

yargs
  .scriptName(pkg.name)
  .usage('$0 <cmd> [args]')
  .command(itemsCommand)
  .help()
  .argv;
