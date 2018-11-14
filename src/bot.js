'use strict';

const Discord = require('discord.js');
const auth = require('../auth');
const tekkenSearch = require('./commands/tekken');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.substring(0, 1) === '!') {
    const args = message.content;
    const cmd = args.split(' ')[0];
    switch (cmd) {
      case '!yah':
        message.channel.send('YEET');
        break;
      case '!ping':
        message.channel.send(`Pong! ${client.ping} ms`);
        break;
      case '!tekken':
        message.channel.send({ embed: tekkenSearch(args) });
        break;
      case '!help':
        message.channel.send({ embed: { url: 'https://github.com/diego-ramos130/izzybot/blob/master/README.md#commands' } });
        break;
      default:
        message.channel.send('?');
    }
  }
});

client.login(auth.token);
