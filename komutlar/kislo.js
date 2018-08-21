const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**KISLO**")
        .setImage("http://kislobot.cf/kislodiscordicon.png")
        .setThumbnail("http://kislobot.cf/kislodiscordicon.png")
        .setColor(0x00AE86)
        .addField("Lakabı", "Kislo (Kislorodun kısalması ve Hava anlamına gelir)", true)
        .addField("Yetenekleri", `
        *Havanın hayatımızdaki en büyük rolünü
   *Anlatmaya gerek yok bence :D Discorddada bu geçerlidir ;)
   `, true)
   .addField("Kislo Sahibi", `Kislo#1441`, true)
   .addField("Merhaba Ben Kislo", "Naber :D")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kislo', 
  description: 'Kislo hakkında bilgi verir',
  usage: 'kislo'
};
