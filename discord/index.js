const Discord = require('discord.js');//https://discord.com/oauth2/authorize?client_id=1014702601264173076&scope=bot&permissions=8

const cliente = new Discord.Client();

const TOKEN = "token";

cliente.on("ready", () => {
    console.log('on-line');
});

cliente.on('message', (msg) => {
    if (msg.content === 'join' && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
          const dispatcher =   connection.play(require("path").join(__dirname,'./risada.mp3'));

          //dispatcher.on('end',()=> {voiceChannel.leave()});
        });

    }

    console.log(msg.content);
});

cliente.login(TOKEN);