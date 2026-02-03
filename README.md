MERN Blog Application (Express API – JWT Auth – Sequelize)

This project is a MERN stack blog application backend, built with Node.js, Express, and Sequelize, designed to serve a React frontend.
It provides JWT-based authentication, user management, posts, and comments, exposed via a RESTful API.

⚠️ Note: While MERN traditionally uses MongoDB, this project intentionally uses MySQL via Sequelize for relational data modeling.

🧱 MERN Stack Overview
Layer	Technology
Frontend	React (not included in this repository)
Backend	Node.js + Express
Database	MySQL (via Sequelize ORM)
Auth	JWT (jsonwebtoken)
Password Security	bcrypt
📂 Project Structure
.
├── config/
│   └── config.json
├── middlewares/
│   └── AuthenticateMiddleware.js
├── models/
│   ├── index.js
│   ├── Users.js
│   ├── Posts.js
│   └── Comments.js
├── routes/
│   ├── Users.js
│   ├── Posts.js
│   └── Comments.js
├── app.js / index.js
└── package.json

⚙️ Environment & Configuration
Database Configuration (config/config.json)
{
  "development": {
    "username": "root",
    "password": "YOUR_PASSWORD",
    "database": "expressdb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


⚠️ Security Warning

Do not commit real database credentials

Move DB config and JWT secrets into .env for production

🗄️ Data Models (Relational)
🧑 Users
Field	Type
username	STRING
password	STRING (hashed)
📝 Posts
Field	Type
title	STRING
postText	STRING
username	STRING

Associations

A Post has many Comments

Cascade delete enabled

💬 Comments
Field	Type
commentBody	STRING
username	STRING
PostId	INTEGER (FK)
🔐 Authentication Flow (JWT)

User logs in via /users/login

Backend returns a signed JWT

React frontend stores token (localStorage / memory)

Protected routes send token via request header:

token: <JWT>


Middleware verifies token and attaches user to req.user

🧩 Middleware
validateToken

Extracts token from request header

Verifies JWT signature

Adds decoded payload to request object

req.user = { id, username }

🚏 REST API Endpoints
👤 Users (/users)
POST /users/signup

Create a new account.

POST /users/login

Authenticate user and receive JWT.

GET /users/register

🔒 Protected
Returns authenticated user data from token.

GET /users/basicinfo/:id

Returns public user info (password excluded).

📝 Posts (/posts)
GET /posts

Fetch all posts.

GET /posts/:id

Fetch post by ID.

POST /posts

Create a post.

⚠️ Authentication is not enforced here.

💬 Comments (/comments)
GET /comments/:postId

Fetch all comments for a post.

POST /comments

🔒 Protected
Create a comment (username inferred from token).

DELETE /comments/:commentId

🔒 Protected
Delete a comment by ID.

⚠️ No ownership validation implemented.

🔁 Sequelize Initialization

Models are auto-loaded

Associations are applied dynamically

Sequelize instance exported globally

🚀 Running the Backend
1️⃣ Install dependencies
npm install

2️⃣ Create database
CREATE DATABASE expressdb;

3️⃣ Start server
npm start
