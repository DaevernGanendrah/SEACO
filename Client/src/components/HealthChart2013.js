import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const HealthChart2013 = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://seaco.onrender.com/api/health/2013");
        if (!response.ok) {
          throw new Error(`API Response Status: ${response.status}`);
        }
        const data = await response.json();
        setChartData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Initialize Chart
  useEffect(() => {
    if (chartData && !loading) {
      const ctx = document.getElementById("Health2013").getContext("2d");

      // Create a bar chart
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.map((item) => item.subdistrict), // X-axis labels
          datasets: [
            {
              label: "Agreed (%)",
              data: chartData.map((item) => item.agreed),
              backgroundColor: "rgba(75, 192, 192, 0.6)"
            },
            {
              label: "Unwilling (%)",
              data: chartData.map((item) => item.unwilling),
              backgroundColor: "rgba(255, 99, 132, 0.6)"
            },
            {
              label: "Moved (%)",
              data: chartData.map((item) => item.moved),
              backgroundColor: "rgba(255, 206, 86, 0.6)"
            },
            {
              label: "Passed Away (%)",
              data: chartData.map((item) => item.passedAway),
              backgroundColor: "rgba(54, 162, 235, 0.6)"
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Health Data for 2013"
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Subdistricts"
              }
            },
            y: {
              title: {
                display: true,
                text: "Percentage"
              },
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [chartData, loading]);

  // Render
  if (loading) return <div>Loading chart data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <canvas id="healthChart2013" width="400" height="200"></canvas>
    </div>
  );
};

export default HealthChart2013;
































// import React, { useState, useEffect, useRef } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './Dashboard.css';

// const HealthChart2013 = () => {
//   const [selectedSubdistrict, setSelectedSubdistrict] = useState('BEKOK');
//   const [data2013, setData2013] = useState({});
//   const [subdistrictData, setSubdistrictData] = useState(null);
//   const mapRef = useRef(null);

//   const subdistrictCoordinates = {
//     BEKOK: [2.3869, 103.0544],
//     CHAAH: [2.2384, 103.0573],
//     GEMEREH: [2.5048, 102.8093],
//     JABI: [2.5085, 102.8193],
//     SUNGAI_SEGAMAT: [2.4873, 102.8212],
//     Overall: [2.5147, 102.8151],
//   };

//   useEffect(() => {
//     const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://seaco.onrender.com';
//     console.log('Backend URL:', backendUrl); // Log the backend URL

//     fetch(`${backendUrl}/api/health/2013`)
//       .then((response) => {
//         console.log('API Response Status:', response.status); // Log response status
//         return response.json();
//       })
//       .then((data) => {
//         console.log('API Response Data:', data); // Log the raw response data
//         if (data && data.length > 0) {
//           const healthData = data[0]?.subdistricts;
//           console.log('Parsed Health Data:', healthData); // Log the parsed health data
//           setData2013(healthData);
//           setSubdistrictData(healthData[selectedSubdistrict]);
//         } else {
//           console.warn('No data returned from API');
//         }
//       })
//       .catch((error) => console.error('Error fetching 2013 data:', error));
//   }, []);

//   useEffect(() => {
//     console.log('Selected Subdistrict:', selectedSubdistrict); // Log the selected subdistrict
//     if (data2013[selectedSubdistrict]) {
//       console.log('Data for Selected Subdistrict:', data2013[selectedSubdistrict]); // Log subdistrict data
//       setSubdistrictData(data2013[selectedSubdistrict]);
//     } else {
//       console.warn(`No data found for subdistrict: ${selectedSubdistrict}`);
//     }

//     if (mapRef.current) {
//       const coordinates = subdistrictCoordinates[selectedSubdistrict] || subdistrictCoordinates.Overall;
//       console.log('Map Coordinates for Subdistrict:', coordinates); // Log coordinates
//       mapRef.current.setView(coordinates, 14, {
//         animate: true,
//         duration: 0.5,
//       });
//     }
//   }, [selectedSubdistrict, data2013]);

//   useEffect(() => {
//     if (!mapRef.current) {
//       console.log('Initializing Map'); // Log map initialization
//       mapRef.current = L.map('map2013').setView(subdistrictCoordinates.Overall, 10);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         minZoom: 5,
//       }).addTo(mapRef.current);

//       fetch('SEACO.geojson')
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Loaded GeoJSON Data:', data); // Log GeoJSON data
//           const segamatFeature = data.features.filter(
//             (feature) => feature.properties.district === 'Segamat'
//           );

//           L.geoJSON(segamatFeature, {
//             style: {
//               color: '#FF0000',
//               fillColor: '#ffffff',
//               fillOpacity: 0.5,
//               weight: 2,
//             },
//           }).addTo(mapRef.current);

//           Object.keys(subdistrictCoordinates).forEach((subdistrict) => {
//             if (subdistrict !== 'Overall') {
//               const marker = L.marker(subdistrictCoordinates[subdistrict])
//                 .addTo(mapRef.current)
//                 .bindPopup(subdistrict.replace('_', ' '));

//               marker.on('click', () => {
//                 console.log('Marker Clicked:', subdistrict); // Log marker click
//                 setSelectedSubdistrict(subdistrict);
//               });
//             }
//           });
//         })
//         .catch((error) => console.log('Error loading GeoJSON data:', error));
//     }
//   }, []);

//   const categoryMapping = {
//     Sex: ['Male', 'Female'],
//     Ethnicity: ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//     'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//   };

//   const prepareChartData = (category) => {
//     console.log('Preparing Chart Data for Category:', category); // Log category
//     if (!subdistrictData) {
//       console.warn('No Subdistrict Data Available for Chart Preparation');
//       return null;
//     }

//     const labels = categoryMapping[category];
//     const values = labels.map((label) => subdistrictData[label]?.n || 0);
//     const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//     console.log(`Chart Data for ${category}:`, { labels, values, percentages });

//     return {
//       barData: {
//         labels,
//         datasets: [
//           {
//             label: `${category} distribution`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.4)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       pieData: {
//         labels,
//         datasets: [
//           {
//             data: percentages,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//     };
//   };

//   const categories = [
//     { name: 'Sex', chartType: 'pie' },
//     { name: 'Ethnicity', chartType: 'bar' },
//     { name: 'Education level', chartType: 'bar' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <h2>Subdistricts</h2>
//         <ul>
//           {Object.keys(subdistrictCoordinates).map((district) => (
//             <li key={district}>
//               <button onClick={() => setSelectedSubdistrict(district)}>
//                 {district.replace('_', ' ')}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="main-content">
//         <header className="navbar">
//           <h1>
//             HEALTH 2013 SUMMARY FOR {selectedSubdistrict.replace('_', ' ').toUpperCase()}
//           </h1>
//         </header>

//         <div className="map-container">
//           <div id="map2013" style={{ height: '400px', marginBottom: '20px' }}></div>
//         </div>

//         <div className="charts-container">
//           {categories.map((category) => {
//             const chartData = prepareChartData(category.name);
//             console.log('Chart Data Prepared:', chartData); // Log chart data
//             if (!chartData) return null;

//             return (
//               <div key={category.name} className="chart">
//                 <h3>{category.name}</h3>
//                 <div style={{ height: '400px', width: '100%' }}>
//                   {category.chartType === 'bar' && (
//                     <Bar data={chartData.barData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'pie' && (
//                     <Pie data={chartData.pieData} options={{ maintainAspectRatio: false }} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthChart2013;








// import React, { useState, useEffect, useRef } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './Dashboard.css';

// const HealthChart2013 = () => {
//   const [selectedSubdistrict, setSelectedSubdistrict] = useState('BEKOK');
//   const [data2013, setData2013] = useState({});
//   const [subdistrictData, setSubdistrictData] = useState(null);
//   const mapRef = useRef(null);

//   const subdistrictCoordinates = {
//     BEKOK: [2.3869, 103.0544],
//     CHAAH: [2.2384, 103.0573],
//     GEMEREH: [2.5048, 102.8093],
//     JABI: [2.5085, 102.8193],
//     SUNGAI_SEGAMAT: [2.4873, 102.8212],
//     Overall: [2.5147, 102.8151],
//   };

//   useEffect(() => {
//     const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://seaco.onrender.com';
//     fetch(`${backendUrl}/api/health/2013`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           const healthData = data[0]; // Access the top-level data object
//           console.log('Fetched Health Data:', healthData);
//           setData2013(healthData);
//           setSubdistrictData(healthData[selectedSubdistrict]); // Set default subdistrict data
//         }
//       })
//       .catch((error) => console.error('Error fetching 2013 data:', error));
//   }, []);

//   useEffect(() => {
//     if (data2013[selectedSubdistrict]) {
//       setSubdistrictData(data2013[selectedSubdistrict]);
//     }
//     if (mapRef.current) {
//       const coordinates = subdistrictCoordinates[selectedSubdistrict] || subdistrictCoordinates.Overall;
//       mapRef.current.setView(coordinates, 14, {
//         animate: true,
//         duration: 0.5,
//       });
//     }
//   }, [selectedSubdistrict, data2013]);

//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = L.map('map2013').setView(subdistrictCoordinates.Overall, 10);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         minZoom: 5,
//       }).addTo(mapRef.current);

//       fetch('SEACO.geojson')
//         .then((response) => response.json())
//         .then((data) => {
//           const segamatFeature = data.features.filter(
//             (feature) => feature.properties.district === 'Segamat'
//           );

//           L.geoJSON(segamatFeature, {
//             style: {
//               color: '#FF0000',
//               fillColor: '#ffffff',
//               fillOpacity: 0.5,
//               weight: 2,
//             },
//           }).addTo(mapRef.current);

//           Object.keys(subdistrictCoordinates).forEach((subdistrict) => {
//             if (subdistrict !== 'Overall') {
//               const marker = L.marker(subdistrictCoordinates[subdistrict])
//                 .addTo(mapRef.current)
//                 .bindPopup(subdistrict.replace('_', ' '));

//               marker.on('click', () => {
//                 setSelectedSubdistrict(subdistrict);
//               });
//             }
//           });
//         })
//         .catch((error) => console.log('Error loading the GeoJSON data: ' + error));
//     }
//   }, []);

//   const categoryMapping = {
//     Sex: ['Male', 'Female'],
//     Ethnicity: ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//     'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//   };

//   const prepareChartData = (category) => {
//     if (!subdistrictData) {
//       console.warn('No Subdistrict Data Available:', subdistrictData);
//       return null;
//     }

//     const labels = categoryMapping[category];
//     const values = labels.map((label) => subdistrictData[label]?.n || 0);
//     const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//     console.log(`Prepared Chart Data for ${category}:`, { labels, values, percentages });

//     return {
//       barData: {
//         labels,
//         datasets: [
//           {
//             label: `${category} distribution`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.4)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       pieData: {
//         labels,
//         datasets: [
//           {
//             data: percentages,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//     };
//   };

//   const categories = [
//     { name: 'Sex', chartType: 'pie' },
//     { name: 'Ethnicity', chartType: 'bar' },
//     { name: 'Education level', chartType: 'bar' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <h2>Subdistricts</h2>
//         <ul>
//           {Object.keys(subdistrictCoordinates).map((district) => (
//             <li key={district}>
//               <button onClick={() => setSelectedSubdistrict(district)}>
//                 {district.replace('_', ' ')}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="main-content">
//         <header className="navbar">
//           <h1>
//             HEALTH 2013 SUMMARY FOR {selectedSubdistrict.replace('_', ' ').toUpperCase()}
//           </h1>
//         </header>

//         <div className="map-container">
//           <div id="map2013" style={{ height: '400px', marginBottom: '20px' }}></div>
//         </div>

//         <div className="charts-container">
//           {categories.map((category) => {
//             const chartData = prepareChartData(category.name);
//             if (!chartData) return null;

//             return (
//               <div key={category.name} className="chart">
//                 <h3>{category.name}</h3>
//                 <div style={{ height: '400px', width: '100%' }}>
//                   {category.chartType === 'bar' && (
//                     <Bar data={chartData.barData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'pie' && (
//                     <Pie data={chartData.pieData} options={{ maintainAspectRatio: false }} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthChart2013;






















// import React, { useState, useEffect, useRef } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './Dashboard.css';

// const HealthChart2013 = () => {
//   const [selectedSubdistrict, setSelectedSubdistrict] = useState('BEKOK');
//   const [data2013, setData2013] = useState({});
//   const [subdistrictData, setSubdistrictData] = useState(null);
//   const mapRef = useRef(null);

//   const subdistrictCoordinates = {
//     BEKOK: [2.3869, 103.0544],
//     CHAAH: [2.2384, 103.0573],
//     GEMEREH: [2.5048, 102.8093],
//     JABI: [2.5085, 102.8193],
//     SUNGAI_SEGAMAT: [2.4873, 102.8212],
//     Overall: [2.5147, 102.8151],
//   };

//   // // Fetch and organize data
//   // useEffect(() => {
//   //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://seaco.onrender.com';
//   //   fetch(`${backendUrl}/api/health/2013`)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       const organizedData = {};
//   //       data.forEach((item) => {
//   //         if (item._id && item.data) {
//   //           organizedData[item._id] = item.data;
//   //         }
//   //       });
//   //       setData2013(organizedData);
//   //       setSubdistrictData(organizedData[selectedSubdistrict]);
//   //     })
//   //     .catch((error) => console.error('Error fetching 2013 data:', error));
//   // }, []);

//   useEffect(() => {
//   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://seaco.onrender.com';
//   fetch(`${backendUrl}/api/health/2013`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data && data.length > 0) {
//         const healthData = data[0].subdistricts; // Extract subdistricts data
//         console.log('Fetched Subdistrict Data:', healthData);
//         setData2013(healthData);
//         setSubdistrictData(healthData[selectedSubdistrict]); // Initialize with selected subdistrict
//       }
//     })
//     .catch((error) => console.error('Error fetching 2013 data:', error));
// }, []);


//   // // Update subdistrict data and map dynamically
//   // useEffect(() => {
//   //   if (data2013[selectedSubdistrict]) {
//   //     setSubdistrictData(data2013[selectedSubdistrict]);
//   //   }
//   //   if (mapRef.current) {
//   //     const coordinates = subdistrictCoordinates[selectedSubdistrict] || subdistrictCoordinates.Overall;
//   //     mapRef.current.setView(coordinates, 14, {
//   //       animate: true,
//   //       duration: 0.5,
//   //     });
//   //   }
//   // }, [selectedSubdistrict, data2013]);

//   useEffect(() => {
//   if (data2013[selectedSubdistrict]) {
//     setSubdistrictData(data2013[selectedSubdistrict]);
//   }
//   if (mapRef.current) {
//     const coordinates = subdistrictCoordinates[selectedSubdistrict] || subdistrictCoordinates.Overall;
//     mapRef.current.setView(coordinates, 14, {
//       animate: true,
//       duration: 0.5,
//     });
//   }
// }, [selectedSubdistrict, data2013]);

//   // Initialize map
//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = L.map('map2013').setView(subdistrictCoordinates.Overall, 10);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         minZoom: 5,
//       }).addTo(mapRef.current);

//       fetch('SEACO.geojson')
//         .then((response) => response.json())
//         .then((data) => {
//           const segamatFeature = data.features.filter(
//             (feature) => feature.properties.district === 'Segamat'
//           );

//           L.geoJSON(segamatFeature, {
//             style: {
//               color: '#FF0000',
//               fillColor: '#ffffff',
//               fillOpacity: 0.5,
//               weight: 2,
//             },
//           }).addTo(mapRef.current);

//           Object.keys(subdistrictCoordinates).forEach((subdistrict) => {
//             if (subdistrict !== 'Overall') {
//               const marker = L.marker(subdistrictCoordinates[subdistrict])
//                 .addTo(mapRef.current)
//                 .bindPopup(subdistrict.replace('_', ' '));

//               marker.on('click', () => {
//                 setSelectedSubdistrict(subdistrict);
//               });
//             }
//           });
//         })
//         .catch((error) => console.log('Error loading the GeoJSON data: ' + error));
//     }
//   }, []);

//   // // Mapping categories for charts
//   // const categoryMapping = {
//   //   Sex: ['Male', 'Female'],
//   //   Ethnicity: ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//   //   'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//   // };

//   // // Prepare chart data
//   // const prepareChartData = (category) => {
//   //   if (!subdistrictData) return null;

//   //   const labels = categoryMapping[category];
//   //   const values = labels.map((label) => subdistrictData[label]?.n || 0);
//   //   const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//   //   return {
//   //     barData: {
//   //       labels,
//   //       datasets: [
//   //         {
//   //           label: `${category} distribution`,
//   //           data: values,
//   //           backgroundColor: 'rgba(75, 192, 192, 0.4)',
//   //           borderColor: 'rgba(75, 192, 192, 0.8)',
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //     pieData: {
//   //       labels,
//   //       datasets: [
//   //         {
//   //           data: percentages,
//   //           backgroundColor: [
//   //             'rgba(255, 99, 132, 0.4)',
//   //             'rgba(54, 162, 235, 0.4)',
//   //             'rgba(255, 206, 86, 0.4)',
//   //             'rgba(75, 192, 192, 0.4)',
//   //             'rgba(153, 102, 255, 0.4)',
//   //             'rgba(255, 159, 64, 0.4)',
//   //           ],
//   //           borderColor: [
//   //             'rgba(255, 99, 132, 0.8)',
//   //             'rgba(54, 162, 235, 0.8)',
//   //             'rgba(255, 206, 86, 0.8)',
//   //             'rgba(75, 192, 192, 0.8)',
//   //             'rgba(153, 102, 255, 0.8)',
//   //             'rgba(255, 159, 64, 0.8)',
//   //           ],
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //   };
//   // };

//   // const categories = [
//   //   { name: 'Sex', chartType: 'pie' },
//   //   { name: 'Ethnicity', chartType: 'bar' },
//   //   { name: 'Education level', chartType: 'bar' },
//   // ];







//     const categoryMapping = {
//     'Sex': ['Male', 'Female'],
//     'Ethnicity': ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//     'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//     'Age group': ['5 to 19', '20 to 39', '40 to 59', '60 and above'],
//     'Employment status last 30 days': [
//       'Too young to work', 
//       'Student', 
//       'Housewife / Househusband', 
//       'Not Working', 
//       'Casual Jobs', 
//       'Working Part-time', 
//       'Working Full-Time', 
//       'Do not Know', 
//       'Pensioners/Pensions', 
//       'Self Employed'
//     ],
//     'Oral health problems in the last 2 weeks': ['Yes', 'No'],
//     'Heart disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Asthma': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Stroke': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Arthritis': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever had dengue fever': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Dengue in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'UTI in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Kidney disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever smoked': ['Yes', 'No', 'Refused to answer'],
//     'Age started smoking': ['< 13', '13-', '18-', '30-', '40-'],
//     'BMI categories (WHO)(18+)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'BMI categories (WHO) recoded (18+)': ['underweight', 'normal', 'overweight', 'obese'],
//     'BMI categories (Msian CGPO)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'Abdominal obesity (18+)': ['Yes', 'No'],
//     'Have been screened for hypertension': ['Yes', 'No'],
//     'Known hypertensive': ['Yes', 'No'],
//     'sbp(last2reads)140above or dbp90': ['Yes', 'No'],
//     'Hpt population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking BP meds': ['Yes', 'No'],
//     'Have been screened for diabetes mellitus (DM)': ['Yes', 'No'],
//     'Known DM': ['Yes', 'No'],
//     'BG >= 11.1 mmol/l': ['Yes', 'No'],
//     'DM population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking DM meds': ['Yes', 'No'],
//   };






//   const prepareChartData = (category) => {
//   if (!subdistrictData) {
//     console.warn('No Subdistrict Data Available:', subdistrictData);
//     return null;
//   }

//   const labels = categoryMapping[category];
//   const values = labels.map((label) => subdistrictData[label]?.n || 0);
//   const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//   console.log(`Prepared Chart Data for ${category}:`, { labels, values, percentages });

//   return {
//     barData: {
//       labels,
//       datasets: [
//         {
//           label: `${category} distribution`,
//           data: values,
//           backgroundColor: 'rgba(75, 192, 192, 0.4)',
//           borderColor: 'rgba(75, 192, 192, 0.8)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     pieData: {
//       labels,
//       datasets: [
//         {
//           data: percentages,
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.4)',
//             'rgba(54, 162, 235, 0.4)',
//             'rgba(255, 206, 86, 0.4)',
//             'rgba(75, 192, 192, 0.4)',
//             'rgba(153, 102, 255, 0.4)',
//             'rgba(255, 159, 64, 0.4)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 0.8)',
//             'rgba(54, 162, 235, 0.8)',
//             'rgba(255, 206, 86, 0.8)',
//             'rgba(75, 192, 192, 0.8)',
//             'rgba(153, 102, 255, 0.8)',
//             'rgba(255, 159, 64, 0.8)',
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//   };
// };

