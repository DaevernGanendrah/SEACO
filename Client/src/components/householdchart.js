// import React from 'react';
// import { Bar, Pie, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './householdchart.css'; // Import the CSS


// const HouseholdChart = () => {
//   // Bar chart data for household types
//   const barChartData = {
//     labels: ['Nuclear family', 'Extended family', 'Other types of sharing'],
//     datasets: [
//       {
//         label: 'Household Types',
//         data: [77.2, 21.0, 1.8],
//         backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
//       }
//     ]
//   };

//   // Pie chart data for internet and satellite TV
//   const pieChartData = {
//     labels: ['Home Internet', 'Satellite TV (ASTRO)'],
//     datasets: [
//       {
//         label: 'Internet and TV',
//         data: [16.8, 61.3],
//         backgroundColor: ['#ffcc00', '#3366cc'],
//       }
//     ]
//   };

//   // Radial (Doughnut) chart data for car ownership
//   const radialChartData = {
//     labels: ['At least one car or motorcycle', 'No car or motorcycle'],
//     datasets: [
//       {
//         label: 'Vehicle Ownership',
//         data: [81.2, 18.8],
//         backgroundColor: ['#ff6384', '#c9cbcf'],
//       }
//     ]
//   };

//   return (
//     <div>
//         <div className="grid-container">
//       <div>
//         <h2>Household Types</h2>
//         <Bar data={barChartData} options={{ indexAxis: 'y' }} />
//       </div>
//       <div>
//         <h2>Internet and TV</h2>
//         <Pie data={pieChartData} />
//       </div>
//       <div>
//         <h2>Vehicle Ownership</h2>
//         <Doughnut data={radialChartData} />
//       </div>
//       <div>
//     </div>

//     <div className="text-container">
//         <h2>Ownership of Dwelling</h2>
//         <p style={{ fontSize: '24px', fontWeight: 'bold' }}>68.5%</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HouseholdChart;




























// import React from 'react';
// import { Bar, Pie, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './householdchart.css'; // Import the CSS

// const HouseholdChart = () => {
//   const barChartData = {
//     labels: ['Nuclear family', 'Extended family', 'Other types of sharing'],
//     datasets: [
//       {
//         label: 'Household Types',
//         data: [77.2, 21.0, 1.8],
//         backgroundColor: [
//           'rgba(62, 149, 205, 0.2)',
//           'rgba(142, 94, 162, 0.2)',
//           'rgba(60, 186, 159, 0.2)'
//         ],
//         borderColor: [
//           'rgba(62, 149, 205, 1)',
//           'rgba(142, 94, 162, 1)',
//           'rgba(60, 186, 159, 1)'
//         ],
//         borderWidth: 1,
//         hoverBackgroundColor: [
//           'rgba(62, 149, 205, 1)',
//           'rgba(142, 94, 162, 1)',
//           'rgba(60, 186, 159, 1)'
//         ]
//       }
//     ]
//   };

//   const pieChartData = {
//     labels: ['Home Internet', 'Satellite TV (ASTRO)'],
//     datasets: [
//       {
//         label: 'Internet and TV',
//         data: [16.8, 61.3],
//         backgroundColor: [
//           'rgba(255, 204, 0, 0.2)',
//           'rgba(51, 102, 204, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 204, 0, 1)',
//           'rgba(51, 102, 204, 1)'
//         ],
//         borderWidth: 1,
//         hoverBackgroundColor: [
//           'rgba(255, 204, 0, 1)',
//           'rgba(51, 102, 204, 1)'
//         ]
//       }
//     ]
//   };

//   const radialChartData = {
//     labels: ['At least one car or motorcycle', 'No car or motorcycle'],
//     datasets: [
//       {
//         label: 'Vehicle Ownership',
//         data: [81.2, 18.8],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(201, 203, 207, 1)'
//         ],
//         borderWidth: 1,
//         hoverBackgroundColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(201, 203, 207, 1)'
//         ]
//       }
//     ]
//   };

