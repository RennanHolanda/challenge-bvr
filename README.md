<h1 align="center"> Desafio BVR - Bruno Rennan </h1>

<p align="center">
Projeto Full Stack
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodar">Rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="Challenge" src=".github/capa.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- Node.js
- JavaScript
- React
- Sequelize
- Mysql
- HTML
- CSS
- Git e Github

## 💻 Projeto

O projeto doi desenvolvido com Nodejs e React, com consumo de APIs ultilizando Axios.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link https://github.com/bvrnegociosconsultoria/teste_bruno_rennan

## 🔖 Rodar 

para rodar o projeto basta seguir os seguintes comandos

- npm init -y (atentar para nos diretorios do terminal do backend e frontend para baixar as dependêscias)

.obs projeto executado com variáveis de ambientes

- Criar e Preencher o arquivo .env na pasta backend (seguir o modelo do arquivo .env.example)

DB_USER=root //ou nome do usuário do banco de dados

DB_PASS= //Inserir a senha do banco de dados, caso não tenha, deixar somente o sinal de igual após a variável de ambiente criada

DBN_NAME=databaseName //Inserir o nome do banco de dados (caso não exista, o sequelize irá criar)

DB_HOST=localhost //Ou ip do servido

DB_DIALECT=mysql //Inserir o dialeto do banco de dados: mysql, pg, oracle, etc..

DB_PORT=3306 //Inserir a porta do banco de dados, verificar no XAMPP a porta do mysql, que por padrão vem com 3306

-para dropar o banco de dados execute o comando:
npx sequelize db:create

para rodar o projeto backend execute o comando : npm run server
para rodar o projeto frontend execute o comando : npm start ou nodemon index.js
 