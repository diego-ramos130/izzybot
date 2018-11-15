'use strict';

const fs = require('fs');

const charQuery = require('./tekken/charQuery');
const moveQuery = require('./tekken/moveQuery');
const tekkenParser = require('./tekken/tekkenParser');

module.exports = (command) => {
  const splitCommands = command.trim().split(' ');
  splitCommands.shift();
  const queryMove = moveQuery(splitCommands);
  const char = charQuery(splitCommands);

  const moves = JSON.parse(fs.readFileSync(`${__dirname}/../../json/${char}.json`));
  let foundMove;
  if (queryMove.length === 1) {
    foundMove = moves.find((move) => {
      return move.Command === queryMove;
    });
  } else {
    foundMove = moves.find((move) => {
      return move.Command.includes(queryMove);
    });
  }
  if (foundMove === undefined) {
    return 'Not found!';
  }
  const split = char.split('_');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }
  const title = split.join(' ');

  const embed = tekkenParser(foundMove);
  embed.setTitle(title);
  return embed;
};
