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
        type: "STREAMING",
        url: "https://www.twitch.tv/nomeutente"
    });
    //Stato online/offine/non disturbare... (Potrebbe volerci qualche tempo per doversi settare)
    client.user.setStatus('online') //Oppure idle, dnd, invisible
})