//   // const prepareChartData = (category) => {
//   //   if (!subdistrictData) {
//   //     return null;
//   //   }

//   //   const labels = categoryMapping[category];
//   //   const values = labels.map((label) => subdistrictData[label]?.n || 0);
//   //   const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//   //   return {
//   //     barData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           label: `${category} distribution`,
//   //           data: values,
//   //           backgroundColor: 'rgba(75, 192, 192, 0.4)',
//   //           borderColor: 'rgba(75, 192, 192, 0.8)',
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //     pieData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           data: percentages,
//   //           backgroundColor: [
//   //             'rgba(255, 99, 132, 0.4)',
//   //             'rgba(54, 162, 235, 0.4)',
//   //             'rgba(255, 206, 86, 0.4)',
//   //             'rgba(75, 192, 192, 0.4)',
//   //             'rgba(153, 102, 255, 0.4)',
//   //             'rgba(255, 159, 64, 0.4)',
//   //           ],
//   //           borderColor: [
//   //             'rgba(255, 99, 132, 0.8)',
//   //             'rgba(54, 162, 235, 0.8)',
//   //             'rgba(255, 206, 86, 0.8)',
//   //             'rgba(75, 192, 192, 0.8)',
//   //             'rgba(153, 102, 255, 0.8)',
//   //             'rgba(255, 159, 64, 0.8)',
//   //           ],
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //     lineData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           label: `${category} over years`,
//   //           data: values,
//   //           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//   //           borderColor: 'rgba(75, 192, 192, 0.8)',
//   //           borderWidth: 2,
//   //           fill: true,
//   //         },
//   //       ],
//   //     },
//   //     doughnutData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           data: values,
//   //           backgroundColor: [
//   //             'rgba(255, 99, 132, 0.4)',
//   //             'rgba(54, 162, 235, 0.4)',
//   //             'rgba(255, 206, 86, 0.4)',
//   //             'rgba(75, 192, 192, 0.4)',
//   //             'rgba(153, 102, 255, 0.4)',
//   //             'rgba(255, 159, 64, 0.4)',
//   //           ],
//   //           borderColor: [
//   //             'rgba(255, 99, 132, 0.8)',
//   //             'rgba(54, 162, 235, 0.8)',
//   //             'rgba(255, 206, 86, 0.8)',
//   //             'rgba(75, 192, 192, 0.8)',
//   //             'rgba(153, 102, 255, 0.8)',
//   //             'rgba(255, 159, 64, 0.8)',
//   //           ],
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //     radarData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           label: `${category} status`,
//   //           data: values,
//   //           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//   //           borderColor: 'rgba(255, 99, 132, 0.8)',
//   //           pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
//   //           pointBorderColor: '#fff',
//   //           pointHoverBackgroundColor: '#fff',
//   //           pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
//   //         },
//   //       ],
//   //     },
//   //     polarAreaData: {
//   //       labels: labels,
//   //       datasets: [
//   //         {
//   //           data: values,
//   //           backgroundColor: [
//   //             'rgba(255, 99, 132, 0.4)',
//   //             'rgba(54, 162, 235, 0.4)',
//   //             'rgba(255, 206, 86, 0.4)',
//   //             'rgba(75, 192, 192, 0.4)',
//   //             'rgba(153, 102, 255, 0.4)',
//   //             'rgba(255, 159, 64, 0.4)',
//   //           ],
//   //           borderColor: [
//   //             'rgba(255, 99, 132, 0.8)',
//   //             'rgba(54, 162, 235, 0.8)',
//   //             'rgba(255, 206, 86, 0.8)',
//   //             'rgba(75, 192, 192, 0.8)',
//   //             'rgba(153, 102, 255, 0.8)',
//   //             'rgba(255, 159, 64, 0.8)',
//   //           ],
//   //           borderWidth: 1,
//   //         },
//   //       ],
//   //     },
//   //   };
//   // };

