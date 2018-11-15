'use strict';

module.exports = (commandArray) => {
  commandArray.pop();
  if (commandArray.length > 1) {
    return commandArray.join('_');
  }
  return commandArray.toString();
};
