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

  // const foundMove = moves.find((move) => {
  //   return move.Command === queryMove;
  // });
  // if (foundMove === undefined) {
  const foundMove = moves.find((move) => {
    return move.Command.includes(queryMove);
  });
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
  embed.setDescription(queryMove);
  return embed;

  // return tekkenParser(foundMove);
};
