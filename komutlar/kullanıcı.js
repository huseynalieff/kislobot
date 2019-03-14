const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:spy: Kullanıcı komutları**")
    .setColor("#b6dd1a")
    .addField("k-kullanıcıbilgim", "Komutu kullanan kişi hakkında bilgi verir")
    .addField("k-botbilgi", "Bot hakkında bilgi verir")
    .addField("k-sunucubilgi", "Sunucu hakkında bilgi verir")
    .addField("k-davet", "Botun davet linkini gönderir")
	.addField("k-servericon", "Serverin iconunu gösterir")
	.addField("k-istatistik", "Botun istatistik gösterir")
	.addField("k-kislo", "Kislo hakkında bilgi verir")
    message.react("🇹")
      message.react("🇲")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bütün kullanıcı komutlarını verir.',
  usage: 'kullanıcı'
};
