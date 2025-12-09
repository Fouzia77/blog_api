const Post = require('../models/post');
const Author = require('../models/author');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, authorId } = req.body;

        // Validate author exists
        const author = await Author.findByPk(authorId);
        if (!author) return res.status(400).json({ message: 'Author not found' });

        const post = await Post.create({ title, content, authorId });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all posts, optional filter by authorId
exports.getAllPosts = async (req, res) => {
    try {
        const { authorId } = req.query;
        const filter = authorId ? { where: { authorId } } : {};

        // Eager load author to avoid N+1 queries
        const posts = await Post.findAll({
            ...filter,
            include: [{ model: Author, attributes: ['id', 'name', 'email'] }]
        });

        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single post by id
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [{ model: Author, attributes: ['id', 'name', 'email'] }]
        });
        if (!post) return res.status(404).json({ message: 'Post not found' });

        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        const { title, content } = req.body;
        if (title) post.title = title;
        if (content) post.content = content;

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        await post.destroy();
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
