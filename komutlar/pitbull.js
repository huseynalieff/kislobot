const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`pitbull` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Pitbull geliyor lan, kaç kaç!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://geekmuhit-image.s3-us-west-2.amazonaws.com/original/3X/b/4/b4b0a288c21a6108f1133f2bd45c43f53ea60c77.gif`)
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
  name: 'pitbull',
  description: 'Pitbulldan kaçarsınız.',
  usage: 'pitbull'
};
