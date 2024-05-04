import React from 'react';

const BarChart = ({ chartData, chartWidth, chartHeight }) => {
  const barWidth = 40;
  const barSpacing = 100;
  const maxValue = Math.max(...chartData.datasets[0].data);

  return (
    <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ backgroundColor: '#111' }}>
      {chartData.labels.map((label, index) => {
        const barHeight = (chartData.datasets[0].data[index] / maxValue) * (chartHeight - 20);
        const y = chartHeight - barHeight;
        return (
          <g key={label} transform={`translate(${index * barSpacing}, ${y})`}>
            <rect
              width={barWidth}
              height={barHeight}
              fill={chartData.datasets[0].backgroundColor[index]}
            />
            <text
              x={barWidth / 2}
              y={-5}
              fill="#fff"
              fontSize="14"
              textAnchor="middle"
              alignmentBaseline="after-edge"
            >
              {`${chartData.datasets[0].data[index]}%`}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default BarChart;












// import React from 'react';

// const BarChart = ({ chartData, chartWidth, chartHeight }) => {
//   const barWidth = 40;
//   const barSpacing = 100;
//   const maxValue = Math.max(...chartData.datasets[0].data);

//   return (
//     <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ backgroundColor: '#111' }}>
//       {chartData.labels.map((label, index) => {
//         const barHeight = (chartData.datasets[0].data[index] / maxValue) * (chartHeight - 20);
//         const y = chartHeight - barHeight;
//         return (
//             <g key={label} transform={`translate(${index * barSpacing}, ${y})`}>
//               <rect
//                 width={barWidth}
//                 height={0} // Initialize to zero height for animation
//                 fill={chartData.datasets[0].backgroundColor[index]}
//                 style={{
//                   transition: 'height 0.5s ease-in-out',
//                   height: `${barHeight}px` // Transition to this height
//                 }}
//               />
//               <text
//                 x={barWidth / 2}
//                 y={-5}
//                 fill="#fff"
//                 fontSize="14"
//                 textAnchor="middle"
//                 alignmentBaseline="after-edge"
//               >
//                 {`${chartData.datasets[0].data[index]}%`}
//               </text>
//             </g>
//           );
//       })}
//     </svg>
//   );
// };

// export default BarChart;









// import React from 'react';

// const BarChart = ({ chartData, chartWidth, chartHeight }) => {
//   const barWidth = 40;
//   const barSpacing = 100;
//   const maxValue = Math.max(...chartData.datasets[0].data);

//   return (
//     <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ backgroundColor: '#111' }}>
//       {chartData.labels.map((label, index) => {
//         const barHeight = (chartData.datasets[0].data[index] / maxValue) * (chartHeight - 20);
//         const y = chartHeight - barHeight;
//         return (
//           <g key={label} transform={`translate(${index * barSpacing}, ${chartHeight})`}>
//             <rect
//               width={barWidth}
//               height={0}
//               fill={chartData.datasets[0].backgroundColor[index]}
//               style={{
//                 transition: 'height 2s ease-out, transform 2s ease-out',
//                 transform: `translateY(-${barHeight}px)`
//               }}
//             />
//             <text
//               x={barWidth / 2}
//               y={-5}
//               fill="#fff"
//               fontSize="14"
//               textAnchor="middle"
//               alignmentBaseline="after-edge"
//               style={{
//                 transition: 'transform 2s ease-out',
//                 transform: `translateY(-${barHeight}px)`
//               }}
//             >
//               {`${chartData.datasets[0].data[index]}%`}
//             </text>
//           </g>
//         );
//       })}
//     </svg>
//   );
// };

// export default BarChart;
