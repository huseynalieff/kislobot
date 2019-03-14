const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    
    const embed = new Discord.RichEmbed()
    .setAuthor('OYLAMA')
    .setColor(3447003)
    .setDescription(`${mesaj} \n\n\ Evet İçin: :white_check_mark:  Hayır İçin: :x: `)
	
	
    return message.channel.sendEmbed(embed).then(mesaj => {
mesaj.react("✅")
mesaj.react("❌")
});
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
