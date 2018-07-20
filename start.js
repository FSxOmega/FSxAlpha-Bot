const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Launched!:D');
});

client.on('message', message => {
    if (message.content === '+info') {
        message.reply('I am Back - Prefix:+ // Bug Fixes // Bot Creator:FSxOmega');
      }  
});

client.on('message', message => {
    if (message.content === '+help') {
        message.reply('Damn... here you got them - +info +yt +invite +donate // More Commands will come soon!');
      }  
});

client.on('message', message => {
    if (message.content === '+yt') {
        message.reply('YouTube : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
      }  
});

client.on('message', message => {
    if (message.content === '+invite') {
        message.reply('Wanna invite me to your Server? - https://discordapp.com/oauth2/authorize?client_id=469517178757185546&permissions=8&scope=bot');
      }  
});

client.on('message', message => {
    if (message.content === '+donate') {
        message.reply('If you wanna Donate for faster Coding - paypal.me/fsxalpha')
      }
});

client.on('message', message => {
    if (message.content === '+support') {
        message.reply('Wanna join my Support Discord Server? - https://discord.gg/mvwaBr4')
      }
});

client.login(process.env.BOT_TOKEN);
