'use strict';

const Discord = require('discord.js');
const auth = require('../auth');
const tekkenSearch = require('./commands/tekken');
const music = require('./commands/music');

const client = new Discord.Client();
let connection;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async (message) => {
  if (message.content.substring(0, 1) === '!') {
    const args = message.content;
    const cmd = args.split(' ')[0];
    switch (cmd) {
      // --------------------------------------------------------------------------
      // test cases
      // --------------------------------------------------------------------------

      case '!yah':
        message.channel.send('YEET');
        break;
      case '!ping':
        message.channel.send(`Pong! ${client.ping} ms`);
        break;
      case '!help':
        message.channel.send('https://github.com/diego-ramos130/izzybot/blob/master/README.md#commands');
        break;

        // --------------------------------------------------------------------------
        // frame data cases
        // --------------------------------------------------------------------------

      case '!tekken':
        message.channel.send({ embed: tekkenSearch(args) });
        break;

        // --------------------------------------------------------------------------
        // music bot cases
        // --------------------------------------------------------------------------

      case '!join':
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then((con) => { // Connection is an instance of VoiceConnection
              connection = con;
              message.channel.send('Joined the channel.');
            })
            .catch(error => console.error(error));
        } else {
          message.channel.send('You need to join a voice channel first!');
        }
        break;

      case '!play':
        if (connection && message.member.voiceChannel) {
          return client.createVoiceBroadcast()
            .then((voiceBroadcast) => {
              music(voiceBroadcast, args);
            });
        }
        break;

      case '!leave':
        if (connection) {
          connection.disconnect();
          message.channel.send('Left the channel.');
        } else {
          message.channel.send('I\'m not in a voice channel...?');
        }
        break;

      default:
        message.channel.send('?');
    }
  }
});

client.login(auth.token);
