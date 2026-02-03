import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './components/BookCard';
import Button from './components/Button';

const API_BASE_URL = 'http://localhost:5000/api/books';

function App() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setBooks(response.data);
            setError(null);
        } catch (err) {
            setError('Не вдалося завантажити список книг. Перевірте, чи запущений backend.');
            console.error(err);
        }
    };

    const handleAddBook = async () => {
        if (!title.trim() || !author.trim()) {
            setError('Вкажіть назву та автора книги.');
            return;
        }

        try {
            await axios.post(API_BASE_URL, { title, author });
            setTitle('');
            setAuthor('');
            setError(null);
            fetchBooks(); // оновлюємо список після додавання
        } catch (err) {
            setError('Не вдалося додати книгу.');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>Book Shelf App</h1>

            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Назва книги"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <input
                    type="text"
                    placeholder="Автор"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <Button onClick={handleAddBook} label="Додати книгу" />
            </div>

            <h2>Список книг</h2>
            {books.length === 0 ? (
                <p>Книг поки немає. Додайте першу!</p>
            ) : (
                books.map((book) => (
                    <BookCard key={book.id} title={book.title} author={book.author} />
                ))
            )}
        </div>
    );
}

export default App;