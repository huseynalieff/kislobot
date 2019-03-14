const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`çayaşekerat` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Çaya şeker attı.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://img-s1.onedio.com/id-5765995fcb607b2423d7f74c/rev-0/raw/s-504ddfb6456c50c66981c7be117d3faf0f30c9ab.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayaşekerat',
  description: 'Çayınıza şeker atarsınız.',
  usage: 'çayaşekerat'
};
