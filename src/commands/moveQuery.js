'use strict';

module.exports = (commandArray) => {
  return commandArray[commandArray.length - 1].split(',').join(', ');
};
