const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://figure.superhentais.com/img/figure/89287.gif',
  'https://figure.superhentais.com/img/figure/89275.gif',
  'https://figure.superhentais.com/img/figure/88795.gif',
  'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
  'https://figure.superhentais.com/img/figure/88793.gif',
  'https://figure.superhentais.com/img/figure/87523.gif',
  'https://figure.superhentais.com/img/figure/87003.gif',
  'https://figure.superhentais.com/img/figure/83332.gif',
  'https://figure.superhentais.com/img/figure/81356.gif',
  'https://figure.superhentais.com/img/figure/81218.gif',
  'https://figure.superhentais.com/img/figure/81124.gif',
  'https://figure.superhentais.com/img/figure/81116.gif',
  'https://figure.superhentais.com/img/figure/81114.gif'
  ];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de Web transar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter("Código do ! Japa.神🐊#6969")
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  message.delete().catch(O_o => {});
}