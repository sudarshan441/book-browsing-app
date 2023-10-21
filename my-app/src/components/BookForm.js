import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_POST_BOOKS } from '../redux/books/books.actions';

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    price: '',
    genre: '',
    coverImage: null, // Use null to store the selected file
  });
const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, including the file data.
      if (!formData.name) {
        alert('Name is required')
        return 
      }
      if (!formData.author) {
        alert('author is required')
        return
      }
      if (!formData.price) {
        alert('price is required')
        return
      }
      if (!formData.genre) {
        alert("genre is required")
        return
      }
      if (!formData.coverImage) {
        alert("file is not uploaded")
        return
      }
    dispatch(ACTION_POST_BOOKS(formData));

    // Reset the form after submission
    setFormData({
      name: '',
      author: '',
      price: '',
      genre: '',
      coverImage: null,
    });
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    fontSize: '1.1rem',
  };

  const inputStyle = {
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const fileInputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '1rem',
  };

  const imagePreviewStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  return (
    <div style={formStyle}>
      <h2 style={headerStyle}>Add a New Book to List</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Cover Image:</label>
        <input
          type="file"
          name="coverImage"
          onChange={handleChange}
          accept="image/*"
          style={fileInputStyle}
        />

        {formData.coverImage && (
          <img
            src={URL.createObjectURL(formData.coverImage)}
            alt="Cover Preview"
            style={imagePreviewStyle}
          />
        )}

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
