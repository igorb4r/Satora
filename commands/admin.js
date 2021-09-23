const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Comando Pra Banir")
    .addField("Descriçao:", `Bane um membro`, true)
    .addField("Usar:", `{prefixo}!ban [usuário] [motivo]`, true)
    .addField("Example:", `{prefixo}!ban @Japa#6969 spam`)

    if(message.member.permissions.has("BAN_MEMBERS")) { 
     if(!message.guild.me.permissions.has(["BAN_MEMBERS"])) return message.channel.send("Eu naõ tenho permissão para fazer isto.")
      
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) return message.channel.send("Eu não consigo banir este usuário!")
    if(member.user.id === "seu_id") return message.channel.send("Eu não consigo banir o dono!")

    if(member.id === message.author.id) return message.channel.send("Você não pode banir a si mesmo!")

  let reason = args.slice(1).join(" ");
    if(!reason) {
      return message.channel.send("Não especificou uma razão!");
    } else {
       var res = reason
    }

    await member.ban({reason: reason}).catch(error => message.channel.send(`Desculpe eu não consegui por causa de: ${error}`));

    let staff = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle(":warning: | Ban")
      .setDescription("O usuário: <@"+member.id+"> foi banido por <@"+message.author.id+"> Motivo\n``"+res+"``")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
      .setTimestamp()
      .setFooter("ID do usuário: "+message.author.id)
    
    message.channel.send("O Usuário <@"+member.id+"> foi banido! Esse bobão achou que podia quebrar as regras e estava muito enganado!")
      
    message.delete()
    } else {
      return message.channel.send("Você não tem permissões para fazer isso!");
    }
  }