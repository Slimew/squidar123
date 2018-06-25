const Discord = require('discord.js');
const bot = new Discord.Client();   

var cor = "#CD3723"

bot.login ('NDQ1MDIzMTMyNDYyNjEyNDgw.Ddkcsw.Bal-BtyI6vSUAfVzShb3Ef1LDhw');

bot.on("ready", () => {
    bot.user.setGame(`-ajuda | Presente em ${bot.guilds.size} guilds!`)
});
bot.on('message', message => {
    console.log("Conectado com sucesso!")

    let prefix = "-";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

        if (message.content.startsWith('-owner')){
        message.channel.send('Slime <3');
    }
        if (message.content.startsWith('-parca')){
        message.channel.send('Whiteeh, mi parça :D.');
    }
    if (message.content.startsWith('SquidarBATMAN')){
        message.reply('Oi, eu sou o Squidar, feito pelo Slime  , use -info para saber mais, meu prefixo aqui é - .');
    }
    if (message.content.startsWith('-help')){
        message.channel.send('**:warning: USO INCORRETO. UTILIZE  -ajuda** :warning:');
    }
    if (message.content.startsWith('-site')){
        message.channel.send('https://bots-anna-squidar.webnode.com/'); 
    }
    if (message.content.startsWith("-pong")){
        message.reply(`Pong. :ping_pong:  **${bot.ping}**`) 
    }
    if (message.content.startsWith("-devziao")){
        message.channel.send('Whiteeh <3')
    }
    if (message.content.startsWith("-cara")){
        message.channel.send('( ͡° ͜ʖ ͡°)') 
    }
    if (message.content.startsWith('Squidar')){
        var falas = ["**oi**", "**di boua**" ]
        message.channel.sendMessage(falas[Math.round(Math.random()*falas.length-1)]);
     }
    if (message.content.startsWith("-reloadbot")){
                message.channel.send(':warning:  **Bot SQUIDAR reiniciando.** :warning:')
    }
    if (message.content.startsWith('-cor amarelo queimado')){
        message.channel.send('COR MUDADA PARA : **AMARELO QUEIMADO**');
        message.guild.members.get(message.author.id).addRole("447749656407965707")
    }  
    if (message.content.startsWith('-cor amarelo')){
        message.channel.send('COR MUDADA PARA : **AMARELO**');
        message.guild.members.get(message.author.id).addRole("447748458217209886")
    }   
    if (message.content.startsWith('-cor verde escuro')){
        message.channel.send('COR MUDADA PARA : **VERDE ESCURO**');
        message.guild.members.get(message.author.id).addRole("447748701037920266")
    }
    if (message.content.startsWith('-cor verde')){
        message.channel.send('COR MUDADA PARA : **VERDE**');
        message.guild.members.get(message.author.id).addRole("447748682880778262")
    }   
    if (message.content.startsWith('-cor rosa')){
        message.channel.send('COR MUDADA PARA : **ROSA**');
        message.guild.members.get(message.author.id).addRole("447748685112279050")
    }  
    if (message.content.startsWith('-cor vermelho')){
        message.channel.send('COR MUDADA PARA : **VERMELHO**');
        message.guild.members.get(message.author.id).addRole("447748683837210624")
    }
    if (message.content.startsWith('-cor vinho')){
        message.channel.send('COR MUDADA PARA : **VINHO**');
        message.guild.members.get(message.author.id).addRole("447748684495716352")
    }   
    if (message.content.startsWith('-cor azul escuro')){
        message.channel.send('COR MUDADA PARA : **AZUL ESCURO**');
        message.guild.members.get(message.author.id).addRole("447748699515518977")
    }     
    if (message.content.startsWith('-cor azul')){
        message.channel.send('COR MUDADA PARA : **AZUL**');
        message.guild.members.get(message.author.id).addRole("447748700081618945")
    } 
    if(message.content.startsWith("-serverinfo")){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        
        .setColor(cor)
        .setThumbnail(sicon)
        .addField("Informações deste servidor.", "Veja as informações.", true)
        .addField(":speaking_head: Nome do Servidor:", message.guild.name, true)
        .addField(":crown:  Dono do servidor:", message.guild.owner, true)
        .addField(":date: Criado no dia:", message.guild.createdAt, true)
        .addField(":map: Onde fica:", message.guild.region, true)
        .addField(":busts_in_silhouette: Total De Membros:", message.guild.memberCount, true)
        .addField(":newspaper: ID do Dono", message.guild.ownerID, true)
        .addField(":computer: Id da guild:", message.guild.id, true) 
        .addField(":scroll: Roles:", message.guild.roles.size, true)
        .addField(":newspaper2: Canais de texto e voz:", message.guild.channels.size, true)
        .addField(":thinking:  Emojis do servidor", message.guild.emojis.size, true)
        .addField(":green_book: Onlines", message.guild.presences.size, true)
        .addField(":cookie: Canal de ausentes:", message.guild.afkChannel, true)
        .addField(":anger: Tempo de timeout afk.", message.guild.afkTimeout, true)
        .setFooter(message.author.tag,message.author.avatarURL )

        return message.channel.send(serverembed);
      }
      if(message.content.startsWith("-ajuda")){
        message.channel.send(`<@${message.author.id}>, Enviei Os Comandos Em Sua DM, Verfique! <a:WUMPUS:449959250811420682> \n Até mais :wave:! `)
        let serverembed = new Discord.RichEmbed()
        
        .addField(":computer: Olhe nossos comandos. :computer: ", "comandos a seguir. :D")
        .addField("1- -ping", "Mostra o seu ping")
        .addField("2- -owner","Mostra quem me criou.")
        .addField("3- -serverinfo", "Mostra todas informações do servidor")
        .addField("4- -site", "Mostra meu site, e do copa.")
        .addField("5- -info", "Mostra informações do bot.")
        .addField("6- -avatar <user>", "Mostra o avatar do mencionado.")
        .addField("7- -id <user>", "Mostra o id do tal mencionado.")
        .addField("8- -botinfo", "Mostrs minhas informações")
        .addField("9- -afkon", "Você irá ficar afk.")
        .addField("10- -afkoff", "Você não irá mais estar afk.")
        .addField("11- -userinfo", "Mostra suas informações.")
        .addField("12- -kick @user {motivo}", "Kicka o usuário.")
        .addField("13- -clear {um número de 2 até 100.}", "Limpa as tantas mensagens.")
        .setDescription("Dúvidas, contate $lįīm3.#9746")
        .setColor(cor)
        .setFooter(message.author.tag,message.author.avatarURL )

        try{
            await = message.author.send(serverembed)
          }catch(e){
          }
    }
      if(message.content.startsWith("-avatar")){
        let user = message.mentions.users.first() || message.author;
        let uicon = user.avatarURL
    
        let embed = new Discord.RichEmbed()
        .setTitle(`:frame_photo: Avatar de ${user.tag}`)
        .setImage(uicon)
        .setColor("#CD3723")
        .setFooter(message.author.tag,message.author.avatarURL )
        message.channel.send(embed)
    }
      if(message.content.startsWith("-id")){
        let user = message.mentions.users.first() || message.author;
        let id = user.id
    
        let avatarembed = new Discord.RichEmbed()
        .setTitle(`Id de ${user.tag}`)
        .addField("ID", id)
        .setColor(cor)
        message.channel.send(avatarembed)
    }
    if(message.content.startsWith("-botinfo")){
        let sicon = message.guild.iconURL;
        let bicon = bot.user.displayAvatarURL;
        const serverembed = new Discord.RichEmbed()

        .setColor(cor)
        .addField(":x: Meu verdadeiro nome é:", bot.user.username)
        .setThumbnail(bicon)
        .addField(":ideograph_advantage: Minha tag:", bot.user.tag)
        .addField(":calendar: Fui criado em:", bot.user.createdAt, true )
        .addField(":id: Meu id:", bot.user.id, true )
        .addField(`:ping_pong: Ping:`, `${bot.ping}`, true )
        .addField(":x: Verificado?", bot.user.verified, true)
        .addField(":spy: Estou comparecendo em quantas guilds?", bot.guilds.size, true)
        .addField(":ghost: Nessas guilds, tem quantos membros?", bot.users.size, true)
        .setFooter(message.author.tag,message.author.avatarURL )

        return message.channel.send(serverembed);
      }
      if(message.content.startsWith("-afkoff")){
      message.reply("**Você não está mais AFK.**");
      }
      if(message.content.startsWith("-afkon")){
        message.reply("**Você está AFK.**"); 
        }
        if(message.content.startsWith("-userinfo")){
            const serverembed = new Discord.RichEmbed()
    
            .setColor(cor)
            .addField("<a:WUMPUS:449959250811420682> Você", message.member.permissions.member, true)
            .addField(":star2: Você entrou no servidor em:", message.member.joinedAt, true)
            .addField(":id: Seu id de usuário", message.member.id,true)
            .addField(":scroll: Seus cargos incluindo everyone.", message.member.roles.size, true)
            .addField(":octagonal_sign: Sua discord tag", message.member.user.tag, true)

            return message.channel.send(serverembed)

            .setFooter(message.author.tag,message.author.avatarURL )
        }
        if(message.content.startsWith("-ping")) {
            message.channel.send({
              "embed": {
                "description":
       ":black_circle: PING :black_circle: \n \n <a:WUMPUS:449959250811420682> Pong!  \n<a:BlobGame:455069214403985420>" + (Date.now() - message.createdTimestamp) + "ms",
      
                "thumbnail": {
                  "url": "https://cdn.discordapp.com/avatars/445023132462612480/31521e3d8e1f2a94bb35428815da2bba.png?size=2048"
                }
              }
            });
      }
      if(message.content.startsWith("-info")){
        let embed = new Discord.RichEmbed()
        .addField("                               :black_circle: INFO :black_circle:                        ","\n Olá, Sou o **SQUIDAR**! Tá, mas quem sou eu? Um simples bot feito pelo : **$lim3#9746** . E fui ajudado pelo: **WhiteehBOY#8457**")
        .addField("\n \n:books: Minhas informações :",`- **11.3.2** discord.js \n - **`+ (Date.now() - message.createdTimestamp) + "**ms" , true)
        .addField(":page_with_curl: Status",`- **${bot.guilds.size}** Guilds \n- **${bot.users.size}** Humanos \n- **${bot.channels.size}** canais de texto e voz`, true)
        .addField(":link: Links",` - **[SERVIDOR OFICIAL](https://discord.gg/yqPvvqg)** \n- **[CONVITE](https://discordapp.com/oauth2/authorize?client_id=445023132462612480&scope=bot&permissions=8)**`, true )
        .setColor(cor) 
        message.channel.send(embed)
      }
      if(message.content.startsWith("-animated")){
      message.channel.send("<a:WUMPUS:449959250811420682>")
    }
    if(args[0] == "help"){
      message.reply("Use: -kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.content.startsWith(`${prefix}kick`)){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bum! Suas permissões são insuficientes. :v`);
    if(!kUser) return message.channel.send(":no_entry_sign: | Usuário não encontrado!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(":no_entry_sign: | Méééééh, sem permissão. :confused:");

    let kickEmbed = new Discord.RichEmbed()
    .setColor(cor)
    .addField("KICK", ":police_car:")
    .addField("Usuário punido:", `${kUser}`)
    .addField("Feito por:", `<@${message.author.id}>`)
    .addField("Motivo", `${kReason}`);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send(":no_entry_sign: | Crie um canal chamado `logs` para eu poder punir o usuário!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    }
    if(message.content.startsWith("-say")){
        const sayMessage = args.join(" ");
        const sayEmbed = new Discord.RichEmbed()

        .setColor(cor)
        .setTitle(sayMessage)
        .setFooter(message.author.tag,message.author.avatarURL )

        return message.channel.send(sayEmbed);
      }
      let reason = args.slice(0).join(' ');
  if (message.content.startsWith("-clear")){
  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**Você não tem permissão para limpar o chat!**");
  if (reason.length < 1) return message.reply('**Bote um número de 2 até 100 para eu deletar!**');
  message.channel.bulkDelete(`${args[0]}`)
    setTimeout(function() {
        message.channel.sendMessage(`**:wastebasket: Foram deletadas ${args[0]} mensagens, comando executado por <@${message.author.id}> !**`).then((value) => {
            setTimeout(() => {
                value.delete();
            }, 5000);
        });
    }, 2000)
}
 if (message.content.startsWith(`<@${bot.user.id}>`)){
 message.channel.send(`Olá <@${message.author.id}>, tudo bem? \n Meu prefixo aqui é ${prefix} Use -ajuda`)
 }
});
