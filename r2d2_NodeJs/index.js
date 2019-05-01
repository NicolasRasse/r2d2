const TelegramBot = require('bluebird');

const token = '892564806:AAFpp6qN2ozzZk-40pJp5wo8DgglyO6yEWA';//Cambiar por el token de telegram
const bot = new TelegramBot(token, {
  polling: true
});
var IdMiChat = 292687930;//cambiar por tu ID del chat

var SerialPort = require('serialport');
var MiPuerto = new SerialPort('COM3', {
  baudRate: 9600,
  autoOpen: true
});

//aca va el IF

bot.on('message', (msg) => {


 const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
    var pideping = msg.text;
  if (pideping == "1234"){

     if (Mensaje == "Encender") {
    console.log("encendiendo el led");
    bot.sendMessage(chatId, 'Encendere el led');
    MiPuerto.write("H");
    } else if (Mensaje == "Apagar") {
    console.log("apagar el led");
    bot.sendMessage(chatId, 'Apagare el led');
    MiPuerto.write("L");
  }
} else {
bot.sendMessage(chatId, 'Usted no posee permisos.');
};

MiPuerto.setEncoding('utf8');

MiPuerto.on('data', function(data) {
  console.log("Lo que entro es " + data);
  if (data[0] == 'H') {
    console.log("Boton Precionado");
    bot.sendMessage(IdMiChat, "Se preciono el boton");
  }

});
