//this is the youtube command
module.exports = {
  name: 'youtube',
  description: "shows the link to youtube",
  execute(message, args){
    //Looking for role
    let role = message.guild.roles.cache.find(r => r.name === "Admin");
    //check if user has role
    if(message.member.roles.cache.some(r => r.name === "Admin")){
      message.channel.send('https://www.youtube.com');
    }else{
    //if the user doesn't have role
      message.channel.send('You don\'t have the right permissions to use this command');
      message.member.roles.add(role).catch(console.error);
    }
  }
}