//   const categories = [
//     { name: 'Sex', chartType: 'pie' },
//     { name: 'Ethnicity', chartType: 'doughnut' },
//     { name: 'Education level', chartType: 'bar' },
//     { name: 'Age group', chartType: 'line' },
//     { name: 'Employment status last 30 days', chartType: 'polarArea' },
//     { name: 'Oral health problems in the last 2 weeks', chartType: 'pie' },
//     { name: 'Heart disease', chartType: 'bar' },
//     { name: 'Asthma', chartType: 'bar' },
//     { name: 'Stroke', chartType: 'bar' },
//     { name: 'Arthritis', chartType: 'radar' },
//     { name: 'Ever had dengue fever', chartType: 'pie' },
//     { name: 'Dengue in the past 12 months', chartType: 'pie' },
//     { name: 'UTI in the past 12 months', chartType: 'bar' },
//     { name: 'Kidney disease', chartType: 'bar' },
//     { name: 'Ever smoked', chartType: 'pie' },
//     { name: 'Age started smoking', chartType: 'bar' },
//     { name: 'BMI categories (WHO)(18+)', chartType: 'bar' },
//     { name: 'BMI categories (WHO) recoded (18+)', chartType: 'bar' },
//     { name: 'BMI categories (Msian CGPO)', chartType: 'bar' },
//     { name: 'Abdominal obesity (18+)', chartType: 'pie' },
//     { name: 'Have been screened for hypertension', chartType: 'bar' },
//     { name: 'Known hypertensive', chartType: 'pie' },
//     { name: 'sbp(last2reads)140above or dbp90', chartType: 'bar' },
//     { name: 'Hpt population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking BP meds', chartType: 'pie' },
//     { name: 'Have been screened for diabetes mellitus (DM)', chartType: 'bar' },
//     { name: 'Known DM', chartType: 'pie' },
//     { name: 'BG >= 11.1 mmol/l', chartType: 'pie' },
//     { name: 'DM population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking DM meds', chartType: 'pie' },
//   ];


