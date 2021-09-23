const Discord = require("discord.js")


exports.run = (client, message, args) => {
  message.delete()

  const fera = message.guild.channels.cache.find(ch => ch.name === `${message.author.id}`);

  let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply(':rotating_light: | O Comando  nao é assim digite prefixohelp para saber mais.``')
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send(`🚨 | Adicione um motivo ao ban idiotinha.`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':rotating_light: | Desculpe, mas você não tem permissão para isso.')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(':rotating_light: | Desculpe, mas você não tem permissão para isso.')

        message.channel.send(`Para banir o  ${user} clique no emoji`).then(msg => {
        msg.react(":flag_au:")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === ":flag_au:" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id); {
                let embed = new Discord.MessageEmbed()
                .setTitle(':rotating_light: - BANIMENTO')
                .setColor('#F7FE2E')
                .setTimestamp()
                .setThumbnail('https://imgur.com/HBkNyYD.gif')
                .addFields(
                  {
                    name: "``Informações do Banimento:``",
                    value: `**Usuário banido**: ${membro} \n**ID do usuário:** \`${membro.id}\` \n **Motivo**: ${motivo} \n **Banido por**: ${message.author.username}`
                  }
                )
                message.channel.send(embed);
            }
            membro.ban();

            let dm = new Discord.MessageEmbed()
            .setTitle(`🔨 Você está banido!`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`🔨 Servidor: \`${message.guild.name}\`
:hammer: Motivo: ${motivo}`)
        .setColor("#F7FE2E")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));
        membro.send(dm)
        })
    })
}