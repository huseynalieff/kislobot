const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot ismi", bot.user.username)
    .addField("Kuruluş tarihi", bot.user.createdAt)
    .addField("Bot sürümü", "0.0.1")
    .addField("Geliştiriciler", "<@412194712036835343>")

    message.channel.send(botembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bbilgi', 'bot'],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot hakkında bigli verir.',
  usage: 'botbilgi'
};
