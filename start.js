const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Getting Programmed...');
    console.log('Bot Launched!:D');
});

client.on('message', message => {
    if (message.content === '+info') {
        message.reply('I am Back - Prefix:+ // Bug Fixes // Bot Creator:FSxOmega');
      }  
});

client.on('message', message => {
    if (message.content === '+help') {
        message.reply('Damn... here you got them - +info +yt // More Commands will come soon!');
      }  
});

client.on('message', message => {
    if (message.content === '+yt') {
        message.reply('YouTube : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
      }  
});

client.login(process.env.BOT_TOKEN);
