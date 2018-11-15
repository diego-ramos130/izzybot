const Discord = require('discord.js');

module.exports = (move) => {
  return new Discord.RichEmbed()
    .setColor('#FFB6C1')
    .setDescription(`Command: ${move.Command}`)
    .addField('Start Up Frames', move['Start up frame'], true)
    .addField('On hit', move['Hit frame'], true)
    .addField('On CH', move['Counter hit frame'], true)
    .addField('On Block', move['Block frame'], true)
    .addField('Hit level', move['Hit level'], true)
    .addField('Damage', move.Damage, true)
    .addField('Notes', move.Notes);
};
