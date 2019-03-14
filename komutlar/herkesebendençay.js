const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`herkesebendençay` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + "'dan herkese çay!")
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://gifimage.net/wp-content/uploads/2017/08/tea-gif-10.gif`)
    return message.channel.sendEmbed(sunucubilgi)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Herkese çay ısmarlarsınız.',
  usage: 'herkesebendençay'
};
