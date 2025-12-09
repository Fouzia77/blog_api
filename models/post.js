const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./author');

const Post = sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: Author, key: 'id' },
        onDelete: 'CASCADE'
    }
});

// Define association
Author.hasMany(Post, { foreignKey: 'authorId', onDelete: 'CASCADE' });
Post.belongsTo(Author, { foreignKey: 'authorId' });

module.exports = Post;
