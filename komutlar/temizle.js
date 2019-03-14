const Discord = require('discord.js');


exports.run = function(client, message, args) {

    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  
      if (isNaN(args[0])) {
            message.reply(":warning: Kaç mesaj sileceğimi belirtmedin.")
            return
        }
        
        if (args[0].length > 99) {
            message.channel.send(":warning: 99'dan fazla mesaj silemem.")
            return
        }
message.channel.bulkDelete(args[0]);
message.channel.send(args[0]+" adet mesaj sildim :muscle: ").then(msg => {
  msg.react("✅")
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
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};
