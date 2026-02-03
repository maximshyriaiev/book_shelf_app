/**
 * @file server.js
 * @description Main server file for the Book Shelf App backend. Handles API endpoints for books management.
 * @author Maksym Shyriaiev
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const app = express();
const port = 5000;

// In-memory storage for books (professional: use DB in production)
let books = [
    { id: 1, title: 'Professional Book 1', author: 'Author 1' },
    { id: 2, title: 'Professional Book 2', author: 'Author 2' },
];

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

/**
 * @route GET /api/books
 * @description Retrieves the list of all books.
 * @returns {Array} Array of book objects.
 */
app.get('/api/books', (req, res) => {
    res.json(books);
});

/**
 * @route POST /api/books
 * @description Adds a new book to the list.
 * @param {string} title - The title of the book (required).
 * @param {string} author - The author of the book (required).
 * @returns {Object} The newly added book object.
 * @throws {400} If title or author is missing.
 */
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    return res.status(201).json(newBook);
});

// Swagger API documentation setup
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
});