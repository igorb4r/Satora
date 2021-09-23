const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos")
    .setThumbnail(`https://media.tenor.com/images/55ee59cf5adc70e9b1e881431a25baee/tenor.gif`)
    .setDescription("Reagir de acordo com o que procura \n\n📚 - Informações\n\n🛡 - Administrativos\n\n🎊 - Diversão \n\n🕹 - RolePlay \n\n💾 - Miscelâneas")
    .setTimestamp()
    .setImage('https://68.media.tumblr.com/4c8004a7c34d2c5237c78a95727e7fc8/tumblr_oi8bkzoqyJ1vtm42eo1_r4_500.gif')
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
    
       
    
  message.channel.send(ajuda).then(msg => {
    msg.react('📚').then(r => {
      msg.react('🛡').then(r => {
    msg.react('🎊').then(r => {
      msg.react('🕹').then(r => {
      msg.react('💾').then(r => {

        })
      })
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🛡' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🎊' && user.id === message.author.id;
    const rpFilter = (reaction, user) => reaction.emoji.name === '🕹' && user.id === message.author.id;
    const dcFilter = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
    const MiscFilter = (reaction, user) => reaction.emoji.name === '💾' && user.id === message.author.id;

    
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);
    const Misc = msg.createReactionCollector(MiscFilter);
    const role = msg.createReactionCollector(rpFilter)
    const Discord = msg.createReactionCollector(dcFilter)
    message.delete().catch(O_o => {});
infos.on('collect', r2 => {
      ajuda.setColor('RANDOM')
      ajuda.setTitle("​ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒 ╚​══-®║▌│█║▌│█║▌│█│║▌║®══╝")
      ajuda.setDescription("»»————-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐎𝐄𝐒————-«« \n│ •➤ `bl!help`-Mostra os comandos do bot! \n│ •➤ `bl!botinfo` - Mostra as informações do bot \n│ •➤ `bl!ping` - Para ver meu tempo de resposta \n╰────────────────────────")
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {
      ajuda.setColor('RANDOM')
      ajuda.setTitle("𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐂𝐀𝐎 ╚​══-®║▌│█║▌│█║▌│█│║▌║®══╝")
      ajuda.setDescription("»»————-𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐂𝐀𝐎————-«« \n│ •➤ `bl!kick` - Expulsa um usuário \n│ •➤ `bl!clear` - Limpa até 99 mensagens em um canal \n│ •➤ `bl!ban` - Ban um membro! \n│ •➤ `bl!unban` - Desban um membro! \n│ •➤ `bl!listban` - a lista de banido do servidor \n ╰─────────────────────────")
      msg.edit(ajuda)
      
      
    })
    
    fun.on('collect', r2 => {
      ajuda.setColor('BLACK')
      ajuda.setTitle("𝐃𝐈𝐕𝐄𝐑𝐒𝐀𝐎 ╚​══-®║▌│█║▌│█║▌│█│║▌║®══╝")
      ajuda.setDescription("»»————-𝐃𝐈𝐕𝐄𝐑𝐒𝐀𝐎————-«« \n│ •➤ `bl!fate` - oq eu sou seu? \n│ •➤ `bl!cancel` - Cancele um usuário \n│ •➤ `bl!avatar` - Veja uma foto de perfil \n│ •➤ `bl!putin` - Crie um meme do Putin Andando \n│ •➤ `bl!emoji` - Para ver um emoji \n│ •➤ `bl!ship` - faça ships com um usuário :3 \n│ •➤ `bl!8ball` - Me pergunte algo \n│ •➤ `bl!say` - Você fala e eu repito \n│ •➤ `bl!coinflip` - Cara ou coroa? \n ╰──────────────────────────")
      msg.edit(ajuda)
      
    })
    role.on('collect', r2 => {
      ajuda.setColor('YELLOW')
      ajuda.setTitle("𝐑𝐎𝐋𝐄-𝐏𝐋𝐀𝐘 ╚​══-®║▌│█║▌│█║▌│█│║▌║®══╝")
     ajuda.setDescription("»»————-𝐑𝐎𝐋𝐄-𝐏𝐋𝐀𝐘————-«« \n│ •➤ `bl!shy` - timido \n│ •➤ `bl!smile` - Para sorrir \n│ •➤ `bl!moonwalk` - HEE HEE \n│ •➤ `bl!scream` - AAAAAAAA \n│ •➤ `bl!dance` - Para dançar \n│ •➤ `bl!laugh` - Ta rindo do que? \n│ •➤ `bl!sad` - Ta triste? \n│ •➤ `bl!atacar` - fazer um duelo de titãs? pq não :3 \n│ •➤ `bl!kiss` - Beije um usuário \n│ •➤ `bl!hug` - Abraçe um usuário \n│ •➤ `bl!lick` - Lamba um usuário \n│ •➤ `bl!pat` - Faça Cafuné em um usuário \n│ •➤ `bl!slap` - bata em um usuário \n ╰────────────────────────────")
    msg.edit(ajuda)
    })
    Misc.on('collect', r2 => {
      ajuda.setColor('BLUE')
      ajuda.setTitle("𝐌𝐈𝐒𝐂𝐄𝐋𝐀𝐍𝐄𝐀𝐒 ╚​══-®║▌│█║▌│█║▌│█│║▌║®══╝")
      ajuda.setDescription("»»————-𝐌𝐈𝐒𝐂𝐄𝐋𝐀𝐍𝐄𝐀𝐒————-«« \n│ •➤ `bl!vote` - Para votar em mim \n│ •➤ `bl!ideia` - Faça uma votação ou diga sua ideia sobre um servidor \n│ •➤ `bl!report` - Entre em contato direto com o criador \n│ •➤ `bl!embed` - Construa uma embed usando a base `bl!say` \n│ •➤ `bl!anuncio` - faça anúncio em um canal \n│ •➤ `bl!invite` - Me envie para o seu servidor \n│ •➤ `bl!github` - GitHub do meu criador :D \n│ •➤ `bl!crab` - 🦀 \n ╰────────────────────────────")
      msg.edit(ajuda)
      
      
      
    })
    
  })
} 
