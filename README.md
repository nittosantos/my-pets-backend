# My Pets - Backend 🐶🐾

## 📌 Sobre o projeto
O **My Pets** é uma API desenvolvida em **NestJS** com **Prisma ORM** e **PostgreSQL**, permitindo o gerenciamento de pets, consultas veterinárias e tarefas. 🚀

---

## 🚀 Como rodar o projeto localmente

### **1️⃣ Clonar o repositório**
```sh
git clone https://github.com/nittosantos/my-pets-backend.git
cd my-pets-backend
```

### **2️⃣ Instalar as dependências**
```sh
npm install
```

### **3️⃣ Configurar as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco de dados. Se estiver rodando via **Docker**, use:
```env
DATABASE_URL="postgresql://admin:adminpassword@postgres:5432/pet_management"
JWT_SECRET="sua-chave-secreta"
```
Caso esteja rodando um banco **PostgreSQL local**, substitua `postgres` por `localhost`:
```env
DATABASE_URL="postgresql://admin:adminpassword@localhost:5432/pet_management"
```

### **4️⃣ Rodar o banco de dados com Docker** *(opcional)*
Se quiser rodar o banco de dados via Docker, basta executar:
```sh
docker-compose up -d
```
Isso criará um container PostgreSQL configurado automaticamente.

### **5️⃣ Rodar as migrations do Prisma**
```sh
npx prisma migrate dev --name init
```

### **6️⃣ Iniciar o servidor**
```sh
npm run start:dev
```
A API estará rodando em **http://localhost:3000** 🚀

---

## 📚 Rotas da API

### **🔑 Autenticação**
- `POST /auth/login` → Realiza login e retorna um **token JWT**.

### **👤 Usuários**
- `POST /users` → Cria um novo usuário.
- `GET /users/:id` → Retorna um usuário pelo ID.

### **🐾 Pets**
- `POST /pets` → Cadastra um pet.
- `GET /pets` → Lista todos os pets do usuário.
- `DELETE /pets/:id` → Remove um pet.

### **🏥 Consultas Veterinárias**
- `POST /appointments` → Agenda uma nova consulta.
- `GET /appointments/:petId` → Lista todas as consultas de um pet.
- `PATCH /appointments/:id` → Atualiza uma consulta.
- `DELETE /appointments/:id` → Exclui uma consulta.

> **⚠ Importante:** Todas as rotas protegidas exigem um token JWT. Envie no header:
> ```
> Authorization: Bearer SEU_TOKEN_AQUI
> ```

---

## 🔥 Testando a API
📌 Você pode testar as rotas usando **[Insomnia](https://insomnia.rest/) ou Postman**.

📌 Para visualizar os dados no banco de dados, use **Prisma Studio**:
```sh
npx prisma studio
```

---

## 📌 Contribuições
Sinta-se à vontade para abrir **issues** e enviar **pull requests** para melhorias. 🚀

---

## 🛠 Tecnologias utilizadas
✅ **NestJS** - Framework para Node.js.
✅ **Prisma ORM** - Gerenciamento do banco de dados.
✅ **PostgreSQL** - Banco de dados.
✅ **Docker** - Para rodar o banco localmente.
✅ **JWT** - Autenticação segura.

---

## 📜 Licença
Este projeto está licenciado sob a Apache 2.0. O uso comercial requer permissão expressa do autor.


