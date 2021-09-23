exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "719300123498119338"),
  (role => role.id === "719340144619946124"),
  (role => role.id === "719340118640427009"),
  (role => role.id === "719371926753247262"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "719615457816084480",
        "752627632234954763",
        "719733329292689459"
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito.`);
  } else if (message.content.includes("ON")) {
    await roleA.setPermissions(0).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("OFF")) {
    await roleA.setPermissions(0).catch(console.error);
//Assista ao vídeo para entender como setar as permissões https://youtu.be/P7jDV0JnMRc
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid ON | OFF`);
  }
};