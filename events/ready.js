const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  
   client.channels.get("494436578526232586").send(':white_check_mark: | Bot açıldı.\nBotu şuan;\n**' + client.guilds.size + '** sunucu,\n**' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + '** kullanıcı kullanıyor!\n-----------------------------------');

	
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`k-davet | ${prefix}yardım | v2`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/huseynalieff"
});
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};