//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <h2>Subdistricts</h2>
//         <ul>
//           {Object.keys(subdistrictCoordinates).map((district) => (
//             <li key={district}>
//               <button onClick={() => setSelectedSubdistrict(district)}>
//                 {district.replace('_', ' ')}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="main-content">
//         <header className="navbar">
//           <h1>
//             HEALTH 2013 SUMMARY FOR {selectedSubdistrict.replace('_', ' ').toUpperCase()}
//           </h1>
//         </header>

//         <div className="map-container">
//           <div id="map2013" style={{ height: '400px', marginBottom: '20px' }}></div>
//         </div>

//         <div className="charts-container">
//           {categories.map((category) => {
//             const chartData = prepareChartData(category.name);
//             if (!chartData) return null;

//             return (
//               <div key={category.name} className="chart">
//                 <h3>{category.name}</h3>
//                 <div style={{ height: '400px', width: '100%' }}>
//                   {category.chartType === 'bar' && (
//                     <Bar data={chartData.barData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'pie' && (
//                     <Pie data={chartData.pieData} options={{ maintainAspectRatio: false }} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthChart2013;
















// import React, { useState, useEffect, useRef } from 'react';
// import { Bar, Pie, Line, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
// import 'chart.js/auto';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// // import data2013 from '/path/to/full_structured_health_data_complete.json'; // Adjust path as needed
// import data2013 from './full_structured_health_data_complete.json';
// import './Dashboard.css'; // Assuming this file exists from the previous step

