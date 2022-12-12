const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const { token } = require('./config.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client({
    readyStatus: false,
  });
const { CustomStatus } = require('discord.js-selfbot-rpc');
const consolecolor = require('gradient-string')
const { status, state, emojistatus, vocal, guild, casque} = require('./config.json');
client.on('ready', async () => {
  console.log(consolecolor("#0330fc", "#0398fc")(`
  AFK Vocal By Betaa#0212  
  `))
  console.log(consolecolor("#0330fc", "#0398fc", "#0330fc", "#0398fc", "#0330fc")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
  console.log(consolecolor("#0330fc", "#0398fc")(`
                                  [+] Nom du compte: ${client.user.username}
                                  `))
                                  console.log(consolecolor("#0330fc", "#0398fc", "#0330fc", "#0398fc", "#0330fc")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
         
                                
 const r = new CustomStatus()
       .setStatus(status) // style de status: dnd, idle, online
      .setState(state)
       .setEmoji(emojistatus);
       client.user.setPresence(r.toData());

  console.log(`${client.user.username} est connecté dans le vocal !`);
  client.channels.fetch(vocal) 
    .then((channel) => { 
        const VoiceConnection = joinVoiceChannel({
            channelId: vocal, 
            guildId: guild, 
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: casque 
        });
        
    });
})


/////////////////////////////////////////////////// DEV BY BETA ////////////////////////////////////////////////

client.login(token);
