const Discord = require('discord.js');

const client = new Discord.Client({ intents: []});

const prefix = '-';

client.once('ready', () => {
    console.log('Oracle is online!');
});

client.on('message', message =>{ 
    if(!message.content.startswith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});


client.login('OTkzNjE2MTQzODI4OTE4Mzgy.GchQKU.-aygcHdSaLksvjSLQoDAq7dO-JDTbFAu51e1AQ');