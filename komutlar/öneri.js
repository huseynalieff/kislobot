const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "481492632296620032";
	var channelID = "486943267535978497";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **!öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri :ok_hand: ")
			.addField("Kullanıcı: :slight_smile:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır. En kısa 3 günde size dönüş olacak :white_check_mark: \nSpam yazmayınız aksi takdirde bloke edilirsin.");
    message.react("✅")
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};
