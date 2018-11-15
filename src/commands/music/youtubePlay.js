'use strict';

const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = async (url) => {
  await ytdl(url, { filter: 'audioonly' }).pipe(fs.createReadStream('music.flv'));
}
