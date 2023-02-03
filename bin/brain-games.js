#!/usr/bin/env node

import nameUser from '../src/cli.js';

console.log('brain-games');
const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  nameUser();
};

greetingUser();
