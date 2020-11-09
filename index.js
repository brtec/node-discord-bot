//Biblioteca Discord
const Discord = require("discord.js");

//Arquivo de Configurações
const config = require("./src/config.json");

//Biblioteca de consulta de status do server
const Gamedig = require('gamedig');

//Biblioteca Mysql2
const mysql = require('mysql2');
 
//Cria Conexão com o Banco de Dados
const connection = mysql.createConnection({
  host: config.BD_HOST,
  user: config.BD_USER,
  database: config.BD_TABELA
});


//Biblioteca do BOT TELEGRAM
const TelegramBot = require( `node-telegram-bot-api` );

//Inicia a classe do BOT TELEGRAM
const bot = new TelegramBot( config.BOT_TOKEN_TELEGRAM, { polling: true } );

//Inicia a classe do BOT DISCORD
const client = new Discord.Client();

//Prefiro de Comandos
const prefix = "!";

//Leitura das mensagens e comandos e tratamento
client.on("message", function(message) {
	
	//Checa permissões ADMIN	
	let adminrole = message.member.roles.cache.has(config.DISCORD_ROLE_ADMIN);
	if(adminrole != false){memberIsAdmin = true;}else{memberIsAdmin = false;}
	
	//Checa permissões APROVADORWL
	let permissaoaprovador = message.member.roles.cache.has(config.DISCORD_ROLE_WL);
	if(permissaoaprovador != false){memberIsAprovador = true;}else{memberIsAprovador = false;}
	
	//Checa permissões DEV
	let permissaodev = message.member.roles.cache.has(config.DISCORD_ROLE_DEV);
	if(permissaodev != false){memberIsDev = true;}else{memberIsDev = false;}
	
	
	//Se a mensagem for redigida por bot, mata o script aqui
    if (message.author.bot) return;
	//Se a mensagem não possuir o prefixo de comando, mata o script aqui
	if (!message.content.startsWith(prefix)) return;
	
	//Tratamento da mensagem de comando e argumentos
	const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
	
	//Envia log de execução via Telegram
	bot.sendMessage(config.TELEGRAM_ID_NOTIFICACAO, command +"\nEnviado por:"+ message.author.username);
	
	//Comando de Apresentação
	if (command === "apresentacao") {
		//Responde o comando de Apresentação
        message.reply(`Olá ${message.author.username}, tudo bem ? Meu nome é Agente Smith, faço parte da equipe The Matrix, ainda estou em desenvolvimento, se tiver alguma sugestão pra mim, fale com o [DEV] Bruno :).`);                   
		
	};
	
	//Comando de Teste com Argumentos
	if (command === "elequeima") {
		//Primeiro Argumento
		let nome = args[0];
		if(memberIsDev == true){
			message.reply(`Siiim, o ${nome} queeeeeeeima !`);
		}else{
			message.reply(`Acho que quem queima é você ${message.author.username} !`);
		}
    };
	
	//Comando Whitelist
	if (command === "autorizawl") {
		//Argumento ID do usuario
		let id = args[0];
		
		//Checa Permissões
		if(memberIsAprovador == true){			
			//Autoriza Whitelist
			connection.query(
			  'UPDATE vrp_users SET whitelisted = 1 WHERE `id` = ' + id + '',
			  function(err, results, fields) {
				//Caso não haja erros retorna mensagem de sucesso, e a de erro caso haja
				if (!err){
					if(results.changedRows == 0){
						message.reply(`O Player com ID ${id} já está na Whitelist !`);
						message.delete({ timeout: 4000 });
					}else{
						message.reply(`O Player com ID ${id} foi autorizado na Whitelist !`);
						message.delete({ timeout: 4000 });
					}
					
					console.log(results);
				}else{
					message.reply(`Ocorreu um erro ao adicionar na whitelhist !`);
					console.log(err);
				}
				
			  }
			);
		}else{
			message.reply(`Você não tem autorização para isso ${message.author.username} !`);
		}        
    }  
	
	//Comando RemoveWhitelist
	if (command === "desautorizawl") {
		//Argumento ID do usuario
		let id = args[0];
		
		//Checa Permissões
		if(memberIsAprovador == true || memberIsAdmin == true){			
			//Autoriza Whitelist
			connection.query(
			  'UPDATE vrp_users SET whitelisted = 0 WHERE `id` = ' + id + '',
			  function(err, results, fields) {
				//Caso não haja erros retorna mensagem de sucesso, e a de erro caso haja
				if (!err){
					if(results.changedRows == 0){
						message.reply(`O Player com ID ${id} não está na Whitelist !`);
						message.delete({ timeout: 4000 });
					}else{
						message.reply(`O Player com ID ${id} foi removido da Whitelist !`);
						message.delete({ timeout: 4000 });
					}
					
					console.log(results);
				}else{
					message.reply(`Ocorreu um erro ao remover da whitelhist !`);
					console.log(err);
				}
				
			  }
			);
		}else{
			message.reply(`Você não tem autorização para isso ${message.author.username} !`);
		}        
    }  
	
	//Comando Status
	if (command === "status") {
		//Biblioteca gamedig para obter dados do servidor fivem
		Gamedig.query({
			type: 'fivem',
			host: config.HOST_FIVEM,
			port: config.PORT_FIVEM 
		}).then((state) => {
			console.log(state);
			message.reply(`**THE MATRIX está ONLINE** \n Conecte-se usando o comando: connect cfx.re/join/rgpxpg !`);
			
		}).catch((error) => {
			console.log("Server is offline");
			message.reply(`**THE MATRIX está OFFLINE** \n Mil desculpas.`);
		});
    }
});

//Tratamento dos Comandos do Telegram
bot.on("text", (message) => {
	//console.log(message.chat.id); //Uma ajudinha pra achar o chat id :)
	//Se a mensagem não possuir o prefixo de comando, mata o script aqui
	if (!message.text.startsWith(prefix)) return;
	
	//Tratamentos do comando e argumentos
	const commandBody = message.text.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
	
	//Comando de Falar
	if (command === "falar") {
		//Monta o texto a ser enviado
		let mensagem = "";
		args.forEach(element => { 
		  mensagem += element +' '; 
		});
		
		//Envia o texto para o canal pré configurado
		client.channels.cache.get(config.BOT_CANAL_FALA).send(mensagem);		
	};
});        

//Login do Bot usando o Token fornecido na config
client.login(config.BOT_TOKEN);