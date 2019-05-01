const TelegramBot = require('node-telegram-bot-api');

const token = '892564806:AAFpp6qN2ozzZk-40pJp5wo8DgglyO6yEWA';

const bot = new TelegramBot(token, {polling: true});

var IdMiChat = 292687930;

var SerialPort = require('serialport');
var MiPuerto = new SerialPort('COM3',
{baudRate: 9600,
 autoOpen: true
});


bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        console.log("El ID del chat" + chatId);
        var Mensaje = msg.text;
        if (Mensaje == "encender"){
          console.log("encendiendo el Led");
          bot.sendMessage(chatId, 'Encendiendo La Luz Del Patio');
          MiPuerto.write("H");
        }
        else if (Mensaje == "apagar") {
          console.log("apagar el Led");
          bot.sendMessage(chatId, 'Apagando La Luz Del Patio');
          MiPuerto.wirte("L");
        }
      });

  MiPuerto.setEncoding('utf8');

  MiPuerto.on('data', function('data') {
    console.log("Lo que entro es " + data);
    if (data[0] == 'H') {
      console.log("Boton Precionado");
      bot.sendMessage(IdMiChat, "Se presiono el boton");
    }
  });
