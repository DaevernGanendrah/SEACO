import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); 

    try {

        const response = await fetch('https://seaco.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();


      if (data.success) {
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        // Handle server responses indicating failure (e.g., username already taken)
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      // General network error or server-side error handling
      setErrorMessage(error.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Registration;
