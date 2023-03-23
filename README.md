# :partying_face: Escolas de Samba :confetti_ball:

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
docker exec -it escolas_de_samba bash
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

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Renomeie o arquivo '.env.example' para '.env'
* Certifique-se que o MySQL está rodando com as configurações necessárias do arquivo '.env'
* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run debug
```

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://joanamds.github.io/#/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-joanamds/)
