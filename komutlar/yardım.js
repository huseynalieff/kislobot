const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:page_facing_up: Kislo Yardım Menüsü**")
    .setColor("#15f153")
    .addField("k-eğlence", "Eğlence komutlarını gösterir")
	.addField("k-eğlence2", "Eğlence2 komutlarını gösterir")
    .addField("k-kullanıcı:", "Kullanıcı komutlarını gösterir")
    .addField("k-yetkili:", "Yetkili komutlarını gösterir")
    .addField("k-sahip:", "Sahiplerin kullanabileceği komutları gösterir")
    message.react("🇹")
      message.react("🇲")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün komutları verir.',
  usage: 'yardım'
};
