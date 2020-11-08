[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br>
<p align="center">
  <a href="https://github.com/brtec">
    <img src="https://cdn.discordapp.com/attachments/761310924292096000/774807309875675177/logonode.png" alt="BRTec Logo" width="100" height="69">
  </a>
  
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

[![Exemplo Terminal][exemplo-screenshot]]()
<br>

1. Crie um diretório para o Projeto e entre nele
```sh
mkdir nomedodiretorio
cd nomedodiretorio
```

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

4. Autorize seu BOT no canal do Discord que desejar e execute o script
```sh
node index.js
```

[contributors-shield]: https://img.shields.io/github/contributors/brtec/node-discord-bot.svg?style=flat-square
[contributors-url]: https://github.com/brtec/node-discord-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brtec/node-discord-bot.svg?style=flat-square
[forks-url]: https://github.com/brtec/node-discord-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/brtec/node-discord-bot.svg?style=flat-square
[stars-url]: https://github.com/brtec/node-discord-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/brtec/node-discord-bot.svg?style=flat-square
[issues-url]: https://github.com/brtec/node-discord-bot/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bruno-rezende-67720663/
[product-screenshot]: https://cdn.discordapp.com/attachments/761310924292096000/774772451526574120/unknown.png
[exemplo-screenshot]: https://cdn.discordapp.com/attachments/761310924292096000/774819872604553277/unknown.png