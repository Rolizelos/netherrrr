

const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu Komutu Kullanmak İçin __Mesajları Yönet__ Yetkisinie Sahip Olmalısın**");
if(!args[0]) return message.channel.send("**<a:red:768773275656388639> Lütfen Silinicek Mesaj Miktarını Yazın!**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim <a:onay:768773248627900458>`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle', 'clear'],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <miktar>'
};

