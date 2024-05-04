import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './householdchart.css'; // Import the CSS


const HouseholdChart = () => {
  // Bar chart data for household types
  const barChartData = {
    labels: ['Nuclear family', 'Extended family', 'Other types of sharing'],
    datasets: [
      {
        label: 'Household Types',
        data: [77.2, 21.0, 1.8],
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
      }
    ]
  };

  // Pie chart data for internet and satellite TV
  const pieChartData = {
    labels: ['Home Internet', 'Satellite TV (ASTRO)'],
    datasets: [
      {
        label: 'Internet and TV',
        data: [16.8, 61.3],
        backgroundColor: ['#ffcc00', '#3366cc'],
      }
    ]
  };

  // Radial (Doughnut) chart data for car ownership
  const radialChartData = {
    labels: ['At least one car or motorcycle', 'No car or motorcycle'],
    datasets: [
      {
        label: 'Vehicle Ownership',
        data: [81.2, 18.8],
        backgroundColor: ['#ff6384', '#c9cbcf'],
      }
    ]
  };

  return (
    <div>
        <div className="grid-container">
      <div>
        <h2>Household Types</h2>
        <Bar data={barChartData} options={{ indexAxis: 'y' }} />
      </div>
      <div>
        <h2>Internet and TV</h2>
        <Pie data={pieChartData} />
      </div>
      <div>
        <h2>Vehicle Ownership</h2>
        <Doughnut data={radialChartData} />
      </div>
      <div>
    </div>

    <div className="text-container">
        <h2>Ownership of Dwelling</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>68.5%</p>
      </div>
    </div>
    </div>
  );
};

export default HouseholdChart;
