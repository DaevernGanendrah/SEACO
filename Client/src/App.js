// import logo from './logo.svg';
// import './App.css';
// <<<<<<< HEAD
// =======
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/" exact component={Login} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import GlobeDashboard from './components/GlobeDashboard';
// import Registration from './components/Registration';
// import Page3 from './components/Page3';
// // import GlobeDashboard from './GlobeDashboard';

// >>>>>>> 72dc868e (Updated dependencies and components, added new component files)

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import GlobeDashboard from './components/GlobeDashboard';
// // import Page3 from './components/Page3'; // Assuming Page3 is in the components folder

// const App = () => {
//   return (
//     <Router>
//       <Routes>
// <<<<<<< HEAD
//       <Route path="/login" element={<Login />} />
//       <Route path="/globedashboard" element={<GlobeDashboard />} />

//       <Route path="/" element={<Login />} />
      
//         {/* <Route path="/page3" element={<Page3 />} />  */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// =======
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//         <Route path="/globedashboard" element={<GlobeDashboard/>} />    
//         <Route path="/register" element={<Registration />} />
//         <Route path="/page3" element={<Page3 />} />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// >>>>>>> 72dc868e (Updated dependencies and components, added new component files)








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GlobeDashboard from './components/GlobeDashboard';
import Registration from './components/Registration';
import Page3 from './components/Page3';
import HealthChart2013 from './components/HealthChart2013';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/healthchart2013" element={<HealthChart2013 />} />
        <Route path="/globedashboard" element={<GlobeDashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
