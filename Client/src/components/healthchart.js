import React from 'react';
import { Bar, Bubble } from 'react-chartjs-2';
import 'chart.js/auto';

const HealthChart = () => {
  const barChartData = {
    labels: ['0', '1', '2', '3', '4', '5+'],
    datasets: [
      {
        label: 'Male',
        data: [62.3, 15, 10, 5, 3, 4.7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: [58, 18, 12, 6, 3.5, 2.5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const bubbleChartData = {
    datasets: [
      {
        label: 'Hypertension',
        data: [{ x: 1, y: 29.1, r: 15 }],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Diabetes',
        data: [{ x: 2, y: 11.7, r: 10 }],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Heart Disease',
        data: [{ x: 3, y: 4.5, r: 8 }],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Stroke',
        data: [{ x: 4, y: 1.6, r: 6 }],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Arthritis',
        data: [{ x: 5, y: 5.0, r: 9 }],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Kidney Disease',
        data: [{ x: 6, y: 1.3, r: 5 }],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
      {
        label: 'Cancer',
        data: [{ x: 7, y: 0.6, r: 4 }],
        backgroundColor: 'rgba(199, 199, 199, 0.6)',
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            const diseases = ['Hypertension', 'Diabetes', 'Heart Disease', 'Stroke', 'Arthritis', 'Kidney Disease', 'Cancer'];
            return diseases[index - 1];
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += ' ' + context.parsed.y + '%';
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '70%', margin: 'auto' }}>
      <div style={{ marginBottom: '10%', width: '100%', height: '300px' }}>
        <h2>Percentage of Reported Chronic Diseases</h2>
       <Bubble data={bubbleChartData} options={bubbleChartOptions} />
      </div>
      <div style={{ marginBottom: '15%', width: '100%', height: '300px' }}>
          <h2>Number of Chronic Diseases</h2>
     <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default HealthChart;

