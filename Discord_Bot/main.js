const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS'],
partials: ['MESSAGE', 'CHANNEL'] });

const prefix = '>'; 

client.once('ready', () => {
    console.log('Oracle is online!');
});

client.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    //console.log('Sending message...');


    if(message.content.startsWith(prefix)){
        const args = message.content.substring(prefix.length)
    
        const command = args.toLowerCase();
        //message.channel.send('Did you type '+command+'?');
        console.log(command);

        if(command === 'ping'){
            message.channel.send('pong!');
        }else if(command === "youtube"){
            message.channel.send('https://www.youtube.com')
        }else if(command === "eminem"){
            message.channel.send('https://www.youtube.com/eminem')
        }

    }
});


client.login('OTkzNjE2MTQzODI4OTE4Mzgy.GchQKU.-aygcHdSaLksvjSLQoDAq7dO-JDTbFAu51e1AQ');