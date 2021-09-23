odule.exports = (client, message) => {

    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;
    
if (guildTable) prefix = guildTable.prefix
        if (message.content.indexOf(prefix) !== 0) {
            if (message.mentions.members.size > 0) {
                let mention = message.content.split(/ +/g)[0];
                if (mention === `<@${client.user.id}>` || mention === `<@!${client.user.id}>`) {
                    message.reply(` **Meu prefixo atual é:** **${prefix}** | ` +
                    `**Use:** **bl!prefixo** <prefixo> **para alterar!**`).then(m => {
                        m.delete(5000).catch(()=>{});
                    }).catch(console.error);
                }
            }
        }
      cmd.run(client, message, args);
    
};