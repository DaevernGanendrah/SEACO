// // import React, { useState } from 'react';
// <<<<<<< HEAD
// =======
// import { Link } from 'react-router-dom'; 

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Here you would call your API to perform login
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username:</label>
//       <input
//         id="username"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>

//    <div>
//    <Link to="/register">Don't have an account? Register here</Link>
//    </div>
//     </form>


//   );
// }

// export default Login;








// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate hook

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace 'http://localhost:5000/api/auth/login' with your actual login endpoint
//       const response = await fetch('http://localhost:5001/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
      
//       if (data.success) {
//         // Navigate to dashboard upon successful login
//         navigate('/dashboard');
//       } else {
//         // Handle login failure (e.g., show an error message)
//         alert('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };




// // 
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username:</label>
//       <input
//         id="username"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>

//       <Link to="/register">Don't have an account? Register here</Link>
//     </form>
 
//   );
// }

// export default Login;











// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use the useNavigate hook for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5001/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         // Assuming your backend indicates a successful login with an 'ok' status.
//         // Navigate to dashboard upon successful login. Adjust if your API returns specific success indicator.
//         navigate('/dashboard');
//       } else {
//         // Handle login failure. Show an alert or set an error message state variable to display.
//         alert(data.message || 'Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username:</label>
//       <input
//         id="username"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>

//       <div>
//         <Link to="/register">Don't have an account? Register here</Link>
//       </div>
//     </form>
//   );
// }

// export default Login;









// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     //   const response = await fetch('http://localhost:5001/api/auth/login', {
//     //     method: 'GET',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },

// //     const response = await fetch(`http://localhost:5001/api/auth/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
// //   method: 'GET',
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },

// // const username = encodeURIComponent(yourUsername);
// // const password = encodeURIComponent(yourPassword); // Again, avoid this for sensitive data like passwords.
// const response = await fetch(`http://localhost:5001/api/auth/login?username=${username}&password=${password}`, {
//   method: 'GET', // No body should be included in a GET request
//   headers: {
//     'Accept': 'application/json',
//   },
// });

//         // body: JSON.stringify({ username, password }),
//     //   });
//       const data = await response.json();
      
//       if (response.ok) {
//         // Store the token in localStorage (or sessionStorage)
//         localStorage.setItem('token', data.token);
//         // Navigate to dashboard upon successful login
//         navigate('/globedashboard');
//       } else {
//         // Handle login failure (e.g., show an error message)
//         alert(data.message || 'Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username:</label>
//       <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <label htmlFor="password">Password:</label>
//       <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//       <Link to="/register">Don't have an account? Register here</Link>
//     </form>
//   );
// }

// export default Login;





// import React, { useState } from 'react';
// >>>>>>> 72dc868e (Updated dependencies and components, added new component files)
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Note: Modify the fetch URL and method as per your backend API.
//       const response = await fetch(`http://localhost:5001/api/auth/login?username=${username}&password=${password}`, {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/globedashboard');
//       } else {
//         alert(data.message || 'Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <style jsx="true">{`
//         .login-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #f4f7f6;
//         }
//         form {
//           padding: 20px;
//           background: white;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           max-width: 400px;
//           width: 100%;
//         }
//         h2 {
//           text-align: center;
//           margin-bottom: 20px;
//           color: #333;
//         }
//         label {
//           display: block;
//           margin: 15px 0 5px;
//         }
//         input {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 20px;
//           border-radius: 5px;
//           border: 1px solid #ccc;
//         }
//         button {
//           width: 100%;
//           padding: 10px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         button:hover {
//           background-color: #0056b3;
//         }
//         .register-link {
//           display: block;
//           text-align: center;
//           margin-top: 20px;
//           color: #007bff;
//           text-decoration: none;
//         }
//         .register-link:hover {
//           text-decoration: underline;
//         }
//       `}</style>
//       <div className="login-container">
// //         <form onSubmit={handleSubmit}>
// <<<<<<< HEAD
// //           <h2>Analytics Dashboard</h2>
// =======
// //           <h2>SEACO 360 Login</h2>
// >>>>>>> 72dc868e (Updated dependencies and components, added new component files)
//           <label htmlFor="username">Username:</label>
//           <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           <label htmlFor="password">Password:</label>
//           <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit">Login</button>
//           <Link to="/register" className="register-link">Don't have an account? Register here</Link>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;









