'use strict';

import fs from 'fs';
import moveQuery from './moveQuery';
import charQuery from './charQuery';

module.exports = (command) => {
  const splitCommands = command.split(' ');
  splitCommands.shift();
  const queryMove = moveQuery(splitCommands);
  const char = charQuery(splitCommands);
  const moves = fs.readFileSync(`${__dirname}/../../json/${char}.json`);
  moves.find((move) => {
    return move.Command === queryMove;
  });
};
