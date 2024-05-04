import React from 'react';
import { Bubble } from 'react-chartjs-2';
import 'chart.js/auto';

// Bubble chart data and options
const bubbleChartData = {
  datasets: [
    {
      label: 'Value',
      data: [
        { x: 1, y: 20, r: 5 },
        { x: 5, y: 15, r: 7 },
        { x: 15, y: 30, r: 10 },
        { x: 22, y: 12, r: 5 }
      ],
      backgroundColor: 'rgba(0, 123, 255, 0.5)'
    }
  ],
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16 // You can customize legend labels with font size here
          }
        }
      }
    }
  }
};

const BubbleChartComponent = () => {
  return <Bubble data={bubbleChartData} />;
};

export default BubbleChartComponent;
