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
