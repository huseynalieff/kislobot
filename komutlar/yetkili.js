const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:tools: Kislo Yetkili komutları**")
    .setColor("#11cddb")
	.addField("k-eval", "Kod denemek için kullanılır")
    .addField("k-duyuru", "Duyuru yapar")
	.addField("k-reboot", "Botu yeniden başlatır")
	.addField("k-kilit", "Kanalı istediğiniz kadar süreyle kitler")
    .addField("k-temizle", "Belirttiğiniz mesaj kadar sayı siler")
    .addField("k-kick", "İstediğiniz bir kişiyi atarsınız")
    .addField("k-ban", "İstediğiniz bir kişiyi yasaklarsınız")
	.addField("k-unban", "İstediğiniz kişinin banını kaldırır")
	.addField("k-sustur", "İstediğiniz kişiyi  susturur.Dikkat! mod-log kanalına,Susturulmuş adlı perme ihtiyacınız var bu komut için")
	.addField("k-ban", "İstediğiniz bir kişiyi yasaklarsınız")
    message.react("🇹")
      message.react("🇲")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bütün yetkili komutlarını verir.',
  usage: 'yetkili'
};