//   const commonOptions = {
//     maintainAspectRatio: true,
//     aspectRatio: 1,  // Default is 2 (twice as wide as it is high). Setting it to 1 makes it a perfect circle.
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function(context) {
//             let label = context.dataset.label || '';
//             if (label) {
//               label += ': ';
//             }
//             if (context.parsed.y !== null) {
//               label += context.parsed.y + '%';  // Add the percentage sign
//             }
//             return label;
//           }
//         }
//       }
//     },
//     hover: {
//       mode: 'nearest',
//       intersect: true
//     }
//   };

//   return (
//     <div>
//         <div className="grid-container">
//       {/* <div> */}
//       <div style={{ width: '100%', height: 'auto' }}>
//         <h2>Household Types</h2>
//         <Bar data={barChartData} options={{ indexAxis: 'y' }} />
//       </div>
//       {/* <div>
//         <h2>Internet and TV</h2>
//         <Pie data={pieChartData} />
//       </div> */}

//       <div style={{ width: '50%', height: 'auto' }}> {/* Adjust the size by setting width to 50% of container */}
//       <h2>Internet and TV</h2>
//         <Pie data={pieChartData} options={commonOptions} />
//       </div>





//       <div style={{ width: '50%', height: 'auto'}}>
//         <h2>Vehicle Ownership</h2>
//         <Doughnut data={radialChartData} />
//       </div>

//       <div className="text-container">
//         <h2>Ownership of Dwelling</h2>
//         <p style={{ fontSize: '24px', fontWeight: 'bold' }}>68.5%</p>
//       </div>


//       <div>
//     </div>

//     </div>
//     </div>
//   );
// };

// export default HouseholdChart;























































import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './householdchart.css'; // Import the CSS


const HouseholdChart = () => {
  const barChartData = {
    labels: ['Nuclear family', 'Extended family', 'Other types of sharing'],
    datasets: [
      {
        label: 'Household Types',
        data: [77.2, 21.0, 1.8],
        backgroundColor: [
          'rgba(62, 149, 205, 0.2)',
          'rgba(142, 94, 162, 0.2)',
          'rgba(60, 186, 159, 0.2)'
        ],
        borderColor: [
          'rgba(62, 149, 205, 1)',
          'rgba(142, 94, 162, 1)',
          'rgba(60, 186, 159, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(62, 149, 205, 1)',
          'rgba(142, 94, 162, 1)',
          'rgba(60, 186, 159, 1)'
        ]
      }
    ]
  };

  const barChartOptions = {
    indexAxis: 'y', // Makes the bar chart horizontal
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += `${context.parsed.x}%`;  // Correct value access for bar chart
            return label;
          }
        }
      }
    },
    maintainAspectRatio: true,
    aspectRatio: 1
  };


  const pieChartData = {
    labels: ['Home Internet', 'Satellite TV (ASTRO)'],
    datasets: [
      {
        label: 'Internet and TV',
        data: [16.8, 61.3],
        backgroundColor: [
          'rgba(255, 204, 0, 0.2)',
          'rgba(51, 102, 204, 0.2)'
        ],
        borderColor: [
          'rgba(255, 204, 0, 1)',
          'rgba(51, 102, 204, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(255, 204, 0, 1)',
          'rgba(51, 102, 204, 1)'
        ]
      }
    ]
  };

  const radialChartData = {
    labels: ['At least one car or motorcycle', 'No car or motorcycle'],
    datasets: [
      {
        label: 'Vehicle Ownership',
        data: [81.2, 18.8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(201, 203, 207, 1)'
        ]
      }
    ]
  };



  const commonOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1, // Ensures the chart is displayed as a circle.
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            const value = context.parsed;  // Direct access to the value for pie and doughnut charts.
            if (label) {
              label += ': ';
            }
            label += `${value}%`;  // Append the percentage sign correctly.
            return label;
          }
        }
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };
  

  return (
    <div>

<div style={{ width: '100%', height: '400px', marginBottom:'10%' }}>
        <h2>Household Types</h2>
        {/* <Bar data={barChartData} options={{ indexAxis: 'y' }} options={commonOptions} /> */}
        <Bar data={barChartData} options={barChartOptions} />
      </div>


        <div className="grid-container">
   
      <div style={{ width: '50%', height: 'auto' }}> {/* Adjust the size by setting width to 50% of container */}
      <h2>Internet and TV</h2>
        <Pie data={pieChartData} options={commonOptions} />
        {/* <Pie data={pieChartData}  /> */}
      </div>





      <div style={{ width: '50%', height: 'auto'}}>
        <h2>Vehicle Ownership</h2>
        <Doughnut data={radialChartData}  options={commonOptions} />
      </div>


      <div>
    </div>

    </div>
    </div>
  );
};

export default HouseholdChart;
