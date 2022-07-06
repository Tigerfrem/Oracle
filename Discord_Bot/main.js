const Discord = require('discord.js');

//const { Player, QueryType } = require("discord-player");

token = 'OTkzNjE2MTQzODI4OTE4Mzgy.GchQKU.-aygcHdSaLksvjSLQoDAq7dO-JDTbFAu51e1AQ'

//const config = require("./config.json");

const client = new Discord.Client({ intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS', 'GUILD_VOICE_STATES'],
partials: ['MESSAGE', 'CHANNEL'] });

const prefix = '>'; 

//const player = new Player(client);

client.once('ready', () => {
    console.log('Oracle is online!');
});


client.on('messageCreate', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    if(message.content.startsWith(prefix)){
        const args = message.content.substring(prefix.length)
    
        const command = args.toLowerCase();
       
        console.log('User typed '+command);

        if(command === 'ping'){
            message.channel.send('pong!');
        }else if(command === 'youtube'){
            message.channel.send('https://www.youtube.com')
        }else if(command === 'eminem'){
            message.channel.send('https://www.youtube.com/eminem')
        }else if(command === 'linux'){
            message.channel.send('https://www.loggly.com/wp-content/uploads/2015/05/Linux-Cheat-Sheet-Sponsored-By-Loggly.pdf')
        }else if(command === 'lofi'){
            message.channel.send('https://www.youtube.com/watch?v=5qap5aO4i9A')
        }

    }
});

/*player.on("error", (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
});
player.on("connectionError", (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
});
*/

client.login(token);