// const HealthChart2013 = () => {
//   const [selectedSubdistrict, setSelectedSubdistrict] = useState('BEKOK');
//   const [subdistrictData, setSubdistrictData] = useState(data2013[selectedSubdistrict]);
//   const mapRef = useRef(null);

//   const subdistrictCoordinates = {
//     BEKOK: [2.3869, 103.0544],
//     CHAAH: [2.2384, 103.0573],
//     GEMEREH: [2.5048, 102.8093],
//     JABI: [2.5085, 102.8193],
//     SUNGAI_SEGAMAT: [2.4873, 102.8212],
//     Overall: [2.5147, 102.8151], 
//   };

//   useEffect(() => {
//     setSubdistrictData(data2013[selectedSubdistrict]);
//     if (mapRef.current) {
//       mapRef.current.invalidateSize();
//       const coordinates = subdistrictCoordinates[selectedSubdistrict] || subdistrictCoordinates.Overall;
//       mapRef.current.setView(coordinates, 14); 
//     }
//   }, [selectedSubdistrict]);

//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = L.map('map2013').setView(subdistrictCoordinates.Overall, 10);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         minZoom: 5,
//       }).addTo(mapRef.current);

//       fetch('SEACO.geojson')
//         .then((response) => response.json())
//         .then((data) => {
//           const segamatFeature = data.features.filter(
//             (feature) => feature.properties.district === 'Segamat'
//           );

