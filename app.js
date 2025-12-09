const express = require('express');
const app = express();

app.use(express.json());

// Import routes correctly
const authorRoutes = require('./routes/authors');  // check path
const postRoutes = require('./routes/posts');    // comment out posts if not ready

// Use routes
app.use('/authors', authorRoutes);  // <-- this must be a router function
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
