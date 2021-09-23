const Discord = require("discord.js"); 
const config  = require('../config.json')

exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setTitle(`Sobre o Bilizinx`)
    .setThumbnail(`https://i.pinimg.com/originals/4d/2b/eb/4d2bebaa56f7461b7f62c19dcee33b30.png`)
    .setDescription(" **Equipe** \n *! Pernambucano⁰⁸¹  新時#1204* `535934137945554975`**Gifs:** \n *! Pernambucano⁰⁸¹  新時#1204* `Bilizinx Bot Creator` \n **Editor:** `Repl it` \n **Linguagem:** `JavaScript` \n **Hospedagem:** `Discloud` \n **Plano:** `Free` \n **Linguagem:** `JavaScript` \n **Banco de dados:** `Não` \n **Servidores:** `Apenas o Desenvolvedor tem acesso a essa info` \n **Criador:** `! Pernambucano⁰⁸¹  新時#1204 ` \n **Discord.js Package:** `V12`")

    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed);
 message.delete().catch(O_o => {}); 

};