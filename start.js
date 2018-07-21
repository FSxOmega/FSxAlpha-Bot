const Discord = require('discord.js');
const client = new Discord.Client();
//This is the Bot-Prefix
const prefix = '+';

//Bot on Ready
client.on('ready', () => {
    console.log('Bot Launched!:D');
});

//Command +say
client.on('message', message => {
    if (message.content === prefix + 'say') {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not Allowed to do this!");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)

//Command +info
client.on('message', message => {
    if (message.content === prefix + 'info') {

        message.channel.send({embed: {
  color: 0xee00ff,
 
  description: "Hey! It's me, CircruitCPU's Sister! // Bug Fixes // Bot Creator:FSxOmega!"
}});
      }  
});

//Command +help
client.on('message', message => {
    if (message.content === prefix + 'help') {

        message.channel.send({embed: {
  color: 0xee00ff,
  
  description: "damn... here you got them - :info // :yt // :invite // :donate // :support // More Commands will come soon!"

}});
      }  
});

//Command +yt
client.on('message', message => {
    if (message.content === prefix + 'yt') {

        message.channel.send({embed: {
  color: 0xee00ff,
 
  description: "YouTube : https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw"
}});
      }  
});

//Command +invite
client.on('message', message => {
    if (message.content === prefix + 'invite') {
        message.channel.send({embed: {
  color: 0xee00ff,

  description: "Wanna invite me to your Server? - https://discordapp.com/oauth2/authorize?client_id=469517178757185546&permissions=8&scope=bot"
}});

      }  
});

//Command +donate
client.on('message', message => {
    if (message.content === prefix + 'donate') {

        message.channel.send({embed: {
  color: 0xee00ff,
  
  description: "If you wanna Donate for faster Coding - https://paypal.me/fsxalpha"
}});
      }
});

//Command +support
client.on('message', message => {
    if (message.content === prefix + 'support') {

        message.channel.send({embed: {
  color: 0xee00ff,
 
  description: "Wanna join my Support Discord Server? - https://discord.gg/mvwaBr4'"
}});
      }
});

client.login(process.env.BOT_TOKEN);
