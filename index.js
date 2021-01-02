const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من نایێم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`ڕێکلام بۆ ئەو سێرفەرە بکە  https://discord.gg/rgy9mrztxH `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("793557074369052692").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕێکلام بۆ من بنێرە`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("Nzk0OTE3NzYxMjA1NjY1ODEy.X_By2w.eL-De2xM6f6yeZxC9H8jhb69hKY");//تۆکین لێرە دانێ
