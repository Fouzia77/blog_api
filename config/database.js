const { Sequelize } = require('sequelize');

// PostgreSQL configuration
const sequelize = new Sequelize('blog_db', 'postgres', 'fouzia', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // optional, prevents SQL logs in console
});

module.exports = sequelize;