// <<<<<<< HEAD
// =======






















import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Note: Modify the fetch URL and method as per your backend API.
  //     const response = await fetch(`http://:5001/api/auth/login?username=${username}&password=${password}`, {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //       },
  //     });

  //     const data = await response.json();
      
  //     if (response.ok) {
  //       localStorage.setItem('token', data.token);
  //       navigate('/globedashboard');
  //     } else {
  //       alert(data.message || 'Login failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     alert('An error occurred. Please try again later.');
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Note: Modify the fetch URL and method as per your backend API.
  //     // const response = await fetch(`http://localhost:5001/api/auth/login?username=${username}&password=${password}`, {
  //       const response = await fetch(`https://seaco.onrender.com/login?username=${username}&password=${password}`, {
  //       method: 'GET',  // Usually, login should be a POST request.
  //       headers: {
  //         'Accept': 'application/json',
  //       },
  //     });

  //     const data = await response.json();
      
  //     if (response.ok) {
  //       localStorage.setItem('token', data.token);
  //       navigate('/globedashboard');  // Ensure navigate is correctly defined and used here.
  //     } else {
  //       alert(data.message || 'Login failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     alert('An error occurred. Please try again later.');
  //   }
  // };



//       const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('https://seaco.onrender.com/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password
//       })
//     });

//     const data = await response.json();
    
