const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NDM0NTI5ODE1NDUwNjE1ODEy.XOYJ5A.YcEm-krLn00yae8wtgmILCB_bJY';

const PREFIX = ">";

var version = '1.4.6';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity(' >help | ' + bot.guilds.size + ' Servers with ' + bot.users.size + ' Members', { type: 'WATCHING' })

})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "join-leave");
    if (!channel) return;

    channel.send(`Welcome to our server ${member}, Please read the Rules in the <#586817957091344385> channel!`)
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        
        case 'userinfo':

            if (message.content.startsWith(PREFIX + 'userinfo')) {
                message.react("👍")
                var uundefined = message.author.username;
                var iinfoicon = message.author.avatarURL;
                var embed = new Discord.RichEmbed()
                    .setTitle('User Information')
                    .addField('Player Name', uundefined)
                    .addField('Current Server name', message.guild.name)
                    .addField('Bot Name', bot.user.username)
                    .addField('Your Roles', message.member.roles.array().slice(1).join('\n'))
                    .setColor(0xB89F20)
                    .setImage(iinfoicon)
                    .setTimestamp()
                    .setFooter('Made by press alt+f4#1684 DM me to say thank you ;) XD')
                message.channel.sendEmbed(embed)
            }

            break;

        case 'ping':
            if (message.content.startsWith(PREFIX + 'ping')) {
                message.react("👍")
                const useruser = 'Command ran by: ' + message.author.username;
                const userurl = message.author.avavtarURL;

                // Forming the embed
                var embed = new Discord.RichEmbed() // Remember to use .MessageEmbed() if you use the master version
                    .setColor(0x43f033)
                    .setDescription(`Loading...`)
                    .setTimestamp()
                message.channel.send(embed).then(message => {
                    embed.setColor(0x43f033)
                    embed.setDescription(`:ping_pong: Pong! **\`${bot.pings[0]}ms\`**`)
                    embed.setFooter(useruser, userurl)
                    embed.setTimestamp()
                    message.edit(embed)
                })
            }
            break;

        case 'updates':
            if (message.content.startsWith(PREFIX + 'updates')) {
                message.react("👍")
                message.author.send(`**UPDATE LOG 6/12/2019**
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Advanced Ping Command
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Advanced Kick & Ban Command
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Advanced >whois and >userinfo Command
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
                    .then(msg => msg.delete(10000));
            }
            break;

        case 'version':
            if (message.content.startsWith(PREFIX + 'version')) {
                message.react("👍")
                message.channel.sendMessage('Version ' + version);
            }
            break;

        case 'clear':
            if (message.content.startsWith(PREFIX + 'clear')) {
                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permissions.');
                let messagecount = parseInt(args.join(' '));
                message.channel.fetchMessages({
                    limit: messagecount
                }).then(messages => message.channel.bulkDelete(messages));
            }
            break;

        case 'botinfo':
            if (message.content.startsWith(PREFIX + 'botinfo')) {
                let author = message.author.username;
                let boticon = bot.user.displayAvatarURL;
                let botembed = new Discord.RichEmbed()

                    .setTitle("**Bot Information**")
                    .setDescription("Made by press DOKU PIRATES#6506 DM me to say thank you ;)")
                    .addField("Bot Name", bot.user.username)
                    .addField("Info", bot.user.createdAt)
                    .addField('Version', version)
                    .addField('Servers', bot.guilds.size)
                    .addField('Server List!', bot.guilds.map(g => g.name))
                    .setColor(0xffbf43)
                    .setThumbnail(boticon)
                    .setAuthor(author)
                    .setTimestamp()

                message.channel.send(botembed)
            }

            break;

        case 'help':
            if (message.content.startsWith(PREFIX + 'help')) {
                var commandicon = message.guild.iconURL;
                var vversion = ('Shows the current version of the bot.')
                var pping = ('Fun command (WIP)')
                var uuserinfo = ('Shows the user information.')
                var bbotinfo = ('Shows the bot information.')
                var kkick = ('Kick a user.')
                var bban = ('Ban a user.')
                var hhhelp = ('Shows this gui.')
                var cclear = ('Purge or clear an channel!')
                var rrreboot = ('Sorry, Only the bot owner can only run this command.')
                var wwwhois = ('Its a bit similar as `>userinfo` But you need to Specify a Person to Run This Command.')
                var ask = ('Ask me any Question that can only answered by `YES/NO`')
                var rrrps = ('The `rock`, `paper`, and `scissors` command is now here!')
                var rreport = ('You can now report anyone using this command!')
                var uupdates = ('Weekly Updates Can Be Found Here!')
                var command = new Discord.RichEmbed()

                    .setTitle("**List of Commands** ```With Description```")
                    .addField(">updates", uupdates)
                    .addField(">rps", rrrps)
                    .addField(">whois", wwwhois)
                    .addField(">ask", ask)
                    .addField(">version", vversion)
                    .addField(">ping", pping)
                    .addField(">userinfo", uuserinfo)
                    .addField(">botinfo", bbotinfo)
                    .addField(">report", rreport)
                    .addField(">kick", kkick)
                    .addField(">ban", bban)
                    .addField(">help/cmds", hhhelp)
                    .addField(">clear [choose number between 1-100]", cclear)
                    .addField(">reboot", rrreboot)
                    .setColor(0x00e5b8)
                    .setThumbnail(commandicon)

                message.channel.send(command)
            }

            break;
        case 'cmds':
            if (message.content.startsWith(PREFIX + 'cmds')) {
                var ccommandicon = message.guild.iconURL;
                var vvversion = ('Shows the current version of the bot.')
                var ppping = ('Fun command (WIP)')
                var uuuserinfo = ('Shows the user information.')
                var bbbotinfo = ('Shows the bot information.')
                var kkkick = ('Kick a user.')
                var bbban = ('Ban a user.')
                var hhhelp = ('Displays a list of available commands, or detailed information for a specified command.')
                var ccclear = ('Purge or clear an channel!')
                var rreboot = ('Sorry, Only the bot owner can only run this command.')
                var wwhois = ('Its a bit similar as `>userinfo` But you need to Specify a Person to Run This Command.')
                var aask = ('Ask me any Question that can only answered by `YES/NO`')
                var rrps = ('The `rock`, `paper`, and `scissors` command is now here!')
                var report = ('You can now report anyone using this command!')
                var uuupdates = ('Weekly Updates Can Be Found Here!')
                var command = new Discord.RichEmbed()
                    .setTitle("**List of Commands** ```With Description```")
                    .addField(">updates", uuupdates)
                    .addField(">rps", rrps)
                    .addField(">whois", wwhois)
                    .addField(">ask", aask)
                    .addField(">version", vvversion)
                    .addField(">ping", ppping)
                    .addField(">userinfo", uuuserinfo)
                    .addField(">botinfo", bbbotinfo)
                    .addField(">report", report)
                    .addField(">kick", kkkick)
                    .addField(">ban", bbban)
                    .addField(">help/cmds", hhhelp)
                    .addField(">clear [choose number between 1-100]", ccclear)
                    .addField(">reboot", rreboot)
                    .setColor(0x00e5b8)
                    .setThumbnail(ccommandicon)

                message.channel.send(command)
            }

            break;

        case 'ssu':
            if (message.content.startsWith(PREFIX + 'ssu')) {
                if (!message.member.roles.find(r => r.name === "Event Starter")) return message.reply('**You must have `Event Starter` Role to access this command.**')
                    .then(msg => msg.delete(5000));

                message.channel.sendMessage('**@everyone An training has been Hosted Check `#movement-orders`**')
            }

            break;
        case 'whois':
            if (message.content.startsWith(PREFIX + 'whois')) {
                var user = message.mentions.users.first()
                var member = message.guild.member(user);

                if (member) {

                    const usericon = user.displayAvatarURL;

                    var embed = new Discord.RichEmbed()
                        .setTitle('User Information')
                        .addField('Player Name', user)
                        .addField('Current Server name', message.guild.name)
                        .addField('Bot Name', bot.user.username)
                        .setColor(0xB89F20)
                        .setImage(usericon)
                        .setFooter('Made by press DOKU PIRATES#6506 DM me to say thank you ;) XD')
                    message.channel.sendEmbed(embed)

                } else {
                    var uundefined = message.author.username;
                    var iinfoicon = message.author.avatarURL;
                    var embed = new Discord.RichEmbed()
                        .setTitle('User Information')
                        .addField('Player Name', uundefined)
                        .addField('Current Server name', message.guild.name)
                        .addField('Bot Name', bot.user.username)
                        .addField('Your Roles', message.member.roles.array().slice(1).join('\n'))
                        .setColor(0xB89F20)
                        .setImage(iinfoicon)
                        .setTimestamp()
                        .setFooter('Made by press DOKU PIRATES#6506 DM me to say thank you ;)')
                    message.channel.sendEmbed(embed)

                }
            }



            break;

        case 'serverinfo':
            if (message.content.startsWith(PREFIX + 'serverinfo')) {
                var serverthumbnail = message.guild.iconURL;
                var serverembed = new Discord.RichEmbed()
                    .setTitle('Server Information')
                    .addField('Server Name', message.guild.name)
                    .addField('Server Roles', `${message.guild.roles.size} Roles  \n Roles Name : ${message.guild.roles.array()}`, true)
                    .addField("Server Owner", message.guild.owner.user.tag, true)
                    .addField("Member Count", message.guild.memberCount)
                    .setColor(0xB89F20)
                    .setThumbnail(serverthumbnail)
                    .setFooter('Made by press DOKU PIRATES#6506 DM me to say thank you ;)')
                    .setTimestamp()
                message.channel.sendEmbed(serverembed)
            }

            break;
        case 'ask':
            message.react("✅")
            if (message.content.startsWith(PREFIX + 'ask')) {
                let question = message.content.split(/\s+/g).slice(1).join(" ");

                if (!question) {
                    return message.channel.send('You must provide a question! **Usage: >ask <question>**');

                }

                var answer = ['It is certain',
                    'It is decidedly so',
                    'Without a doubt',
                    'Yes, definitely',
                    'You may rely on it',
                    'As I see it, yes',
                    'Most likely',
                    'Outlook good',
                    'Yes',
                    'Signs point to yes',
                    'Reply hazy try again',
                    'Ask again later',
                    'Better not tell you now',
                    'Cannot predict now',
                    'Concentrate and ask again',
                    'Don\'t count on it',
                    'My reply is no',
                    'My sources say no',
                    'Stop asking gay questions',
                    'Outlook not so good',
                    'No?',
                    'Very doubtful'];
                const ballEmbed = new Discord.RichEmbed()
                    .setAuthor(question)
                    .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
                    .setColor(0x646770);
                message.channel.send(ballEmbed);

            }

            break;
        case 'rps':
            message.react("✅")
            let rock2 = ['Paper! You lose!', 'Scissors! You win!']
            let rock1 = Math.floor(Math.random() * rock2.length);

            let paper2 = ['Rock! You win!', 'Scissors! You lose!']
            let paper1 = Math.floor(Math.random() * paper2.length);

            let scissors2 = ['Rock! You lose!', 'Paper! You win!']
            let scissors1 = Math.floor(Math.random() * scissors2.length);

            let rock = new Discord.RichEmbed()
                .setAuthor('Rock, Paper, Scissors')
                .setColor(0x6B5858)
                .addField('You choose', `${args[0]}`)
                .addField('I choose', rock2[rock1])

            let paper = new Discord.RichEmbed()
                .setAuthor('Rock, Paper, Scissors')
                .setColor(0x6B5858)
                .addField('You choose', `${args[0]}`)
                .addField('I choose', paper2[paper1])

            let scissors = new Discord.RichEmbed()
                .setAuthor('Rock, Paper, Scissors')
                .setColor(0x6B5858)
                .addField('You choose', `${args[0]}`)
                .addField('I choose', scissors2[scissors1])

            if (message.content === '>rps rock') message.channel.send(rock)
            if (message.content === '>rps Rock') message.channel.send(rock)

            if (message.content === '>rps paper') message.channel.send(paper)
            if (message.content === '>rps Paper') message.channel.send(paper)

            if (message.content === '>rps scissors') message.channel.send(scissors)
            if (message.content === '>rps Scissors') message.channel.send(scissors)


            if (message.content === '>rps') message.channel.send('Options: ``Rock``, ``Paper``, ``Scissors``. **Usage: >rps <option>**')

            break;
        case 'kick':
            message.react("✅")
            if (message.content.startsWith(PREFIX + 'kick')) {
                let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!kUser) return message.channel.send("**Usage: >kick <playername> <reason>**")
                    .then(msg => msg.delete(5000));
                let kReason = args.join(" ").slice(22);
                if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have Permissions.")
                    .then(msg => msg.delete(5000));
                if (kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!")
                    .then(msg => msg.delete(5000));

                let kickEmbed = new Discord.RichEmbed()
                    .setDescription("~Kick~")
                    .setColor("#e56b00")
                    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
                    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
                    .addField("Kicked In", message.channel)
                    .addField("Time", message.createdAt)
                    .addField("Reason", kReason);

                let kickChannel = message.guild.channels.find(`name`, "logs");
                if (!kickChannel) return message.channel.send("Can't find logs channel. (Please make one if you dont have this channel in your discord)")
                    .then(msg => msg.delete(5000));

                message.guild.member(kUser).kick(kReason);
                message.delete().catch(O_o => { });
                kickChannel.send(kickEmbed);
                if (message.content === '>kick') message.channel.send('**Usage: >kick <playername> <reason>**')

            }
            break;

        case 'ban':
            message.react("✅")
            if (message.content.startsWith(PREFIX + 'ban')) {
                let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!bUser) return message.channel.send("**Usage: >ban <playername> <reason>**")
                    .then(msg => msg.delete(5000));
                let bReason = args.join(" ").slice(22);
                if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have Permissions.")
                    .then(msg => msg.delete(5000));
                if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be banned!")
                    .then(msg => msg.delete(5000));

                let banEmbed = new Discord.RichEmbed()
                    .setDescription("~Ban~")
                    .setColor("#bc0000")
                    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
                    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
                    .addField("Banned In", message.channel)
                    .addField("Time", message.createdAt)
                    .addField("Reason", bReason);

                let incidentchannel = message.guild.channels.find(`name`, "logs");
                if (!incidentchannel) return message.channel.send("Can't find logs channel. (Please make one if you dont have this channel in your discord)")
                    .then(msg => msg.delete(7000));

                message.guild.member(bUser).ban(bReason);
                message.delete().catch(O_o => { });
                incidentchannel.send(banEmbed);
                if (message.content === '>ban') message.channel.send('**Usage: >ban <playername> <reason>**')
            }



            break;
        case 'report':
            message.react("✅")
            if (message.content.startsWith(PREFIX + 'report')) {
                let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!rUser) return message.channel.send("**Usage: >report <playername> <reason>**");
                let rreason = args.join(" ").slice(22);

                let reportEmbed = new Discord.RichEmbed()
                    .setDescription("Reports")
                    .setColor("#15f153")
                    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
                    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
                    .addField("Channel", message.channel)
                    .addField("Time", message.createdAt)
                    .addField("Reason", rreason);

                let reportschannel = message.guild.channels.find(`name`, "logs");
                if (!reportschannel) return message.channel.send("Couldn't find logs channel.");


                message.delete().catch(O_o => { });
                reportschannel.send(reportEmbed);
                if (message.content === '>report') message.channel.send('**Usage: >report <playername> <reason>**')
            }

            break;

        case 'warn':

            let wreason = args.splice(1, args.length).join(' ');
            let wuser = message.mentions.users.first();
            let modlog = message.guild.channels.find('name', 'logs');
            if (!modlog) return message.reply('I cannot find a `logs` channel');
            if (wreason.length < 1) return message.reply('You must supply a reason for the warning.');
            if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
            const wembed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .setTimestamp()
                .addField('Action:', 'Warning')
                .addField('User:', `${wuser.username}#${wuser.discriminator}`)
                .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
                .addField('Reason:', wreason)
            modlog.sendEmbed(wembed);


            break;

    }

    bot.on(`message`, async message => {
        if (message.content.startsWith(PREFIX + 'reboot')) {
            if (message.author.id === "423734025480306698") {
                message.channel.send(":gear: Reload in process")

                bot.destroy()
                bot.login(token)
                message.channel.send(":gear: Reload has been done")

            } else {

                message.channel.send("`Only the Owner of this bot can do that!`")

                message.delete().catch(O_o => { });


            }
        }
    });
});

bot.login(token);
