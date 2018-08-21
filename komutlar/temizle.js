const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(20);
message.channel.send("20 mesaj sildim :muscle: ").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 1 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler. Sadece sunucu sahibi ve moderatörler',
  usage: 'temizle <miktar>'
};