//     if (response.ok) {
//       // Assuming successful login redirects to '/globedashboard'
//       navigate('/globedashboard');
//     } else {
//       alert(data.message || 'Login failed. Please try again.');
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     alert('An error occurred. Please try again later.');
//   }
// };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://seaco.onrender.com/api/auth/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        // Assuming the server sends some token or user data
        // Store it locally or handle accordingly
        console.log('Login successful:', data);
        navigate('/globedashboard');  // Redirect or handle successful login
      } else {
        // Display error message from server or generic error if none provided
        alert(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <>
      <style jsx="true">{`
        /* Add your custom CSS for the ring and login components here */
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Quicksand", sans-serif;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #111;
          width: 100%;
          overflow: hidden;
        }
        .ring {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ring i {
          position: absolute;
          inset: 0;
          border: 2px solid #fff;
          transition: 0.5s;
        }
        .ring i:nth-child(1) {
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          animation: animate 6s linear infinite;
        }
        .ring i:nth-child(2) {
          border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
          animation: animate 4s linear infinite;
        }
        .ring i:nth-child(3) {
          border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
          animation: animate2 10s linear infinite;
        }
        .ring:hover i {
          border: 6px solid var(--clr);
          filter: drop-shadow(0 0 20px var(--clr));
        }
        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes animate2 {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .login {
          position: absolute;
          width: 300px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        .login h2 {
          font-size: 2em;
          color: #fff;
        }
        .login .inputBx {
          position: relative;
          width: 100%;
        }
        .login .inputBx input {
          position: relative;
          width: 100%;
          padding: 12px 20px;
          background: transparent;
          border: 2px solid #fff;
          border-radius: 40px;
          font-size: 1.2em;
          color: #fff;
          box-shadow: none;
          outline: none;
        }
        .login .inputBx input[type="submit"] {
          width: 100%;
          background: #0078ff;
          background: linear-gradient(45deg, #ff357a, #fff172);
          border: none;
          cursor: pointer;
        }
        .login .inputBx input::placeholder {
          color: rgba(255, 255, 255, 0.75);
        }
        .login .links {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        .login .links a {
          color: #fff;
          text-decoration: none;
        }
        
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  width: 100%;
  overflow: hidden;
}
.ring {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ring i {
  position: absolute;
  inset: 0;
  border: 2px solid #fff;
  transition: 0.5s;
}
.ring i:nth-child(1) {
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: animate 10s linear infinite;
}
.ring i:nth-child(2) {
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate 20s linear infinite;
}
.ring i:nth-child(3) {
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate2 30s linear infinite;
}
.ring:hover i {
  border: 6px solid var(--clr);
  filter: drop-shadow(0 0 20px var(--clr));
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.login {
  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.login h2 {
  font-size: 2em;
  color: #fff;
}
.login .inputBx {
  position: relative;
  width: 100%;
}
.login .inputBx input {
  position: relative;
  width: 100%;
  padding: 12px 20px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 40px;
  font-size: 1.2em;
  color: #fff;
  box-shadow: none;
  outline: none;
}
.login .inputBx input[type="submit"] {
  width: 100%;
  background: #0078ff;
//   background: linear-gradient(45deg, #ff357a, #fff172);
  background: linear-gradient(45deg, rgb(17, 16, 16), rgb(106, 104, 103));
  border: none;
  cursor: pointer;
}
.login .inputBx input::placeholder {
  color: rgba(255, 255, 255, 0.75);
}
.login .links {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.login .links a {
  color: #fff;
  text-decoration: none;
}


        /* Other styles omitted for brevity */
      `}</style>
      <div className="login-container">
        <div className="ring">
          <i style={{ '--clr': '#00ff0a' }}></i>
          <i style={{ '--clr': '#ff0057' }}></i>
          <i style={{ '--clr': '#fffd44' }}></i>
          {/* <div className="login">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2> */}

          {/* <i style={{ '--clr': '#00ff0a' }}></i>
          <i style={{ '--clr': '#ff0057' }}></i>
          <i style={{ '--clr': '#fffd44' }}></i> */}


          <i style={{ '--clr': 'gray' }}></i>
          <i style={{ '--clr': 'whitesmoke' }}></i>
          <i style={{ '--clr': 'yellowgreen' }}></i>

          <div className="login">
            <form onSubmit={handleSubmit}>
              <h2>SEACO 360 Login</h2>

              <div className="inputBx">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              </div>
              <div className="inputBx">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign in" />
              </div>
              <div className="links">
                <Link to="#" className="forget-password">Forget Password</Link>
                <Link to="/register">Signup</Link>
              </div>
            </form>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Login;

















{/* 

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://:5001/api/auth/login?username=${username}&password=${password}`, {
        // const response = await fetch(`https://seaco.onrender.com/api/auth/login?username=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/globedashboard');
      } else {
        alert(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Quicksand", sans-serif;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #111;
          width: 100%;
          overflow: hidden;
        }
        .ring {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ring i {
          position: absolute;
          inset: 0;
          border: 2px solid #fff;
          transition: 0.5s;
          border-radius: 50%;
          animation: animate 6s linear infinite;
        }
        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .login {
          position: absolute;
          width: 300px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        .login h2 {
          font-size: 2em;
          color: #fff;
        }
        .login .inputBx {
          position: relative;
          width: 100%;
          padding: 12px 20px;
          background: transparent;
          border: 2px solid #fff;
          border-radius: 40px;
          font-size: 1.2em;
          color: #fff;
          outline: none;
        }
        .login .inputBx input[type="submit"] {
          background: linear-gradient(45deg, #ff357a, #fff172);
          border: none;
          cursor: pointer;
        }
        .login .links a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
      <div className="login-container">
        <div className="ring">
          <i style={{ '--clr': 'gray' }}></i>
          <i style={{ '--clr': 'whitesmoke' }}></i>
          <i style={{ '--clr': 'yellowgreen' }}></i>
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h2>SEACO 360 Login</h2>
              <div className="inputBx">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              </div>
              <div className="inputBx">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign in" />
              </div>
              <div className="links">
                <Link to="#" className="forget-password">Forget Password</Link>
                <Link to="/register">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login; */}
