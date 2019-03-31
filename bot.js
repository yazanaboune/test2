const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("560426404106338304")
setInterval(function() {
channel.send(`anayazan anayazan anam7md anayazan anam7md`);
}, 30)
})

client.login(process.env.BOT_TOKEN);