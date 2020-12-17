client.on('guildCreate', async guild => {

const astrocode = new Discord.RichEmbed()

.setColor("RANDOM")
.addField(`Merhaba ${guild.name}`, "Adlı Sunucuya Giriş Yaptım,Beni Eklediğin İçin Teşekkürler!")
.addField("Komutlarımı Görmek İçin", "!help")
.addField("Prefixim ", "!")
.setFooter("Neher")
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/748598413830127637/748900767166890014/dsgnd.png")

guild.owner.send(nether)