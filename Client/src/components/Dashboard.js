import React from 'react';
import RadialProgressChart from './RadialProgressChart';
import BarChart from './BarChart';
import CensusChart from './censuschart';  
import './SEACO.css';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import HouseholdChart from './householdchart'; 
import HealthChart from './healthchart'; 
import EconomicActivitiesChart from './economicactivitieschart'; 

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: Array(6).fill(false),  
    };
  }

  toggleVisibility = (index) => {
    this.setState(prevState => ({
      isVisible: prevState.isVisible.map((visible, i) => i === index ? !visible : visible),
    }));
  };

  render() {
    const size = 300;
    const progressValues = [
      { name: 'Malay', color: '#00a2ff', value: 63 },
      { name: 'Chinese', color: '#4dff4d', value: 26 },
      { name: 'Indian', color: '#ff4dff', value: 9 },
      { name: 'Other', color: 'red', value: 2 }
    ];

    const barChartData = {
      labels: progressValues.map(p => p.name),
      datasets: [{
        data: progressValues.map(p => p.value),
        backgroundColor: progressValues.map(p => p.color)
      }]
    };

    const numbers = ["24,992", "10,364", "3,368", "902"];
    const dropdownNames = ["Census", "Economic Activities", "Household and Families", "Health", "People"];

    return (
      <div className="dashboard">
        <h1 className="community-briefs-title">Community Briefs</h1>
        {dropdownNames.map((name, index) => (
          <div key={index} className="accordion-section">
            <button className={`accordion-button ${this.state.isVisible[index] ? 'active' : ''}`} onClick={() => this.toggleVisibility(index)}>
              {name}
            </button>
            <div 
            className={`accordion-content ${this.state.isVisible[index] ? 'active' : ''}`}
            style={index === 0 ? { height: '1000px' } : {}}  
          >

              {index === 0 && <CensusChart />}
              {index === 1 && <EconomicActivitiesChart />}
              {index === 2 && <HouseholdChart />}
              {index === 3 && <HealthChart />}
              {index === 4 && <RadialProgressChart/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
