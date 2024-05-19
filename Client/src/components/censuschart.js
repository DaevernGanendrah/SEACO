// import React, { useRef, useEffect } from 'react';
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   BarController,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register all necessary components for the chart
// Chart.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   BarController,
//   Tooltip,
//   Legend
// );


// const CensusChart = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     chartInstance.current = new Chart(chartRef.current, {
//       type: 'bar',
//       data: {
//         labels: ['Agreed', 'Refused', 'Not at Home', 'Unoccupied'],
//         datasets: [{
//           label: 'Response Types',
//           data: [11594, 603, 4382, 2192],
//           backgroundColor: ['#00a2ff', '#4dff4d', '#ff4dff', 'red']
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);

//   // Set custom height here directly in the canvas element
//   return <canvas ref={chartRef} width="500" height="50" />;
// };

// export default CensusChart;


import React, { useRef, useEffect } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend
} from 'chart.js';

// Register all necessary components for the chart
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend
);

const CensusChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Agreed', 'Refused', 'Not at Home', 'Unoccupied'],
        datasets: [{
          label: 'Response Types',
          data: [11594, 603, 4382, 2192],
          backgroundColor: ['#00a2ff', '#4dff4d', '#ff4dff', 'red']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false // This will hide the grid lines on the x-axis
            }
          },
          y: {
            grid: {
              display: false // This will hide the grid lines on the y-axis
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Set custom dimensions here directly in the canvas element
  // Adjust the size to smaller dimensions as needed
  return <canvas ref={chartRef} width="200" height="200" style={{ maxWidth: '70%'}} />;
};

export default CensusChart;

