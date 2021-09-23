const Discord = require('discord.js')

exports.run = async (channel, message) => {
    let report = new Discord.MessageEmbed()
    .setTitle(' <a:discord:756585050295763074> Envie uma sugestão, dúvida ou um bug no servidor do Bilizinx')
    .setThumbnail('https://media.tenor.com/images/55ee59cf5adc70e9b1e881431a25baee/tenor.gif')
    .setDescription('Como Fazer: \n 1- Entre no servidor \n 2- vá em qualquer canal \n 3- digite sua sugestão, dúvida ou bug \n 4- e marque o cargo `Equipe | Bilizinx` \n 5- Link: https://discord.gg/YvweYpu')
    
    message.channel.send(report)
};