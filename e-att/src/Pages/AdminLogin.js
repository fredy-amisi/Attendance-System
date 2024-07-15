import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:80/api/login.php', {
        email,
        password,
      });

      if (response.data.success) {
        // Store user data in session storage/local storage or set global state
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        // Navigate to different routes based on user role
        if (response.data.user.role === 'admin') {
          navigate('/admin_dashboard');
        } else {
          navigate('/user_dashboard');
        }
      } else {
        setError(response.data.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