//           L.geoJSON(segamatFeature, {
//             style: function (feature) {
//               return {
//                 color: '#FF0000', 
//                 fillColor: '#ffffff', 
//                 fillOpacity: 0.5,
//                 weight: 2,
//               };
//             },
//           }).addTo(mapRef.current);

//           Object.keys(subdistrictCoordinates).forEach((subdistrict) => {
//             if (subdistrict !== "Overall") {
//               const marker = L.marker(subdistrictCoordinates[subdistrict])
//                 .addTo(mapRef.current)
//                 .bindPopup(subdistrict.replace('_', ' '));

//               marker.on('click', () => {
//                 setSelectedSubdistrict(subdistrict);
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.log('Error loading the GeoJSON data: ' + error);
//         });
//     }
//   }, []);

//   const categoryMapping = {
//     'Sex': ['Male', 'Female'],
//     'Ethnicity': ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//     'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//     'Age group': ['5 to 19', '20 to 39', '40 to 59', '60 and above'],
//     'Employment status last 30 days': [
//       'Too young to work', 
//       'Student', 
//       'Housewife / Househusband', 
//       'Not Working', 
//       'Casual Jobs', 
//       'Working Part-time', 
//       'Working Full-Time', 
//       'Do not Know', 
//       'Pensioners/Pensions', 
//       'Self Employed'
//     ],
//     'Oral health problems in the last 2 weeks': ['Yes', 'No'],
//     'Heart disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Asthma': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Stroke': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Arthritis': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever had dengue fever': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Dengue in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'UTI in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Kidney disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever smoked': ['Yes', 'No', 'Refused to answer'],
//     'Age started smoking': ['< 13', '13-', '18-', '30-', '40-'],
//     'BMI categories (WHO)(18+)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'BMI categories (WHO) recoded (18+)': ['underweight', 'normal', 'overweight', 'obese'],
//     'BMI categories (Msian CGPO)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'Abdominal obesity (18+)': ['Yes', 'No'],
//     'Have been screened for hypertension': ['Yes', 'No'],
//     'Known hypertensive': ['Yes', 'No'],
//     'sbp(last2reads)140above or dbp90': ['Yes', 'No'],
//     'Hpt population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking BP meds': ['Yes', 'No'],
//     'Have been screened for diabetes mellitus (DM)': ['Yes', 'No'],
//     'Known DM': ['Yes', 'No'],
//     'BG >= 11.1 mmol/l': ['Yes', 'No'],
//     'DM population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking DM meds': ['Yes', 'No'],
//   };

//   const prepareChartData = (category) => {
//     if (!subdistrictData) {
//       return null;
//     }

