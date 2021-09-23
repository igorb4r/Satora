const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "emoji",
  description: "Veja todos os emojis da guilda",
  category: "utilitária",
  run: async (bot, message, args) => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
      .setTitle(`Emojis em ${message.guild.name}.`)
      .setDescription(
        `**Animada [${Animated}]**:\n${EmojisAnimated}\n\n**Padrão [${EmojiCount}]**:\n${Emojis}\n\n**Acima de todos os emojis [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
    message.delete();
  },
};
