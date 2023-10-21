import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const authorStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const priceStyle = {
    fontSize: '1.2rem',
    color: 'green',
  };

  const genresStyle = {
    fontSize: '1.2rem',
    color :'black',
  }

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>Name: {book.Name}</h3>
      <p style={authorStyle}>Author: {book.Author}</p>
      <p style={priceStyle}>Price: ${book.Price}</p>
      <p style={genresStyle}>Genre: {book.Genre}</p>
      <Link to={`/book/${book._id}`}>view in detail</Link>
    </div>
  );
};

export default BookCard;
