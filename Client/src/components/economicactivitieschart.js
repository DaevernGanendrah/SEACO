

// import React from 'react';
// import { Bar, Bubble } from 'react-chartjs-2';
// import 'chart.js/auto';

// const EconomicActivitiesChart = () => {
//   // Replace this with your actual employment status data
//   const employmentStatusData = {
//     labels: ['Employed', 'Unemployed', 'Student', 'Retired', 'Homemaker'],
//     datasets: [
//       {
//         label: 'Employment Status',
//         data: [60, 5, 20, 10, 5], // Example data
//         backgroundColor: [
//           '#66b2ff',
//           '#ff9999',
//           '#99ff99',
//           '#c299ff',
//           '#ffcc99',
//         ],
//       },
//     ],
//   };

//   // Use the data from the image for the bubble chart
//   const topIndustriesData = {
//     datasets: [
//       {
//         label: 'Agriculture, forestry and fishing',
//         data: [{ x: 1, y: 10, r: 24.9 }],
//         backgroundColor: '#FF6384',
//       },
//       {
//         label: 'Wholesale and retail trade',
//         data: [{ x: 2, y: 10, r: 12.3 }],
//         backgroundColor: '#36A2EB',
//       },
//       {
//         label: 'Accommodation & food services activities',
//         data: [{ x: 3, y: 10, r: 10.5 }],
//         backgroundColor: '#FFCE56',
//       },
//       {
//         label: 'Manufacturing',
//         data: [{ x: 4, y: 10, r: 6.7 }],
//         backgroundColor: '#4BC0C0',
//       },
//       {
//         label: 'Education',
//         data: [{ x: 5, y: 10, r: 6.3 }],
//         backgroundColor: '#9966FF',
//       },
//     ],
//   };

//   const bubbleChartOptions = {
//     scales: {
//       xAxes: {
//         display: false, // Hides X-axis labels
//       },
//       yAxes: {
//         display: false, // Hides Y-axis labels
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'bottom',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             let label = context.dataset.label || '';
//             let value = context.raw.r || 0;
//             return `${label}: ${value}%`;
//           },
//         },
//       },
//     },
//   };

//   const chartContainerStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     gap: '20px',
//     marginBottom: '20px',
//   };

//   const chartStyle = {
//     width: '500px',
//     height: '300px',
//   };

//   return (
//     <div style={chartContainerStyle}>
//       <div style={chartStyle}>
//         <h2>Employment Status</h2>
//         <Bar data={employmentStatusData} />
//       </div>
//       <div style={chartStyle}>
//         <h2>Top 5 Industries by Employee Count</h2>
//         <Bubble data={topIndustriesData} options={bubbleChartOptions} />
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
          'rgba(102, 178, 255, 0.2)',
          'rgba(255, 153, 153, 0.2)',
          'rgba(153, 255, 153, 0.2)',
          'rgba(194, 153, 255, 0.2)',
          'rgba(255, 204, 153, 0.2)'
        ],
        borderColor: [
          'rgba(102, 178, 255, 1)',
          'rgba(255, 153, 153, 1)',
          'rgba(153, 255, 153, 1)',
          'rgba(194, 153, 255, 1)',
          'rgba(255, 204, 153, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(102, 178, 255, 1)',
          'rgba(255, 153, 153, 1)',
          'rgba(153, 255, 153, 1)',
          'rgba(194, 153, 255, 1)',
          'rgba(255, 204, 153, 1)'
        ]
      },
    ],
  };

  const employmentStatusOptions = {
    scales: {
      x: {
        grid: {
          display: false // Removes grid lines from the x-axis
        }
      },
      y: {
        grid: {
          display: false // Removes grid lines from the y-axis
        }
      }
    },
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    }
  };

  // Use the data from the image for the bubble chart
  const topIndustriesData = {
    datasets: [
      {
        label: 'Agriculture, forestry and fishing',
        data: [{ x: 1, y: 10, r: 24.9 }],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Wholesale and retail trade',
        data: [{ x: 2, y: 10, r: 12.3 }],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Accommodation & food services activities',
        data: [{ x: 3, y: 10, r: 10.5 }],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Manufacturing',
        data: [{ x: 4, y: 10, r: 6.7 }],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Education',
        data: [{ x: 5, y: 10, r: 6.3 }],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        display: false, // Hides X-axis labels
      },
      y: {
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
    display: 'grid',
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
        <Bar data={employmentStatusData} options={employmentStatusOptions} />
      </div>
      <div style={chartStyle}>
        <h2>Top 5 Industries by Employee Count</h2>
        <Bubble data={topIndustriesData} options={bubbleChartOptions} />
      </div>
    </div>
  );
};

export default EconomicActivitiesChart;

