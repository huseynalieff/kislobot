const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`tokatat` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + "Bota, yani bana tokat attı!")
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://img-s2.onedio.com/id-52e56f3e2ca795313e00004d/rev-0/w-500/s-0dfdb80ed7e41d08970890f2b506071119491fdd.gif`)
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
  name: 'tokatat',
  description: 'Bota tokat atarsınız.',
  usage: 'tokatat'
};
