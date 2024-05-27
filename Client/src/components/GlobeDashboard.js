// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { useNavigate } from 'react-router-dom';
// import './GlobeDashboard.css'; // Ensure you have GlobeDashboard.css with appropriate styles

// function GlobeDashboard() {
//   const globeRef = useRef(null);
//   const navigate = useNavigate(); // Use useNavigate hook for navigation

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Ensure alpha is true for background transparency
//     // renderer.setClearColor(0xffffff, 1); // Set renderer background color to white
//     renderer.setClearColor(0x111111, 1);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     globeRef.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     const textureLoader = new THREE.TextureLoader();
//     const earthTexture = textureLoader.load("https://ksenia-k.com/img/earth-map-colored.png");
//     const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
//     // const sphereMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
//     const sphereMaterial = new THREE.MeshBasicMaterial({
//       map: earthTexture,
//       transparent: true, // Enable transparency
//       opacity: 1.0 // Adjust opacity here, 0.0 fully transparent, 1.0 fully opaque
//     });

//     const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     scene.add(sphere);
//     camera.position.z = 15;

//     const animate = function () {
//       requestAnimationFrame(animate);
//       sphere.rotation.y += 0.005;
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize, false);

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       if (globeRef.current && renderer.domElement) {
//         globeRef.current.removeChild(renderer.domElement);
//       }
//       sphereGeometry.dispose();
//       sphereMaterial.dispose();
//     };
//   }, []);

//   return (
//     <div className="globeDashboard">
//       <div ref={globeRef} className="globeContainer" />
//       <div className="sea360Text">Welcome<p> to</p> <p>SEACO 360</p></div>
//       <button onClick={() => navigate('/page3')} className="page3Button">START</button>
//     </div>
//   );
// }

// export default GlobeDashboard;








import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigate } from 'react-router-dom';
import './GlobeDashboard.css'; // Ensure you have GlobeDashboard.css with appropriate styles


function GlobeDashboard() {
  const globeRef = useRef(null);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Ensure alpha is true for background transparency
    renderer.setClearColor(0x111111, 1); // Set renderer background color to #111
    renderer.setSize(window.innerWidth, window.innerHeight);
    globeRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("https://ksenia-k.com/img/earth-map-colored.png");

    // Earth sphere with adjustable opacity
    const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true, // Enable transparency
      opacity: 0.8 // Adjust opacity here, 0.0 fully transparent, 1.0 fully opaque
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    camera.position.z = 15;

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (globeRef.current && renderer.domElement) {
        globeRef.current.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, []);

  return (
  //   <div className="globeDashboard">
  //     <div ref={globeRef} className="globeContainer" />
  //     // <div className="sea360Text">Welcome <p>to</p>SEACO 360</div>
  //     // <div className="sea360Text2">SEACO is a developing longitudinal demographic health surveillance site located in Malaysia. It captures longitudinal biomedical, health, social, educational and environmental data on a population of approximately 70,000 people. High-quality data will be accessible for secondary analyses, or we can provide experienced data collectors for primary data collection</div> 
  //   <button onClick={() => navigate('/page3')} className="page3Button"> START </button>
  //   </div>
  // );


      <div className="globeDashboard">
      <div ref={globeRef} className="globeContainer" />
      <div className="sea360Text">
        Welcome
        <div>to</div>
        <div>SEACO 360</div>
      </div>
      <div className="sea360Text2">
        SEACO is a health and demographic surveillance system located in Malaysia. It captures longitudinal demographic, socioeconomic, health, and environmental data on approximately 40,000 populations. High-quality data will be accessible for secondary analyses, or we can provide experienced data collectors for primary data collection.
      </div>

    
    
      <button onClick={() => navigate('/page3')} className="page3Button">START</button>

    </div>
  );
}

export default GlobeDashboard;
