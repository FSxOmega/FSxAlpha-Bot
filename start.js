const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+help') {
    	message.reply('My Commands are:
                      Released:
                      +info
                      Comming in a few Updates:
                      +bot-process
                      +yt');
  	}  
});

client.on('message', message => {
    if (message.content === '+info') {
    	message.reply('No longer R.I.P LaTex! - Prefix [+] / Bug Fixes / Soon ( +yt CMD / Other CMDs ')
        Bot Re-Creator:FSxOmega);
  	}  
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
