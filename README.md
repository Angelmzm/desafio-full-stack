# Desafio-full-stack
>
Criação de um cadastro de clientes que poderá conter muitos contatos associados. Depois deste processo deverá ter um relatório em tela, que mostre dados do cliente e os contatos vinculados a este cliente: 
>


## Passos para execução em ambiente de desenvolvimento:
Back-end
>
1- Instalar as dependencias do back-end
```
yarn install
```
>
2- Configurar o dotenv:
>
criar uma pasta chamada .env igual a pasta .env.examplo e preencher as informações
>
3- Rodar as migrações:
```
yarn typeorm migration:run -d src/data-source.ts
```
4- Colocar o servidor para rodar:
```
yarn dev
``` 
>
Front-end
>
 1- Abrir um novo terminal, enquanto o outro esta aberto e rodando o back
>
2- 
```
cd react-node 
```
>
3- Instalar as dependencias do front-end
```
yarn install
```
>
4- Colocar o servidor para rodar:
```
yarn start
``` 
