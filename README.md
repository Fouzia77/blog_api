Blog API — Authors & Posts (Node.js + Express + Sequelize + PostgreSQL)

A RESTful API for managing Authors and their Posts, built using:

-> Node.js + Express

-> Sequelize ORM

-> PostgreSQL

-> Postman for testing

This project demonstrates:

-> One-to-many relationships

-> Foreign key constraints

-> Cascade delete

-> Efficient queries (no N+1 problem)

-> Full CRUD for Authors and Posts

Features: 

-> Author Endpoints

-> Create author

-> List authors

-> Get single author

-> Update author

-> Delete author (with cascade delete)

Post Endpoints :

-> Create post with valid author_id

-> List posts (filterable by author_id)

-> Get a single post with nested author info

-> Update post

-> Delete post

Relationship Handling : 

1. author_id must reference an existing author

2. Deleting an author automatically deletes all related posts

3. Posts queries use JOIN/Eager loading to avoid N+1 queries

4. /authors/:id/posts endpoint returns all posts for that author

Tech Stack : 
| Component | Technology |
| --------- | ---------- |
| Runtime   | Node.js    |
| Framework | Express.js |
| ORM       | Sequelize  |
| Database  | PostgreSQL |
| Testing   | Postman    |

Project Structure : 
├── blogapi
│   ├── config
│   │   └── database.js
│   ├── models
│   │   ├── author.js
│   │   ├── post.js
│   │   └── index.js
│   ├── controllers
│   │   ├── authorController.js
│   │   └── postController.js
│   ├── routes
│   │   ├── authorRoutes.js
│   │   └── postRoutes.js
│   └── app.js
├── package.json

Installation & Setup :
1. Clone the repository 
   git clone https://github.com/Fouzia77/blog_api.git
   mkdir blogapi
   cd blogapi
2. Install dependencies :
   npm install
3. Create .env file :
   DB_HOST=localhost
   DB_NAME=blogdb
   DB_USER=postgres
   DB_PASS=fouzia
   DB_PORT=5432
   PORT=3000
4. Create the database :
   In PostgreSQL:
   CREATE DATABASE blogdb;
5. Start the server :
   npm start
   
The API will run at:
👉 http://localhost:3000

API Documentation :
➤ POST /authors
Create a new author.
  http://localhost:3000/authors
json :
  {
    "name": "fouzia",
    "email": "fouzia@gmail.com"
  }
Response:
  {
    "id": 3,
    "name": "fouzia",
    "email": "fouzia@gmail.com",
    "updatedAt": "2025-12-11T12:48:32.688Z",
    "createdAt": "2025-12-11T12:48:32.688Z"
  }
➤ GET /authors
Get all authors.
  http://localhost:3000/authors
Response:
  [
    {
    "id": 2,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-12-09T16:06:48.865Z",
    "updatedAt": "2025-12-09T16:06:48.865Z"
    }
    {
    "id": 3,
    "name": "fouzia",
    "email": "fouzia@gmail.com",
    "createdAt": "2025-12-11T12:48:32.688Z",
    "updatedAt": "2025-12-11T12:48:32.688Z"
    }
  ]
➤ GET /authors/:id
  http://localhost:3000/authors/3
Response:
  {
    "id": 3,
    "name": "fouzia",
    "email": "fouzia@gmail.com",
    "createdAt": "2025-12-11T12:48:32.688Z",
    "updatedAt": "2025-12-11T12:48:32.688Z"
  }
➤ PUT /authors/:id

➤ DELETE /authors/:id
Deletes the author and all associated posts.

POSTS ENDPOINTS
➤ POST /posts
Create a post for an existing author.

➤ GET /posts
Fetch all posts.

➤ GET /posts/:id

➤ PUT /posts/:id

➤ DELETE /posts/:id