//     const labels = categoryMapping[category];
//     const values = labels.map((label) => subdistrictData[label]?.n || 0);
//     const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//     return {
//       barData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} distribution`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.4)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       pieData: {
//         labels: labels,
//         datasets: [
//           {
//             data: percentages,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       lineData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} over years`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 2,
//             fill: true,
//           },
//         ],
//       },
//       doughnutData: {
//         labels: labels,
//         datasets: [
//           {
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       radarData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} status`,
//             data: values,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 0.8)',
//             pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
//           },
//         ],
//       },
//       polarAreaData: {
//         labels: labels,
//         datasets: [
//           {
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//     };
//   };

//   const categories = [
//     { name: 'Sex', chartType: 'pie' },
//     { name: 'Ethnicity', chartType: 'doughnut' },
//     { name: 'Education level', chartType: 'bar' },
//     { name: 'Age group', chartType: 'line' },
//     { name: 'Employment status last 30 days', chartType: 'polarArea' },
//     { name: 'Oral health problems in the last 2 weeks', chartType: 'pie' },
//     { name: 'Heart disease', chartType: 'bar' },
//     { name: 'Asthma', chartType: 'bar' },
//     { name: 'Stroke', chartType: 'bar' },
//     { name: 'Arthritis', chartType: 'radar' },
//     { name: 'Ever had dengue fever', chartType: 'pie' },
//     { name: 'Dengue in the past 12 months', chartType: 'pie' },
//     { name: 'UTI in the past 12 months', chartType: 'bar' },
//     { name: 'Kidney disease', chartType: 'bar' },
//     { name: 'Ever smoked', chartType: 'pie' },
//     { name: 'Age started smoking', chartType: 'bar' },
//     { name: 'BMI categories (WHO)(18+)', chartType: 'bar' },
//     { name: 'BMI categories (WHO) recoded (18+)', chartType: 'bar' },
//     { name: 'BMI categories (Msian CGPO)', chartType: 'bar' },
//     { name: 'Abdominal obesity (18+)', chartType: 'pie' },
//     { name: 'Have been screened for hypertension', chartType: 'bar' },
//     { name: 'Known hypertensive', chartType: 'pie' },
//     { name: 'sbp(last2reads)140above or dbp90', chartType: 'bar' },
//     { name: 'Hpt population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking BP meds', chartType: 'pie' },
//     { name: 'Have been screened for diabetes mellitus (DM)', chartType: 'bar' },
//     { name: 'Known DM', chartType: 'pie' },
//     { name: 'BG >= 11.1 mmol/l', chartType: 'pie' },
//     { name: 'DM population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking DM meds', chartType: 'pie' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <h2>Subdistricts</h2>
//         <ul>
//           {Object.keys(subdistrictCoordinates).map((district) => (
//             <li key={district}>
//               <button onClick={() => setSelectedSubdistrict(district)}>
//                 {district.replace('_', ' ')}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="main-content">
//         <header className="navbar">
//           <h1>
//             HEALTH 2013 SUMMARY FOR {selectedSubdistrict.replace('_', ' ').toUpperCase()}
//           </h1>
//         </header>

//         <div className="map-container">
//           <div id="map2013" style={{ height: '400px', marginBottom: '20px' }}></div>
//         </div>

//         <div className="charts-container">
//           {categories.map((category) => {
//             const chartData = prepareChartData(category.name);
//             if (!chartData) return null;

//             return (
//               <div key={category.name} className="chart">
//                 <h3>{category.name}</h3>
//                 <div style={{ height: '400px', width: '100%' }}>
//                   {category.chartType === 'bar' && (
//                     <Bar data={chartData.barData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'pie' && (
//                     <Pie data={chartData.pieData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'line' && (
//                     <Line data={chartData.lineData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'doughnut' && (
//                     <Doughnut data={chartData.doughnutData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'radar' && (
//                     <Radar data={chartData.radarData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'polarArea' && (
//                     <PolarArea data={chartData.polarAreaData} options={{ maintainAspectRatio: false }} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthChart2013;





















































// import React, { useState, useEffect, useRef } from 'react';
// import { Bar, Pie, Line, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
// import 'chart.js/auto';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './Dashboard.css';

// const HealthChart2013 = () => {
//   const [selectedSubdistrict, setSelectedSubdistrict] = useState('BEKOK');
//   const [data2013, setData2013] = useState({});
//   const [subdistrictData, setSubdistrictData] = useState(null);
//   const mapRef = useRef(null);

//   const subdistrictCoordinates = {
//     BEKOK: [2.3869, 103.0544],
//     CHAAH: [2.2384, 103.0573],
//     GEMEREH: [2.5048, 102.8093],
//     JABI: [2.5085, 102.8193],
//     SUNGAI_SEGAMAT: [2.4873, 102.8212],
//     Overall: [2.5147, 102.8151],
//   };

//   useEffect(() => {
//     // Fetch the data from the backend API
//     const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://seaco.onrender.com';
//     fetch(`${backendUrl}/api/health/2013`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Organize data by subdistricts for easier access
//         const organizedData = {};
//         data.forEach((item) => {
//           if (item._id && item.data) {
//             organizedData[item._id] = item.data;
//           }
//         });
//         setData2013(organizedData);
//         setSubdistrictData(organizedData[selectedSubdistrict]);
//       })
//       .catch((error) => console.error('Error fetching 2013 data:', error));
//   }, [selectedSubdistrict]);

//   useEffect(() => {
//     // Update the subdistrict data when selected
//     if (data2013[selectedSubdistrict]) {
//       setSubdistrictData(data2013[selectedSubdistrict]);
//     }
//   }, [data2013, selectedSubdistrict]);

//   useEffect(() => {
//     // Initialize the map
//     if (!mapRef.current) {
//       mapRef.current = L.map('map2013').setView(subdistrictCoordinates.Overall, 10);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//         minZoom: 5,
//       }).addTo(mapRef.current);





//       fetch('SEACO.geojson')
//         .then((response) => response.json())
//         .then((data) => {
//           const segamatFeature = data.features.filter(
//             (feature) => feature.properties.district === 'Segamat'
//           );

//           L.geoJSON(segamatFeature, {
//             style: function (feature) {
//               return {
//                 color: '#FF0000', 
//                 fillColor: '#ffffff', 
//                 fillOpacity: 0.5,
//                 weight: 2,
//               };
//             },
//           }).addTo(mapRef.current);

//           Object.keys(subdistrictCoordinates).forEach((subdistrict) => {
//             if (subdistrict !== "Overall") {
//               const marker = L.marker(subdistrictCoordinates[subdistrict])
//                 .addTo(mapRef.current)
//                 .bindPopup(subdistrict.replace('_', ' '));

//               marker.on('click', () => {
//                 setSelectedSubdistrict(subdistrict);
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.log('Error loading the GeoJSON data: ' + error);
//         });
//     }
//   }, []);
  
//   const categoryMapping = {
//     'Sex': ['Male', 'Female'],
//     'Ethnicity': ['Malay', 'Chinese', 'Indian', 'Orang Asli', 'Other', 'Non-citizen'],
//     'Education level': ['No formal education', 'Primary', 'Secondary', 'Tertiary', 'Do not know', 'Refused to answer'],
//     'Age group': ['5 to 19', '20 to 39', '40 to 59', '60 and above'],
//     'Employment status last 30 days': [
//       'Too young to work', 
//       'Student', 
//       'Housewife / Househusband', 
//       'Not Working', 
//       'Casual Jobs', 
//       'Working Part-time', 
//       'Working Full-Time', 
//       'Do not Know', 
//       'Pensioners/Pensions', 
//       'Self Employed'
//     ],
//     'Oral health problems in the last 2 weeks': ['Yes', 'No'],
//     'Heart disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Asthma': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Stroke': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Arthritis': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever had dengue fever': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Dengue in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'UTI in the past 12 months': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Kidney disease': ['Yes', 'No', 'Do not Know', 'Refused to answer'],
//     'Ever smoked': ['Yes', 'No', 'Refused to answer'],
//     'Age started smoking': ['< 13', '13-', '18-', '30-', '40-'],
//     'BMI categories (WHO)(18+)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'BMI categories (WHO) recoded (18+)': ['underweight', 'normal', 'overweight', 'obese'],
//     'BMI categories (Msian CGPO)': ['underweight', 'normal', 'overweight', 'obese I', 'obese II', 'obese III'],
//     'Abdominal obesity (18+)': ['Yes', 'No'],
//     'Have been screened for hypertension': ['Yes', 'No'],
//     'Known hypertensive': ['Yes', 'No'],
//     'sbp(last2reads)140above or dbp90': ['Yes', 'No'],
//     'Hpt population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking BP meds': ['Yes', 'No'],
//     'Have been screened for diabetes mellitus (DM)': ['Yes', 'No'],
//     'Known DM': ['Yes', 'No'],
//     'BG >= 11.1 mmol/l': ['Yes', 'No'],
//     'DM population (known + undiagnosed)': ['Yes', 'No'],
//     'Taking DM meds': ['Yes', 'No'],
//   };

//   const prepareChartData = (category) => {
//     if (!subdistrictData) {
//       return null;
//     }

//     const labels = categoryMapping[category];
//     const values = labels.map((label) => subdistrictData[label]?.n || 0);
//     const percentages = labels.map((label) => subdistrictData[label]?.percentage || 0);

//     return {
//       barData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} distribution`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.4)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       pieData: {
//         labels: labels,
//         datasets: [
//           {
//             data: percentages,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       lineData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} over years`,
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 0.8)',
//             borderWidth: 2,
//             fill: true,
//           },
//         ],
//       },
//       doughnutData: {
//         labels: labels,
//         datasets: [
//           {
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       radarData: {
//         labels: labels,
//         datasets: [
//           {
//             label: `${category} status`,
//             data: values,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255, 99, 132, 0.8)',
//             pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
//           },
//         ],
//       },
//       polarAreaData: {
//         labels: labels,
//         datasets: [
//           {
//             data: values,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.4)',
//               'rgba(54, 162, 235, 0.4)',
//               'rgba(255, 206, 86, 0.4)',
//               'rgba(75, 192, 192, 0.4)',
//               'rgba(153, 102, 255, 0.4)',
//               'rgba(255, 159, 64, 0.4)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 0.8)',
//               'rgba(54, 162, 235, 0.8)',
//               'rgba(255, 206, 86, 0.8)',
//               'rgba(75, 192, 192, 0.8)',
//               'rgba(153, 102, 255, 0.8)',
//               'rgba(255, 159, 64, 0.8)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//     };
//   };

//   const categories = [
//     { name: 'Sex', chartType: 'pie' },
//     { name: 'Ethnicity', chartType: 'doughnut' },
//     { name: 'Education level', chartType: 'bar' },
//     { name: 'Age group', chartType: 'line' },
//     { name: 'Employment status last 30 days', chartType: 'polarArea' },
//     { name: 'Oral health problems in the last 2 weeks', chartType: 'pie' },
//     { name: 'Heart disease', chartType: 'bar' },
//     { name: 'Asthma', chartType: 'bar' },
//     { name: 'Stroke', chartType: 'bar' },
//     { name: 'Arthritis', chartType: 'radar' },
//     { name: 'Ever had dengue fever', chartType: 'pie' },
//     { name: 'Dengue in the past 12 months', chartType: 'pie' },
//     { name: 'UTI in the past 12 months', chartType: 'bar' },
//     { name: 'Kidney disease', chartType: 'bar' },
//     { name: 'Ever smoked', chartType: 'pie' },
//     { name: 'Age started smoking', chartType: 'bar' },
//     { name: 'BMI categories (WHO)(18+)', chartType: 'bar' },
//     { name: 'BMI categories (WHO) recoded (18+)', chartType: 'bar' },
//     { name: 'BMI categories (Msian CGPO)', chartType: 'bar' },
//     { name: 'Abdominal obesity (18+)', chartType: 'pie' },
//     { name: 'Have been screened for hypertension', chartType: 'bar' },
//     { name: 'Known hypertensive', chartType: 'pie' },
//     { name: 'sbp(last2reads)140above or dbp90', chartType: 'bar' },
//     { name: 'Hpt population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking BP meds', chartType: 'pie' },
//     { name: 'Have been screened for diabetes mellitus (DM)', chartType: 'bar' },
//     { name: 'Known DM', chartType: 'pie' },
//     { name: 'BG >= 11.1 mmol/l', chartType: 'pie' },
//     { name: 'DM population (known + undiagnosed)', chartType: 'bar' },
//     { name: 'Taking DM meds', chartType: 'pie' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <nav className="sidebar">
//         <h2>Subdistricts</h2>
//         <ul>
//           {Object.keys(subdistrictCoordinates).map((district) => (
//             <li key={district}>
//               <button onClick={() => setSelectedSubdistrict(district)}>
//                 {district.replace('_', ' ')}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="main-content">
//         <header className="navbar">
//           <h1>
//             HEALTH 2013 SUMMARY FOR {selectedSubdistrict.replace('_', ' ').toUpperCase()}
//           </h1>
//         </header>

//         <div className="map-container">
//           <div id="map2013" style={{ height: '400px', marginBottom: '20px' }}></div>
//         </div>

//         <div className="charts-container">
//           {categories.map((category) => {
//             const chartData = prepareChartData(category.name);
//             if (!chartData) return null;

//             return (
//               <div key={category.name} className="chart">
//                 <h3>{category.name}</h3>
//                 <div style={{ height: '400px', width: '100%' }}>
//                   {category.chartType === 'bar' && (
//                     <Bar data={chartData.barData} options={{ maintainAspectRatio: false }} />
//                   )}
//                   {category.chartType === 'pie' && (
//                     <Pie data={chartData.pieData} options={{ maintainAspectRatio: false }} />
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthChart2013;








