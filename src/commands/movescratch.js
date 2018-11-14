'use strict';

const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../../json/master_raven.json`));

const queriedMove = data.find((move) => {
  return move.Command === '1';
});

console.log(queriedMove); /* { 'Start up frame': '10',
* 'Hit frame': '+8',
* 'Counter hit frame': '+8',
* Command: '1',Block frame': '+1',
* 'Hit level': 'h',
* Damage: '7',
* Notes: '-' }
*/

/** this is the most basic way to query for a move, so we need to do this dynamically.
 * things the user has to ask:
 * character, move
 * things we need to return:
 * everything in the json file like above
 * edge cases:
 * move has more than one correct input
 * */
