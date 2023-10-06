<h1 align="center">
<img src="docs/logo_image.png"  width="25%"><br>
Desafio de Proxy Reverso com Docker-Compose
</h1>

<p align="center">Este repositório contém uma solução para o desafio que visa aplicar os conceitos aprendidos sobre o uso do Nginx como proxy reverso. O objetivo central é permitir que, quando um usuário acessa o Nginx, este realiza uma chamada para a aplicação Node.js. 

## 📝 Descrição

Implementamos um ambiente usando Docker e Docker-Compose para criar uma aplicação web utilizando <b>Nginx</b> como proxy reverso, uma aplicação <b>Node.js</b> e um banco de dados <b>MySQL</b>. O objetivo é que, ao acessar o Nginx, este faça uma chamada para a aplicação Node.js, que, por sua vez, retorne os registro da tabela 'people' do banco de dados MySQL.</p>

Funcionalidades Implementadas:

- Configuração do Nginx como Proxy Reverso.
- Desenvolvimento de uma aplicação Node.js para interação com o Nginx.
- Integração com um banco de dados MySQL para armazenar dos nomes na tabela 'people'.
- Listagem de nomes cadastrados no banco de dados.

## ⚙️ Requisito para executar
- Docker
- Docker-Compose

## 💻 Instruções de Uso:

1. Clone este repositório:
```sh
docker-compose up -d
```

2. Execute o seguinte comando para iniciar os serviços:
```sh
docker-compose up -d
```

3. Após a execução bem-sucedida, a aplicação estará disponível na porta 8080.