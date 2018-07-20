const Discord = require('discord.js');
const client = new Discord.Client();
//This is the Bot-Prefix
const prefix = '+';

//Bot on Ready
client.on('ready', () => {
    console.log('Bot Launched!:D');
});

//Listener-Event

client.on('message', message => {
    
    //Variables
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    //Command +clear
    if (message.startsWith(prefix + 'clear')) {
        async function purge() {
            message.delete();
            
            //Role Check!
            if (!message.member.roles.find("botcmder", "botcmder")) {
                message.member.channel.send('You need the botcmder role to do this!');
                return
            
            if (isNsN(args[0]))) {
                message.channel.send('Please use a Number! \n usage: '+ prefix + ' clear <amount>');
                
            }
            
            const fetched = await message.channel.fetchMessages({limit: args[0]});
            message.channel.send(fetched.size + ' Messages found, Deleting...');
            
            //Deleting Messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send('Error: ${error}'));
        }
        
        purge();
        
            

client.on('message', message => {
    if (message.content === 'info') {
        message.reply('I am Back - Prefix:+ // Bug Fixes // Bot Creator:FSxOmega');
      }  
});

client.on('message', message => {
    if (message.content === '+help') {
        message.reply('Damn... here you got them - +info +yt +invite +donate +support // More Commands will come soon!');
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
