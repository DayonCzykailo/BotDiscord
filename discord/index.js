const Discord = require('discord.js');//https://discord.com/oauth2/authorize?client_id=1014702601264173076&scope=bot&permissions=8

const cliente = new Discord.Client();

const TOKEN = 'MTAxNDcwMjYwMTI2NDE3MzA3Ng.GPSJuY.a_777BGv_gI9b-mSpJejSJ_zQgi_Uqfp8TCb8U';

cliente.on("ready", () => {
    console.log('on-line');
});

cliente.on('message', (msg) => {
    if(msg.content === 'ola'){
        msg.reply('locura locura locura !!!');
    }else{
        msg.channel.send("soi bobo, bum sei responder outras mensagens");
    }

});

cliente.login(TOKEN);