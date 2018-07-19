const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ('+infos:) {
        message.reply('LaTex is Back! - New Prefix [+]
                             Bot Re-Creator:FSxOmega');
      }  
});

client.on('message', message => {
    if (message.content === '+help') {
        message.reply('Ok Here - Error : Code Unfinished...');
      }  
});

client.on('message', message => {
    if (message.content === '..yt') {
        message.reply('YouTube Channel Link: https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
      }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
