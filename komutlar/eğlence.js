const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:cookie: Kislo Eğlence komutları**")
    .setColor("#15f153")
	.addField("k-espiri", "Espiri yapar")
	.addField("k-okeyoyna", "Okey oynarsınız")
	.addField("k-şifre", "Rastgele bir şifre oluşturur")
	.addField("k-öneri", "Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır")
    .addField("k-ağla", "Botu ağlatır")
	.addField("k-slots", "Slots oyunu oynatır")
	.addField("k-stresçarkı", "Sizin için bir stres çarkı çevirir")
	.addField("k-emojiyazı", "Mesajınızı emoji haline getirir")
	.addField("k-hesapla", "Belirtilen işlemi yapar")
    message.react("🇹")
      message.react("🇲")


    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence1 komutlarını verir.',
  usage: 'eğlence'
};
