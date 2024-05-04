// import React from 'react';
// import { Bar, Bubble } from 'react-chartjs-2';
// import 'chart.js/auto';

// const EconomicActivitiesChart = () => {
//   const employmentData = {
//     labels: ['Employed', 'Unemployed', 'Student', 'Retired', 'Homemaker'],
//     datasets: [
//       {
//         label: 'Employment Status',
//         data: [60, 5, 20, 10, 5], // Replace with your actual data
//         backgroundColor: [
//           '#66b2ff',
//           '#ff9999',
//           '#99ff99',
//           '#c299ff',
//           '#ffcc99'
//         ]
//       }
//     ]
//   };

//   const industriesData = {
//     datasets: [
//       {
//         label: 'Industry 1',
//         data: [{ x: 1, y: 20, r: 15 }], // Replace with your actual data
//         backgroundColor: '#66b2ff'
//       },
//       {
//         label: 'Industry 2',
//         data: [{ x: 2, y: 25, r: 18 }], // Replace with your actual data
//         backgroundColor: '#ff9999'
//       },
//       // ... Add more industry data points here
//     ]
//   };

//   const bubbleOptions = {
//     scales: {
//       xAxes: [{
//         ticks: {
//           min: 0,
//           max: 5,
//           stepSize: 1,
//           callback: function(value, index, values) {
//             const industries = ['Industry 1', 'Industry 2', 'Industry 3', 'Industry 4', 'Industry 5'];
//             return industries[index];
//           }
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           beginAtZero: true,
//         }
//       }]
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const label = context.dataset.label || '';
//             const value = context.raw.y || '';
//             return `${label}: ${value}% (${context.raw.r}%)`;
//           }
//         }
//       }
//     }
//   };


//   const chartStyle = {
//     width: '500px',
//     height: '300px',
//   };

//   // Style for the grid container to arrange charts in a row
//   const gridRowStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     flexWrap: 'wrap', // Allows wrapping when the width of the parent is too narrow
//     gap: '20px', // Gap between chart containers
//     margin: '20px 0' // Margin above and below the chart row
//   };

//   return (
//     <div style={gridRowStyle}>
//       <div style={chartStyle}>
//         <h2>Employment Status</h2>
//         <Bar data={employmentData} />
//       </div>
//       <div style={chartStyle}>
//         <h2>Top 5 Industries</h2>
//         <Bubble data={industriesData} options={bubbleOptions} />
//       </div>
//     </div>
//   );
// };



// export default EconomicActivitiesChart;






































import React from 'react';
import { Bar, Bubble } from 'react-chartjs-2';
import 'chart.js/auto';

const EconomicActivitiesChart = () => {
  // Replace this with your actual employment status data
  const employmentStatusData = {
    labels: ['Employed', 'Unemployed', 'Student', 'Retired', 'Homemaker'],
    datasets: [
      {
        label: 'Employment Status',
        data: [60, 5, 20, 10, 5], // Example data
        backgroundColor: [
          '#66b2ff',
          '#ff9999',
          '#99ff99',
          '#c299ff',
          '#ffcc99',
        ],
      },
    ],
  };

  // Use the data from the image for the bubble chart
  const topIndustriesData = {
    datasets: [
      {
        label: 'Agriculture, forestry and fishing',
        data: [{ x: 1, y: 10, r: 24.9 }],
        backgroundColor: '#FF6384',
      },
      {
        label: 'Wholesale and retail trade',
        data: [{ x: 2, y: 10, r: 12.3 }],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Accommodation & food services activities',
        data: [{ x: 3, y: 10, r: 10.5 }],
        backgroundColor: '#FFCE56',
      },
      {
        label: 'Manufacturing',
        data: [{ x: 4, y: 10, r: 6.7 }],
        backgroundColor: '#4BC0C0',
      },
      {
        label: 'Education',
        data: [{ x: 5, y: 10, r: 6.3 }],
        backgroundColor: '#9966FF',
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      xAxes: {
        display: false, // Hides X-axis labels
      },
      yAxes: {
        display: false, // Hides Y-axis labels
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            let value = context.raw.r || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  const chartContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '20px',
    marginBottom: '20px',
  };

  const chartStyle = {
    width: '500px',
    height: '300px',
  };

  return (
    <div style={chartContainerStyle}>
      <div style={chartStyle}>
        <h2>Employment Status</h2>
        <Bar data={employmentStatusData} />
      </div>
      <div style={chartStyle}>
        <h2>Top 5 Industries by Employee Count</h2>
        <Bubble data={topIndustriesData} options={bubbleChartOptions} />
      </div>
    </div>
  );
};

export default EconomicActivitiesChart;
