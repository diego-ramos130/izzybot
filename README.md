# izzybot
Discord bot project for personal server use, using discord.js npm package.

## Commands 
`!ping` - Gives the heartbeat of the bot's connection to discord's websocket.

## Requirements
- Node.js
- Node Package Manager or equivalent
- your own [Discord bot](https://discordapp.com/developers/applications/) (and account)
- git (to run or edit this)

## Running The Bot
1. `git clone` this repo.
2. `npm install` to install relevant packages for the application.
2. Assuming you have already created a bot, join it to your server using your client ID; in your browser,` https://discordapp.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot
` and follow the instructions to join it to one of your servers you have admin privledges over (if you don't have one, make one.)
3. In the root folder of this repo, make a file called `auth.json`. Using your bot's token from the development site, write `{"token":""INSERT YOUR TOKEN HERE!"}`
4. From the root folder of this repo, `node src/bot.js`. You can now interact with the bot using the commands.

##Changelog
1.0.0 - Added initial bot, and `!ping` command.

## Author
[Diego Ramos](https://github.com/diego-ramos130)

