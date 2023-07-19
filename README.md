<h3 align="center" style="font-size: 30px; font-weight: bold; margin-bottom: 32px">
  Desafio-Tecnico-Verzel
</h3>


---

# :bookmark_tabs: Índice

  - [:clipboard: Sobre](#clipboard-Sobre)
  - [:computer: Tecnologias](#computer-Tecnologias)
  - [:bookmark_tabs: Requisitos](#bookmark_tabs-Requisitos)
  - [:file_folder: Como instalar](#file_folder-Como-instalar-e-usar)
  - [:alien: Autor](#alien-Autor)


---

## :clipboard: Sobre

Este foi um projeto desenvolvido com o intuito de demonstrar minhas habilidades em desenvolvimento web. É um site criado com ReactJS no front-end e Java com o framework Spring Boot no back-end, inspirado no site KAVAK. Foi dado foco à implementação correta das funcionalidades solicitadas, à interface atraente e à segurança da aplicação.

---
## :computer: Tecnologias
* [ReactJS](https://react.dev/)
* [Java](https://www.java.com/pt-BR/)
* [SpringBoot](https://spring.io/projects/spring-boot)
* [MySQL](https://www.mysql.com/)

---
## :package: Dependências
* [Axios](https://mozilla.github.io/nunjucks/)

---

## :bookmark_tabs: Requisitos
Para executar este projeto, você precisa do [Git](https://git-scm.com/).
É recomendável usar um editor de código como [VsCode](https://code.visualstudio.com/), alguma IDE para o java como o [Eclipse](https://www.eclipse.org/downloads/) e o [MySql](https://dev.mysql.com/downloads/mysql/) server para o banco de dados.

---

## :file_folder: Como Instalar e usar
* Primeiro clone o repositório com o comando abaixo:
```bash
    # Usando o Git bash, clone o repositório
    $ git clone https://github.com/GuiFerreira01/Desafio-Tecnico-Verzel.git
```

* Depois disso, entre na pasta principal do projeto.

```bash
    # Alterando o diretório no terminal/CMD
    $ cd Desafio-Tecnico-Verzel
```
* Em seguida, entre na pasta front-end.

```bash
    # Alterando o diretório no terminal/CMD
    $ cd front-end
```

* Em seguida, instale todas as dependências usando o comando `npm install`.

```bash
    # Instalando todas as dependências
    $ npm install
```

* No arquivo .env.exemple, esta o exemplo de como se deve criar o arquivo .env, com a variavel de ambiente.

```bash
    # Variavel de ambinete
    $ REACT_APP_API = 
```

* No terminal, use o comando `npm start` para permitir que o projeto seja executado.

```bash
    # Iniciando o projeto
    $ npm start
```

* Em seguida, abra seu navegador e digite a url: *localhost:3000*

```bash
    # O projeto será executado na porta:3000

```
---

* Agora vamos configurar o back-end

* Primeiro abra a sua ide na pasta 'back-end'

* Agora basta configurar o arquivo application.properties

```bash
    # spring.datasource.url=Url do banco de dados mysql (Ex: jdbc:mysql://localhost:3306/teste67)
    # spring.datasource.username= Username do mysql
    # spring.datasource.password= Senha do mysql
    # spring.jpa.hibernate.ddl-auto= ('update' para criar o banco de dados)
    # spring.jpa.show-sql= ('true' para mostrar a as intereções com o banco de dados no console)
      
    # server.port = (Porta onde a aplicação ira rodar recomendo q seja 8080)

```
* Caso escolha uma porta diferente da 8080 vc deve alterar isto no front-end 

```bash
    #/src/utils/api.js 
    baseURL: 'http://localhost:8080/'
```
---

## :alien: Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/88511664?v=4" width="100px;" alt=""/>
 <br />
 <sub><b style="font-size: 22px">Guilherme S. Ferreira</b></sub>

Feito com ❤️ por **Guilherme S. Ferreira**

[![Linkedin Badge](https://img.shields.io/badge/-Guilherme-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guilherme--ferreira/)](https://www.linkedin.com/in/guilherme--ferreira/)
[![Gmail Badge](https://img.shields.io/badge/-guilherme04ferreira03@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:guilherme04ferreira03@gmail.com)](mailto:guilherme-ferreira1953@hotmail.com)
---

