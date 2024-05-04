





// import React from 'react';
// import RadialProgressChart from './RadialProgressChart';
// import BarChart from './BarChart';
// import CensusChart from './censuschart'; // Import the CensusChart component
// import './SEACO.css';
// import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
// import HouseholdChart from './householdchart'; 
// import HealthChart from './healthchart'; 
// import EconomicActivitiesChart from './economicactivitieschart'; 

// Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: Array(6).fill(false), // Initialize all dropdowns to be closed
//     };
//   }

//   toggleVisibility = (index) => {
//     // Update visibility state for the clicked dropdown
//     this.setState(prevState => ({
//       isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
//     }));
//   };

//   render() {
//     const size = 300;
//     const progressValues = [
//       { name: 'Malay', color: '#00a2ff', value: 63 },
//       { name: 'Chinese', color: '#4dff4d', value: 26 },
//       { name: 'Indian', color: '#ff4dff', value: 9 },
//       { name: 'Other', color: 'red', value: 2 }
//     ];

//     const barChartData = {
//       labels: progressValues.map(p => p.name),
//       datasets: [{
//         data: progressValues.map(p => p.value),
//         backgroundColor: progressValues.map(p => p.color)
//       }]
//     };

//     const numbers = ["24,992", "10,364", "3,368", "902"];
//     const dropdownNames = ["Census", "Household and Families", "Health", "Economic Activities", "Employment Rates", "People"];

//     return (
//       <div className="dashboard">
//         <h1 className="community-briefs-title">Community Briefs</h1>
//         {dropdownNames.map((name, index) => (
//           <div key={index} className="accordion-section">
//             <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
//               {name}
//             </button>

            
//             <div className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}>
//               {index === 0 && ( // Display the CensusChart when the "Census" dropdown is active
//                 <CensusChart/>
//               )}

//             {index === 1 && ( // Assuming index 1 corresponds to "Household and Families"
//                 <HouseholdChart />
//               )}

//             {index === 2 && ( // Assuming index 1 corresponds to "Household and Families"
//                 <HealthChart />
//               )}

//             {index === 3 && ( // Assuming index 1 corresponds to "Household and Families"
//                 < EconomicActivitiesChart />
//               )}


//               {index === 5 && (
//                 <div className="grid-container">
//                   <div className="chart-container">
//                     <RadialProgressChart size={size} progressValues={progressValues} />
//                   </div>
//                   <div className="chart-container">
//                     <BarChart chartData={barChartData} chartWidth={300} chartHeight={200} />
//                   </div>
//                 </div>
//               )}
//               <div className="numbers-container">
//                 {numbers.map((number, colorIndex) => (
//                   <div key={colorIndex} className="number-item" style={{ color: progressValues[colorIndex % progressValues.length].color }}>
//                     {number}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Dashboard;
















// import React from 'react';
// import RadialProgressChart from './RadialProgressChart';
// import BarChart from './BarChart';
// import CensusChart from './censuschart';  // Make sure to import your new component
// import './SEACO.css';
// import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
// import HouseholdChart from './householdchart'; 
// import HealthChart from './healthchart'; 
// import EconomicActivitiesChart from './economicactivitieschart'; 

// Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: Array(6).fill(false),  // Initialize all dropdowns to be closed
//     };
//   }

//   toggleVisibility = (index) => {
//     this.setState(prevState => ({
//       isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
//     }));
//   };

//   render() {
//     const size = 300;
//     const progressValues = [
//       { name: 'Malay', color: '#00a2ff', value: 63 },
//       { name: 'Chinese', color: '#4dff4d', value: 26 },
//       { name: 'Indian', color: '#ff4dff', value: 9 },
//       { name: 'Other', color: 'red', value: 2 }
//     ];

//     const barChartData = {
//       labels: progressValues.map(p => p.name),
//       datasets: [{
//         data: progressValues.map(p => p.value),
//         backgroundColor: progressValues.map(p => p.color)
//       }]
//     };

