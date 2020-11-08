//Arquivo de Configurações
const config = require("./src/config.json");

//Biblioteca do BOT
const TelegramBot = require( `node-telegram-bot-api` );

//Inicia a classe do BOT
const bot = new TelegramBot( config.BOT_TOKEN, { polling: true } );

//Prefiro de Comandos
const prefix = "!";

//Mensagem de saudação para novos membros
bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao BRTec BOT!! Conte-nos um pouco sobre você, com o que trabalha e onde, se possivel é claro`)
})

//Tratamento dos Comandos
bot.on("text", (message) => {
	//Se a mensagem não possuir o prefixo de comando, mata o script aqui
	if (!message.text.startsWith(prefix)) return;
	
	//Tratamentos do comando e argumentos
	const commandBody = message.text.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
	
	//Comando de Apresentação
	if (command === "apresentacao") {
		//Responde o comando de Apresentação
		bot.sendMessage(message.chat.id, "Olá " + message.from.first_name + " tudo bem ? Faço parte da equipe BRTec, ainda estou em desenvolvimento, se tiver alguma sugestão pra mim, fale com o [DEV] Bruno :).");
	};
});