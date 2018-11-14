'use strict';

const fs = require('fs');

const charQuery = require('./charQuery');
const moveQuery = require('./moveQuery');

module.exports = (command) => {
  const splitCommands = command.split(' ');
  splitCommands.shift();
  const queryMove = moveQuery(splitCommands);
  const char = charQuery(splitCommands);
  const moves = JSON.parse(fs.readFileSync(`${__dirname}/../../json/${char}.json`));
  const foundMove = moves.find((move) => {
    return move.Command === queryMove;
  });
  if (foundMove === undefined) {
    const foundMoveTwo = moves.find((move) => {
      return move.Command.includes(queryMove);
    });
    if (foundMoveTwo === undefined) {
      return 'Not found!';
    }
    return JSON.stringify(foundMoveTwo);
  }
  return JSON.stringify(foundMove);
};