//     const numbers = ["24,992", "10,364", "3,368", "902"];
//     const dropdownNames = ["Census", "Household and Families", "Health", "Economic Activities", "Employment Rates", "People"];

//     return (
//       <div className="dashboard">
//         <h1 className="community-briefs-title">Community Briefs</h1>
//         {dropdownNames.map((name, index) => (
//           <div key={index} className="accordion-section">
//             <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
//               {name}
//             </button>
//             <div className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}>
//               {index === 0 && <CensusChart />}
//               {index === 1 && <HouseholdChart />}
//               {index === 2 && <HealthChart />}
//               {index === 3 && <EconomicActivitiesChart />}
//               {index === 4 && (
//                 <div className="grid-container">
//                   <div className="chart-container">
//                     <RadialProgressChart size={size} progressValues={progressValues} />
//                   </div>
//                   <div className="chart-container">
//                     <BarChart chartData={barChartData} chartWidth={300} chartHeight={200} />
//                   </div>
//                   <div className="numbers-container">
//                     {numbers.map((number, colorIndex) => (
//                       <div key={colorIndex} className="number-item" style={{ color: progressValues[colorIndex % progressValues.length].color }}>
//                         {number}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {/* This will only render for index 4, adjust if your array structure is different */}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Dashboard;








import React from 'react';
import RadialProgressChart from './RadialProgressChart';
import BarChart from './BarChart';
import CensusChart from './censuschart';  // Import the CensusChart component
import './SEACO.css';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import HouseholdChart from './householdchart'; 
import HealthChart from './healthchart'; 
import EconomicActivitiesChart from './economicactivitieschart'; 

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: Array(6).fill(false),  // Initialize all dropdowns to be closed
    };
  }

  toggleVisibility = (index) => {
    this.setState(prevState => ({
      isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
    }));
  };

  render() {
    const size = 300;
    const progressValues = [
      { name: 'Malay', color: '#00a2ff', value: 63 },
      { name: 'Chinese', color: '#4dff4d', value: 26 },
      { name: 'Indian', color: '#ff4dff', value: 9 },
      { name: 'Other', color: 'red', value: 2 }
    ];

    const barChartData = {
      labels: progressValues.map(p => p.name),
      datasets: [{
        data: progressValues.map(p => p.value),
        backgroundColor: progressValues.map(p => p.color)
      }]
    };

    const numbers = ["24,992", "10,364", "3,368", "902"];
    const dropdownNames = ["Census", "Household and Families", "Health", "Economic Activities", "Employment Rates", "People"];

    return (
      <div className="dashboard">
        <h1 className="community-briefs-title">Community Briefs</h1>
        {dropdownNames.map((name, index) => (
          <div key={index} className="accordion-section">
            <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
              {name}
            </button>
            {/* <div className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}> */}
            <div 
            className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}
            style={index === 0 ? { height: '500px' } : {}}  // Set height for Census dropdown
          >

              {index === 0 && <CensusChart />}
              {index === 1 && <HouseholdChart />}
              {index === 2 && <HealthChart />}
              {index === 3 && <EconomicActivitiesChart />}
              {index === 4 && (
                <div>
                  <div className="chart-container">
                    <RadialProgressChart size={size} progressValues={progressValues} />
                  </div>
                  <div className="chart-container">
                    <BarChart chartData={barChartData} chartWidth={300} chartHeight={200} />
                  </div>
                  <div className="numbers-container">
                    {numbers.map((number, colorIndex) => (
                      <div key={colorIndex} className="number-item" style={{ color: progressValues[colorIndex % progressValues.length].color }}>
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {index === 5 && (
                // Content for "People" section goes here
                <div>
                  {/* If there is no specific content for "People", you can add general information or leave it blank. */}
                  <p>Information on People will be displayed here.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;






















// import React from 'react';
// import RadialProgressChart from './RadialProgressChart';
// import BarChart from './BarChart';
// import './SEACO.css';

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: Array(6).fill(false), // Initialize all dropdowns to be closed
//     };
//   }

//   toggleVisibility = (index) => {
//     // Update visibility state for the clicked dropdown
//     this.setState(prevState => ({
//       isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
//     }));
//   };

//   render() {
//     const size = 300;
//     const progressValues = [
//       { name: 'Malay', color: '#00a2ff', value: 63 },
//       { name: 'Chinese', color: '#4dff4d', value: 26 },
//       { name: 'Indian', color: '#ff4dff', value: 9 },
//       { name: 'Other', color: 'red', value: 2 }
//     ];

//     const barChartData = {
//       labels: progressValues.map(p => p.name),
//       datasets: [{
//         data: progressValues.map(p => p.value),
//         backgroundColor: progressValues.map(p => p.color)
//       }]
//     };

//     const numbers = ["24,992", "10,364", "3,368", "902"];
//     const dropdownNames = ["Census", "Household and Families", "Health", "Economic Activities", "Employment Rates", "People"];

//     return (
//       <div className="dashboard">
//         <h1 className="community-briefs-title">Community Briefs</h1>
//         {dropdownNames.map((name, index) => (
//           <div key={index} className="accordion-section">
//             <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
//               {name}
//             </button>
//             <div className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}>
//               {index === 5 && (
//                 <div className="grid-container">
//                   <div className="chart-container">
//                     <RadialProgressChart size={size} progressValues={progressValues} />
//                   </div>
//                   <div className="chart-container">
//                     <BarChart chartData={barChartData} chartWidth={300} chartHeight={200} />
//                   </div>
//                 </div>
//               )}
//               <div className="numbers-container">
//                 {numbers.map((number, colorIndex) => (
//                   <div key={colorIndex} className="number-item" style={{ color: progressValues[colorIndex % progressValues.length].color }}>
//                     {number}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Dashboard;




























// import React from 'react';
// import RadialProgressChart from './RadialProgressChart';
// import BarChart from './BarChart';
// import CensusChart from './censuschart';  // Make sure to import your new component
// import './SEACO.css';
// import { Chart, CategoryScale } from 'chart.js';

// Chart.register(CategoryScale);
// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: Array(6).fill(false),
//     };
//   }

//   toggleVisibility = (index) => {
//     this.setState(prevState => ({
//       isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
//     }));
//   };

//   render() {
//     const size = 300;
//     const progressValues = [
//       { name: 'Malay', color: '#00a2ff', value: 63 },
//       { name: 'Chinese', color: '#4dff4d', value: 26 },
//       { name: 'Indian', color: '#ff4dff', value: 9 },
//       { name: 'Other', color: 'red', value: 2 }
//     ];

//     // Define barChartData here
//     const barChartData = {
//       labels: progressValues.map(p => p.name),
//       datasets: [{
//         data: progressValues.map(p => p.value),
//         backgroundColor: progressValues.map(p => p.color)
//       }]
//     };

//     const numbers = ["24,992", "10,364", "3,368", "902"];
//     const dropdownNames = ["Census", "Household and Families", "Health", "Economic Activities", "Employment Rates", "People"];

//     return (
//       <div className="dashboard">
//         <h1 className="community-briefs-title">Community Briefs</h1>
//         {dropdownNames.map((name, index) => (
//           <div key={index} className="accordion-section">
//             <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
//               {name}
//             </button>
//             <div className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}>
//               {index === 0 && (
//                 <div className="grid-container">
//                   <div className="chart-container">
//                     <CensusChart />
//                   </div>
//                 </div>
//               )}
//               {index === 5 && (
//                 <div className="grid-container">
//                   <div className="chart-container">
//                     <RadialProgressChart size={size} progressValues={progressValues} />
//                   </div>
//                   <div className="chart-container">
//                     <BarChart chartData={barChartData} chartWidth={300} chartHeight={200} />
//                   </div>
//                 </div>
//               )}
//               <div className="numbers-container">
//                 {numbers.map((number, colorIndex) => (
//                   <div key={colorIndex} className="number-item" style={{ color: progressValues[colorIndex % progressValues.length].color }}>
//                     {number}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Dashboard;
