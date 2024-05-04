// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const CensusChart = () => {
//   const chartData = {
//     labels: ['Agreed', 'Refused', 'Not at Home', 'Unoccupied'],
//     datasets: [
//       {
//         label: 'Response Types',
//         data: [11594, 603, 4382, 2192],
//         backgroundColor: ['#00a2ff', '#4dff4d', '#ff4dff', 'red']
//       }
//     ]
//   };

//   return (
//     <div>
//       <Bar data={chartData} options={{ responsive: true }} />
//     </div>
//   );
// };

// export default CensusChart;





// import React, { useRef, useEffect } from 'react';
// import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// // Register the components
// Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

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
//         responsive: true, // Make sure to keep responsive true if you want it to resize responsively
//         maintainAspectRatio: false // Set this to false to allow custom dimensions without maintaining the aspect ratio
//       }
//     });

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);

//   return <canvas ref={chartRef} width="800" height="100" />; // Set custom dimensions here
// };

// export default CensusChart;






















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
//     // Ensure any existing chart instances are destroyed before creating new ones
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     // Initialize the chart instance
//     chartInstance.current = new Chart(chartRef.current, {
//       type: 'bar', // Specifies that this is a bar chart
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
//         maintainAspectRatio: false // Adjust aspect ratio if needed
//       }
//     });

//     // Cleanup function to destroy chart instance when component unmounts or updates
//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []); // Dependencies array is empty, meaning this effect runs once on mount and once on unmount

//   return <canvas ref={chartRef} />;
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
        maintainAspectRatio: false
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Set custom height here directly in the canvas element
  return <canvas ref={chartRef} width="500" height="50" />;
};

export default CensusChart;
