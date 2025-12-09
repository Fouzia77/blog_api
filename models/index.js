const sequelize = require('../config/database');
const Author = require('./author');
const Post = require('./post');

const syncDatabase = async () => {
  await sequelize.sync({ alter: true }); // Creates tables if not exist
  console.log('All models were synchronized successfully.');
};

module.exports = { sequelize, Author, Post, syncDatabase };
