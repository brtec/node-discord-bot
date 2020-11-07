
<!-- PROJECT LOGO -->

<p align="center">
  

  <h3 align="center">NodeJS - DiscordBot</h3>

  <p align="center">
    DiscordBot para integração com servidores FiveM e banco de dados Mysql
    <br />
  </p>
</p>

[![Product Name Screen Shot][product-screenshot]]()

<!-- GETTING STARTED -->
## Instalação

A instalação é fácil, siga os passos abaixo :)

### Requisitos
```sh
* npm
```

### Instalação

1. Clone o Repositório
```sh
git clone https://github.com/brtec/node-discord-bot.git
```

2. Instale os pacotes NPM
```sh
npm install
```

3. Insira suas configurações em ./src/config.json 
```sh
{
    "BOT_TOKEN": "TOKEN DISCORD BOT",
	"BD_HOST": "HOST MYSQL",
	"BD_USER": "USER MYSQL",
	"BD_SENHA": "SENHA MYSQL",
	"BD_TABELA": "BANCO MYSQL",
	"HOST_FIVEM": "IP DO SERVIDOR FIVEM",
	"PORT_FIVEM": "PORTA DO SERVIDOR FIVEM"
	
}
```

4. Execute o script
```sh
node index.js
```

[product-screenshot]: https://cdn.discordapp.com/attachments/761310924292096000/774772451526574120/unknown.png