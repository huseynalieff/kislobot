const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
	    .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("**GEL ÇAYIMIN ŞEKERİ**")
        .setImage("https://i2.wp.com/www.oyunkaynagi.com/wp-content/uploads/2017/09/cropped-cay-cay-bardagi-kahvalti-cay-simit-incebelli-bardak-resimleri-V070220151622-N-21.png?ssl=1")
        .setThumbnail("https://i2.wp.com/www.oyunkaynagi.com/wp-content/uploads/2017/09/cropped-cay-cay-bardagi-kahvalti-cay-simit-incebelli-bardak-resimleri-V070220151622-N-21.png?ssl=1")
        .setColor(0x00AE86)
        .addField("Demişlerki", "Herşeyi salla ama ÇAYI demle hacı", true)
   
   .addField("Oksijeni (Kislo) bilmem ama yaşamak için çay şart :D", "")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'çay', 
  description: 'Size çay demler :)',
  usage: 'çay'
};
