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
client.on("messageCreate", message => {
    if (message.content.startsWith("#userinfo")) {
        if (message.content == "!userinfo") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Non ho trovato questo utente")
        }
        var elencoPermessi = "";
        if (utente.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
client.on("messageCreate", message => {
    if (message.content.startsWith("#avatar")) {
        if (message.content.trim() == "!avatar") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send("Utente non trovato")
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("L'avatar di questo utente")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
        message.channel.send({ embeds: [embed] })
    }
})
