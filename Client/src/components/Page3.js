// import React from 'react'; 


// function Page3() {
//     return (
//       <div>
//         <h1>This is Page 3</h1>
//       </div>
//     );
//   }
//   export default Page3;







import React from 'react';
import './Page3.css'; // Assuming you're styling with CSS
import { useNavigate } from 'react-router-dom'; 

function Page3() {
    const navigate = useNavigate();
  return (
    <div className="page3-container">
      {/* <h1>This is Page 3</h1> */}
      <div className="buttons-container">
        {/* <button className="inputBx3">Community Briefs</button> */}
        <button onClick={() => navigate('/dashboard')} className="inputBx3">Community Briefs</button>
        <button className="inputBx3">Health Record 2013</button>
        <button className="inputBx3">Health Record 2018</button>
      </div>
    </div>
  );
}
export default Page3;


// className='navigateButton'