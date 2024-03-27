<h1 align="center"> Desafio Fullstack - Capputeeno </h1>

Nesse repositório contém a implementação de um sistema de E-commerce projetado para venda de produtos digitais. A aplicação possui várias funcionalidades, incluindo busca, filtro, paginação em um catálogo de produtos e gerenciamento do carrinho de compras.

## 🔧 Rodando localmente

1. Clone o projeto:

```bash
  git clone https://github.com/EduardoNGomes/cursaedu-back
```

2. Entre no diretório do projeto e instale as dependências:

```bash
  npm i
```

3. Inicie o arquivo docker compose:

```bash
  npm docker compose up -d
```

4. Crie o banco usando as migrations do prisma:

```bash
  npm prisma migrate dev
```

5. Execute o seed para popular o banco:

```bash
  npm prisma db seed
```

6. Inicie o servidor

```bash
  npm run start:dev
```

## 📋 Funcionalidades

- O usuário poderá navegar por um catálogo de produtos com paginação;
- O usuário poderá visualizar uma página de descrição do produto;
- O usuário poderá filtrar os produtos por categoria;
- O usuário poderá buscar pelo nome de um produto;
- O usuário poderá adicionar um produto no carrinho;
- O usuário poderá remover um produto do carrinho;
- O usuário poderá finalizar a compra e ter o seu carrinho zerado.

## 🛠️ Tecnologias usadas no back-end:

- [NestJS](https://nestjs.com/) - framework Node.js para construção de aplicativos eficientes e escaláveis;
- [Prisma](https://www.prisma.io/) - ORM para facilitar o acesso e manipulação do banco de dados MySQL

##
