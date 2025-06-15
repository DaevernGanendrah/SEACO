import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigate } from 'react-router-dom';
import './GlobeDashboard.css'; 


function GlobeDashboard() {
  const globeRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    renderer.setClearColor(0x111111, 1); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    globeRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("https://ksenia-k.com/img/earth-map-colored.png");

    // Earth sphere with adjustable opacity
    const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true, 
      opacity: 0.8 
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
