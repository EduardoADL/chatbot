// chama gerador de qrcode
const qrcode = require('qrcode-terminal');
//chama lib de criação do chatbot
const { Client } = require('whatsapp-web.js');

const client = new Client();

//gera o qr code para acessar o whatsapp
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {
    console.log('Whatsapp conectado');
});

client.initialize();

var nome = "xvx99*";

client.on('message', message => {
        if (message.body === 'Olá, gostaria de ver os planos') {
            client.sendMessage(message.from, 'Olá, sou Rogerio assistente virtual da Letsinove, antes de começarmos, qual seu nome?');
        }
        console.log('fora das condições: ', message.body)
        if (message.body !== null && message.body !== '' && message.body !== 'Olá, gostaria de ver os planos' && nome === 'xvx99*') {
            console.log('dentro do segundo if', message.body)
            nome = message.body;
            console.log(nome);
            client.sendMessage(message.from, 'Olá ' + nome + ' escolha uma opção.')
            client.sendMessage(message.from, '1. Agendar um horario \n2.saber de preços \n3.Falar com um atendente')
        }
        if ( message.body !== '' && message.body === null && message.body === '1') {
            client.sendMessage(message.from, 'Digite um horario entre 8:00 e 18:00')
        }

})


