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
  const embed = new Discord.RichEmbed()
    .setColor('#FFB6C1')
    .addField('Start up frames', move['Start up frame'], true)
    .addField('Hit frames', move['Hit frame'], true)
    .addField('Counter hit frames', move['Counter hit frame'], true)
    .addField('Command', move.Command)
    .addField('Block frames,', move['Block frame'], true)
    .addField('Hit level', move['Hit level'], true)
    .addField('Damage', move.Damage, true)
    .addField('Notes', move.Notes);

  return embed;
};
