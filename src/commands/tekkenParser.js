// where we left off: find a way to make discord message pretty.

const Discord = require('discord.js');

/* {
"Start up frame":"13~14b",
"Hit frame":"+5~+6",
"Counter hit frame":"+5~+6",
"Command":"d/b+2",
"Block frame":"-4~-3",
"Hit level":"m",
"Damage":"13",
"Notes":"-"
}
*/
module.exports = (move) => {
  return new Discord.RichEmbed()
    .setColor('#FFB6C1')
    .addField('Start Up Frames', move['Start up frame'], true)
    .addField('On hit', move['Hit frame'], true)
    .addField('On CH', move['Counter hit frame'], true)
    .addField('On Block', move['Block frame'], true)
    .addField('Hit level', move['Hit level'], true)
    .addField('Damage', move.Damage, true)
    .addField('Notes', move.Notes);
};
