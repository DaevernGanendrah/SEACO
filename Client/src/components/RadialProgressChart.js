import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './householdchart.css'; 

const HouseholdChart = () => {
  const barChartData = {
    labels: ['Malay', 'Chinese', 'Indian', 'Orang Asli'],
    datasets: [
      {
        label: 'Ethnic Composition',
        data: [62.5, 25.9, 8.4, 2.3],
        backgroundColor: [
          'rgba(62, 149, 205, 0.2)',
          'rgba(142, 94, 162, 0.2)',
          'rgba(60, 186, 159, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(62, 149, 205, 1)',
          'rgba(142, 94, 162, 1)',
          'rgba(60, 186, 159, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(62, 149, 205, 1)',
          'rgba(142, 94, 162, 1)',
          'rgba(60, 186, 159, 1)',
          'rgba(255, 99, 132, 1)'
        ]
      }
    ]
  };

  const barChartOptions = {
    indexAxis: 'y',
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += `${context.parsed.x}%`;
            return label;
          }
        }
      }
    },
    maintainAspectRatio: true,
    aspectRatio: 1
  };

  const pieChartData = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [49.1, 50.9],
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
    labels: ['Senior Citizens (65+)', 'Non-Seniors (<65)'],
    datasets: [
      {
        label: 'Age Group Distribution',
        data: [13.5, 86.5],
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
    aspectRatio: 1,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            const value = context.parsed;
            if (label) {
              label += ': ';
            }
            label += `${value}%`;
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

      <div style={{ width: '100%', height: '400px', marginBottom: '10%' }}>
        <h2>Ethnic Composition</h2>
        <Bar data={barChartData} options={barChartOptions} />
      </div>

      <div className="grid-container">
        <div style={{ width: '50%', height: 'auto' }}>
          <h2>Gender Distribution</h2>
          <Pie data={pieChartData} options={commonOptions} />
        </div>

        <div style={{ width: '50%', height: 'auto' }}>
          <h2>Senior Population</h2>
          <Doughnut data={radialChartData} options={commonOptions} />
        </div>
      </div>

    </div>
  );
};

export default HouseholdChart;
