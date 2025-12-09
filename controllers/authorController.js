const Author = require('../models/author');
const Post = require('../models/post');

// Create a new author
exports.createAuthor = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        const existingAuthor = await Author.findOne({ where: { email } });
        if (existingAuthor) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const author = await Author.create({ name, email });
        res.status(201).json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all authors
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get author by id
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update author
exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });

        const { name, email } = req.body;
        if (name) author.name = name;
        if (email) author.email = email;

        await author.save();
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete author (cascade deletes posts)
exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });

        await author.destroy();
        res.json({ message: 'Author and associated posts deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all posts for a specific author
exports.getPostsByAuthor = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id, {
            include: [{ model: Post }]
        });
        if (!author) return res.status(404).json({ message: 'Author not found' });

        res.json(author.Posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
