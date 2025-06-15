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
          backgroundColor: [
            'rgba(0, 162, 255, 0.2)', 
            'rgba(77, 255, 77, 0.2)', 
            'rgba(255, 77, 255, 0.2)', 
            'rgba(255, 0, 0, 0.2)' 
          ],
          borderColor: [
            'rgba(0, 162, 255, 1)', 
            'rgba(77, 255, 77, 1)', 
            'rgba(255, 77, 255, 1)', 
            'rgba(255, 0, 0, 1)' 
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false 
            }
          },
          y: {
            grid: {
              display: false 
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
  return <canvas ref={chartRef} width="200px" height="200px" style={{ maxWidth: '70%'}} />;
};

export default CensusChart;


