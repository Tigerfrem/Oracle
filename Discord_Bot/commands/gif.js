/*DISCORD_BOT_TOKEN
TENOR_KEY = ' AIzaSyCQdJBlKGp2zOhx_7dbdnDAd07p4ALMnoE'


module.exports = {  
    name: 'gif',
    description: "this is a gif command!",
   
   execute(message, args) {
    const url = `https://tenor.googleapis.com/v2/search?q=${args}&key=${TENOR_KEY}&client_key=${DISCORD_BOT_TOKEN}&limit=10`;
    const response = await fetch(url);
    const result = await response.json();
    const index = Math.floor(Math.random() * result.results.length);
    message.channel.send(result.results[index].url);
    }
    
}*/
