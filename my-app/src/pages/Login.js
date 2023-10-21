import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { login } from '../redux/auth/auth.actions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch=useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!formData.email) {
        alert('email is required')
        return
    }

    if (!formData.password) {
        alert('password is required')
        return
    } // You can handle form submission here
    dispatch(login(formData));
        setFormData({ 
        email: '',
        password: '',});
  };
   

  const formStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align form items to the left
  };

  const labelStyle = {
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          style={inputStyle}
          value={formData.email}
          onChange={handleInputChange}
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          name="password"
          style={inputStyle}
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit" style={buttonStyle}>Login</button>
        <Link style={{marginTop:"5px"}} to="/register">click here to register</Link>
      </form>
    </div>
  );
};

export default Login;
