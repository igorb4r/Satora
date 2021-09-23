const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    {
      name: "vermelho",
      id: "759545626353598535"
    },
    {
      name: "verde",
      id: "759544854031106069"
    },
    {
      name: "azuL",
      id: "759544560329162782"
    },
    {
      name: "roxo escuro",
      id: "759544560329162782"
    },
    {
      name: "azul violeta",
      id: "759544560329162782"
    },
    {
      name: "laranja",
      id: "759544560329162782"
    },
    {
      name: "cyan",
      id: "759544560329162782"
    },
    {
      name: "rosa",
      id: "759544560329162782"
    },
    {
      name: "dodger azul",
      id: "759544560329162782"
    },
    {
      name: "limao",
      id: "759544560329162782"
    },
    {
      name: "amarela",
      id: "759545626353598535"
    },
    {
      name: "margeta",
      id: "759544560329162782"
    }
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, escreva o nome da cor após o comando.`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};