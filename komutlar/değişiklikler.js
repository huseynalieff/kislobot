const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
               author: {
                   name: "Genel Sürüm : 1.0 - Yapılan değişiklikler",
                   icon_url: ""
                 },
               color: 0xD97634,
               description: "**Problemler fixlendi  \nGecikme durumuna göre sunucu değişikliği yapıldı  \nYeni komutlar eklendi** \n__***Yeniliklerden haberdar olmak için bu komutu kullanın lütfen***__"
             }});
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['p'],
 permLevel: 0
};

exports.help = {
 name: 'değişiklikler',
 description: 'Değişiklikleri gösterir.',
 usage: 'değişiklikler'
};
