import React from 'react';
import PropTypes from 'prop-types';

function BookCard({ title, author }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '15px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
            <p style={{ margin: 0, color: '#555' }}>
                <strong>Автор:</strong> {author}
            </p>
        </div>
    );
}

BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default BookCard;