const Discord = require('discord.js');

//TOKEN FOR THE BOT
DISCORD_BOT_TOKEN = 'OTkzNjE2MTQzODI4OTE4Mzgy.GchQKU.-aygcHdSaLksvjSLQoDAq7dO-JDTbFAu51e1AQ'

//TOKEN FOR GIFS
TENOR_KEY = ' AIzaSyCQdJBlKGp2zOhx_7dbdnDAd07p4ALMnoE'

const client = new Discord.Client({ intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS', 'GUILD_VOICE_STATES'],
partials: ['MESSAGE', 'CHANNEL'] });

//START OF A COMMAND
const prefix = '>'; 

const fs = require('fs');
const { url } = require('inspector');

const fetch = require("node-fetch");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Oracle is online!');
});

client.on('ready', message => {
    client.user.setActivity('Good Vibes', {type:'STREAMING'}, {url: 'https://www.twitch.tv/lofi_chill_lounge'});
    client.user.setStatus('Spying on you!');
    //client.user.setPresence({ status: 'dnd', activity: {name: 'Good vibes', type:'STREAMING', url: 'https://www.twitch.tv/lofi_chill_lounge'} });
    //client.user.set
});


client.on("messageCreate", async(message) => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    if(message.content.startsWith(prefix)){
        const args = message.content.substring(prefix.length);
    
        const command = args.toLowerCase();
       
        console.log('User typed '+command);


        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        }else if(command === 'youtube'){
            client.commands.get('youtube').execute(message, args);
        }else if(command === 'eminem'){
            message.channel.send('https://www.youtube.com/eminem')
        }else if(command === 'linux'){
            message.channel.send('https://www.loggly.com/wp-content/uploads/2015/05/Linux-Cheat-Sheet-Sponsored-By-Loggly.pdf')
        }else if(command === 'lofi'){
            message.channel.send('https://www.youtube.com/watch?v=5qap5aO4i9A')
        //}else if(command === 'gif'){
            //client.commands.get('gif').execute(message, args);
        } else {
           // message.channel.send(command+ ' doesn\'t exist');
        }
        
    }   
        
        const tokens = message.content.split(" ");

    if(tokens[0] === '>gif'){
        const keywords = tokens.slice(1, tokens.length).join(" ");
        const url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${TENOR_KEY}&client_key=${DISCORD_BOT_TOKEN}&limit=10`;
        const response = await fetch(url);
        const result = await response.json();
        const index = Math.floor(Math.random() * result.results.length);
    
        message.channel.send(result.results[index].url);

    }
    
});

client.login(DISCORD_BOT_TOKEN);