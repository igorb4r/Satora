module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Desculpe, mas você não tem permissão para ativar o voz de ninguém"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Eu não tenho permissão para gerenciar funções.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Mencione o membro para quem você deseja ativar o voz"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Dado que o usuário não tem função muda, então o que devo assumir")
    }
    
    
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** não está Mutado!`)
    
    user.send(`Agora você está desmutado de **${message.guild.name}**`)
    message.delete().catch(O_o => {});

  }
};
