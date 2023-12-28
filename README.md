# CRUD de Usuários em NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

Este repositório contém um projeto NestJS para um sistema CRUD (Create, Read, Update, Delete) de usuários. O projeto utiliza TypeScript e segue as melhores práticas recomendadas pelo framework NestJS.

<details>
<summary><strong>Instalação</strong></summary>

```bash
$ npm install
```

</details>

<details>
<summary><strong>Rodando a aplicação</strong></summary>

```bash
# desenvolvimento
$ npm run start

# modo observação
$ npm run start:dev

# modo produção
$ npm run start:prod
```

</details>

<details>
<summary><strong>Documentação da API</strong></summary>

### Endpoints

- `POST /users` - Cria um novo usuário.
- `GET /users` - Lista todos os usuários.
- `GET /users/:email` - Busca um usuário pelo e-mail.
- `PATCH /users/:email` - Atualiza os dados de um usuário existente pelo e-mail.
- `DELETE /users/:email` - Remove um usuário pelo e-mail.

### DTOs

#### CreateUserDto

- `name` (string): Nome do usuário (mínimo 4 caracteres, máximo 20).
- `email` (string): E-mail válido do usuário.
- `password` (string): Senha do usuário (mínimo 6 caracteres).

#### UpdateUserDto

- Herda de `CreateUserDto`, todos os campos são opcionais para atualização.

</details>

<details>
<summary><strong>Exemplos de uso</strong></summary>

<details>
<summary><strong>Criar usuário</strong></summary>

```json
POST /users
Content-Type: application/json

{
    "name": "Nome do Usuário",
    "email": "email@exemplo.com",
    "password": "senha123"
}
```
</details>

<details>
<summary><strong>Listar todos os usuários</strong></summary>

```http
GET /users
```
</details>

<details>
<summary><strong>Buscar usuário por e-mail</strong></summary>

```http
GET /users/email@exemplo.com
```
</details>

<details>
<summary><strong>Atualizar usuário por e-mail</strong></summary>

```json
PATCH /users/email@exemplo.com
Content-Type: application/json

{
    "name": "Nome Atualizado",
    "email": "novoemail@exemplo.com",
    "password": "novaSenha123"
}
```
</details>

<details>
<summary><strong>Remover usuário por e-mail</strong></summary>

```http
DELETE /users/email@exemplo.com
```
</details>

</details>
