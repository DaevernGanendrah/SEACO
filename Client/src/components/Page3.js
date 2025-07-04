import React from 'react';
import './Page3.css'; 
import { useNavigate } from 'react-router-dom'; 

function Page3() {
    const navigate = useNavigate();
  return (
    <div className="page3-container">
      {/* <h1>This is Page 3</h1> */}
      <div className="buttons-container">
        {/* <button className="inputBx3">Community Briefs</button> */}
        <button onClick={() => navigate('/dashboard')} className="inputBx3">Community Briefs</button>
        <button onClick={() => navigate('/healthchart2013')} className="inputBx3">Health Round 2013</button>
        <button onClick={() => navigate('/healthchart2018')} className="inputBx3">Health Round 2018</button>
      </div>
    </div>
  );
}
export default Page3;
