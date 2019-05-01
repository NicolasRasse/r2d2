const TelegramBot = require('node-telegram-bot-api');

const token = '892564806:AAFpp6qN2ozzZk-40pJp5wo8DgglyO6yEWA';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var Mensaje = msg.text;
  if (Mensaje == "encender"){
    console.log("encendiendo el Led");
  }
  else if (Mensaje == "apagar") {
    console.log("apagar el Led");
  }
  bot.sendMessage(chatId, 'Received your message');
});
