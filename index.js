const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login(process.env.token)

client.on ("ready", () =>  {
    console.log ("Il bot è online!")
})
client.on('ready', () => {
    client.user.setActivity('Closet of gamers', { type: 'PLAYING' });
    client.user.setActivity("Closet of gamers", {
    });
    client.user.setStatus('online') 
})
