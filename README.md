# :partying_face: Escolas de Samba

O Carnaval já acabou no ano de 2023 mas que tal ver os nomes e informações das escolas de samba do Rio de Janeiro (Grupo Especial e Série Ouro) e também 
das escolas de samba de São Paulo(Grupo Especial e Grupo de Acesso 1)? 
Aqui está uma API que junta as informações de todas essas escolas incluindo: Nome, fundação, cidade e grupo de cada uma. 

## Endpoints (todas as rotas são GET)
* ```/escolas```: é possível renderizar todas as escolas de samba de São Paulo e Rio de Janeiro que estão no banco de dados.
* ```/escolas/search?q={termo-da-pesquisa}```: já parou para pensar quantas escolas tem Unidos no nome? E que tal acadêmicos? Pesquisando dessa forma você poderá ver todas as escolas que tem este termo e quantos resultados são retornados!
* ```/escolas/sp```: aqui você vê todas as escolas de samba de São Paulo! 
* ```/escolas/sp/:id```: nessa rota é possível você renderizar uma escola de SP através do id
* ```/escolas/sp/search?q={termo-da-pesquisa}```: aqui você pesquisa só as escolas de São Paulo
* ```/escolas/rj```: aqui você vê todas as escolas de samba do Rio de Janeiro! 
* ```/escolas/rj/:id```: nessa rota é possível você renderizar uma escola de RJ através do id
* ```/escolas/rj/search?q={termo-da-pesquisa}```: aqui você pesquisa só as escolas do Rio de Janeiro

<div align="center">
<img src="https://user-images.githubusercontent.com/106452876/220921797-debafa23-149e-4029-b757-3f4e38d85b67.gif" alt="gif carnaval" width="300"/>
</div>

## Tecnologias usadas
Back-end:
> Desenvolvido usando: Docker, docker-compose, SQL, Node.js, Mocha

## Instalando Dependências
### Com Docker
> Backend

* Primeiro instale os containers: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it talker_manager bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
``` 

> Para rodar a API 

* Rode o seguinte comando dentro do container: 
```bash
npm run debug
```

> Testes

* Dentro do terminal do container:
```bash
npm test
``` 
* Para rodar os testes unitários: 
```bash
npm run test:mocha
```

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Renomeie o arquivo '.env.example' para '.env'

* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run debug
```

> Testes

* Rode o comando:
```bash
npm test
``` 

* Para rodar os testes unitários:
```bash
npm run test:mocha
```
