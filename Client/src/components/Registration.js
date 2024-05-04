// // src/components/Registration.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For redirecting to another route

// const Registration = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrorMessage(''); // Reset error message on new submission

//     try {
// <<<<<<< HEAD
//       const response = await fetch('http://localhost:5000/api/auth/register', {
// =======
//       const response = await fetch('http://localhost:5001/api/auth/register', {
// >>>>>>> 72dc868e (Updated dependencies and components, added new component files)
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
      
//       if (!response.ok) {
//         // If the server response is not ok, throw an error
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       // This assumes that the server returns some success indication in the JSON response.
//       // Adjust based on your server response structure.
//       if (data.success) {
//         // Redirect to login page after successful registration
//         navigate('/login');
//       } else {
//         // Handle server responses indicating failure (e.g., username already taken)
//         setErrorMessage(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       // General network error or server-side error handling
//       setErrorMessage(error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Register</button>
//         {errorMessage && <p className="error">{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default Registration;
























import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to another route

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Reset error message on new submission

    try {
      // const response = await fetch('http://localhost:5001/api/auth/register', {
        const response = await fetch('https://seaco.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        // If the server response is not ok, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // This assumes that the server returns some success indication in the JSON response.
      // Adjust based on your server response structure.
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
