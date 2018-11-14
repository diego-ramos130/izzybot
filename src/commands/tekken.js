'use strict';

const fs = require('fs');

const charQuery = require('./charQuery');
const moveQuery = require('./moveQuery');
const tekkenParser = require('./tekkenParser');

module.exports = (command) => {
  const splitCommands = command.trim().split(' ');
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
    return tekkenParser(foundMoveTwo);
  }
  return tekkenParser(foundMove);
};
