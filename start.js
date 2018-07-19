const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.user.setStatus("Stream")
client.user.setGame("+help for Commands!")

client.on('message', message => {
    if (message.content === '+info') {
        message.reply('I am Back - Prefix:+ // Bug Fixes // Bot Creator:FSxOmega');
      }  
});

client.on('message', message => {
    if (message.content === '+help') {
        message.reply('Ok Sure - Error : Code Unfinished...');
      }  
});

client.on('message', message => {
    if (message.content === '+yt') {
        message.reply('YT Official : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
      }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
