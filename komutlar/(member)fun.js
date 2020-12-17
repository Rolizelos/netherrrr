const Discord = require('discord.js');
const chalk = require('chalk');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#B565A7')
.setTitle('»Fun Commands')
.setTimestamp()
.addField('» Sends bird photos', '&bird')
.addField('» deal with it', '&dealwithit')
.addField('» fidget spinner', '&spinner')
.addField('» How gay is your friend', '&howgay')
.addField('» Take a math test', '&math')
.addField('» Make a random banner', '&banner')
.addField('» Make a random pink banner', '&pbanner')
.addField('» write using emojis', '&emoji')
.addField('» Heads or tails?', '&hort')
.addField('» Slots just slots', '&slots')
.addField('» Avatar is here', '&avatar')
.addField('» Text Generators', '&texts')
.setFooter('© 2020 Skybow - Mehmet', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['fun','f','funcommands'], 
  permLevel: 0 
};

exports.help = {
  name: 'fun',
  description: 'Tüm2 komutları gösterir.',
  usage: 'ya2rdım'
};