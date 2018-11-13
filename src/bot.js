'use strict';

const Discord = require('discord.js');
const auth = require('../auth');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.substring(0, 1) === '!') {
    const args = message.content;
    const cmd = args.split('!')[1];
    switch (cmd) {
      case 'yah':
        message.channel.send('YEET');
        break;
      case 'ping':
        message.channel.send(`Pong! ${client.ping} ms`);
        break;
      default:
        message.channel.send('?');
    }
  }
});

client.login(auth.token);
