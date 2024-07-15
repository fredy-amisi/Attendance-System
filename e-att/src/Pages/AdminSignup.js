import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { token } = useParams(); // Assuming you're using react-router-dom for routing
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is valid
    const validateToken = async () => {
      try {
        const response = await axios.get(`http://localhost:80/api/validate-token.php?token=${token}`);
        if (!response.data.valid) {
          setError('Invalid or expired token');
        }
      } catch (error) {
        setError('An error occurred while validating the token');
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:80/api/admin_signup.php', {
        email,
        password,
        token
      });

      if (response.data.success) {
        alert('Admin account created successfully!');
        navigate('/login');
      } else {
        setError(response.data.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred while creating the account');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Admin Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up as Admin</button>
      </form>
    </div>
  );
};

export default AdminSignup;
