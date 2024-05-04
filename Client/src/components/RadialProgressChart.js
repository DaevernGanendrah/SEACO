import React from 'react';

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
};

const RadialProgressChart = ({ size, progressValues }) => {
  const strokeWidth = 20;
  const center = size / 3;
  const fontSize = 20;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ backgroundColor: '#111' }}>
      <g transform={`translate(${center}, ${center})`}>
        {progressValues.map((progress, index) => {
          const radius = center - (strokeWidth / 2) - (index * strokeWidth);
          const circumference = 2 * Math.PI * radius;
          const startAngle = 0;
          const endAngle = 360 * (progress.value / 100);
          const arcPath = describeArc(0, 0, radius, startAngle, endAngle);

          return (
            <React.Fragment key={index}>
              <path
                d={arcPath}
                fill="none"
                stroke={progress.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: circumference * (1 - progress.value / 100)
                }}
              />
              <text
                x="0"
                y={-(radius - strokeWidth / 2)}
                fill="#fff"
                fontSize={fontSize}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="radial-progress-text"
              >
                {`${progress.value}%`}
              </text>
            </React.Fragment>
          );
        })}
      </g>
    </svg>
  );
};

export default RadialProgressChart;
















// import React from 'react';

// const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//   const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
//   return {
//     x: centerX + radius * Math.cos(angleInRadians),
//     y: centerY + radius * Math.sin(angleInRadians)
//   };
// };

// const describeArc = (x, y, radius, startAngle, endAngle) => {
//   const start = polarToCartesian(x, y, radius, endAngle);
//   const end = polarToCartesian(x, y, radius, startAngle);
//   const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
//   return [
//     'M', start.x, start.y,
//     'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
//   ].join(' ');
// };

// const RadialProgressChart = ({ size, progressValues }) => {
//   const strokeWidth = 20;
//   const center = size / 2;
//   const fontSize = 20;
//   return (
//     <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ backgroundColor: '#111' }}>
//       <g transform={`translate(${center}, ${center})`}>
//         {progressValues.map((progress, index) => {
//           const radius = center - (strokeWidth / 2) - (index * strokeWidth);
//           const circumference = 2 * Math.PI * radius;
//           const startAngle = 0;
//           const endAngle = 360 * (progress.value / 100);
//           const arcPath = describeArc(0, 0, radius, startAngle, endAngle);

//           return (
//             <React.Fragment key={index}>
//               <path
//                 d={arcPath}
//                 fill="none"
//                 stroke={progress.color}
//                 strokeWidth={strokeWidth}
//                 strokeLinecap="round"
//                 style={{
//                   strokeDasharray: circumference,
//                   strokeDashoffset: circumference * (1 - progress.value / 100),
//                   transition: 'stroke-dashoffset 0.6s ease 0s'
//                 }}
//               />
//               <text
//                 x="0"
//                 y={-(radius - strokeWidth / 2)}
//                 fill="#fff"
//                 fontSize={fontSize}
//                 textAnchor="middle"
//                 alignmentBaseline="middle"
//                 className="radial-progress-text"
//               >
//                 {`${progress.value}%`}
//               </text>
//             </React.Fragment>
//           );
//         })}
//       </g>
//     </svg>
//   );
// };

// export default RadialProgressChart;












































// import React from 'react';

// const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//   const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
//   return {
//     x: centerX + radius * Math.cos(angleInRadians),
//     y: centerY + radius * Math.sin(angleInRadians)
//   };
// };

// const describeArc = (x, y, radius, startAngle, endAngle) => {
//   const start = polarToCartesian(x, y, radius, endAngle);
//   const end = polarToCartesian(x, y, radius, startAngle);
//   const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
//   return [
//     'M', start.x, start.y,
//     'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
//   ].join(' ');
// };

// const RadialProgressChart = ({ size, progressValues }) => {
//   const strokeWidth = 20;
//   const center = size / 2;
//   const fontSize = 20;

//   return (
//     <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ backgroundColor: '#111' }}>
//       <g transform={`translate(${center}, ${center})`}>
//         {progressValues.map((progress, index) => {
//           const radius = center - (strokeWidth / 2) - (index * strokeWidth);
//           const circumference = 2 * Math.PI * radius;
//           const startAngle = 0;
//           const endAngle = 360 * (progress.value / 100);
//           const arcPath = describeArc(0, 0, radius, startAngle, endAngle);

//           return (
//             <React.Fragment key={index}>
//               <path
//                 d={arcPath}
//                 fill="none"
//                 stroke={progress.color}
//                 strokeWidth={strokeWidth}
//               />
//               <text
//                 x="0"
//                 y={-(radius - strokeWidth / 2)}
//                 fill="#fff"
//                 fontSize={fontSize}
//                 textAnchor="middle"
//                 alignmentBaseline="middle"
//               >
//                 {`${progress.value}%`}
//               </text>
//             </React.Fragment>
//           );
//         })}
//       </g>
//     </svg>
//   );
// };

// export default RadialProgressChart;
