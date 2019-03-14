const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:cookie: Kislo Eğlence2 komutları**")
    .setColor("#15f153")
	.addField("k-yaz", "İstediğiniz şeyi bota yazdırır")
	.addField("k-yazıtura", "Yazı-Tura atar.")
	.addField("k-istatistik", "Botun istatistik gösterir")
	.addField("k-hesapla", "Belirtilen işlemi yapar")
	.addField("k-havadurumu", "Hava durumunu gösterir.")
	.addField("k-8ball", "Sihirli 8ball sorularınızı cevaplar")
	.addField("k-avatar", "Avatarınızı gösterir")
	.addField("k-coolresim", "Coolresim gösterir")
    .addField("k-koş", "Koşarsınız")
    .addField("k-pitbull", "Pitbulldan kaçarısınız")
    .addField("k-token", "Bot tokenini verir")
    .addField("k-çay", "Size çay demler :)")
	.addField("k-çayiç", "Çay içersiniz")
    .addField("k-çayaşekerat", "Çayınıza şeker atarsınız")
    .addField("k-kahveiç", "Kahve içersiniz")
    .addField("k-kafasalla", "Kafa sallarsınız")
    .addField("k-okeyoyna", "Arkadaşlarınızla, doyasıya Okey oynarsınız")
    .addField("k-pcaç", "Bilgisayarınızı açarsınız")
    .addField("k-tekmeat", "Botu tekmelersiniz")
    .addField("k-tokatat", "Bota tokat atarsınız")
    .addField("k-yumrukat", "Bota yumruk atarsınız")
    message.react("🇹")
      message.react("🇲")


    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence2'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Bütün eğlence komutlarını verir.',
  usage: 'eğlence2'
};
