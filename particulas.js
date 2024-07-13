// Requiere la librería Three.js
import * as THREE from 'three';

// Configuración de partículas
const scene = new THREE.Scene();
const geometry = new THREE.Geometry();

for (let i = 0; i < 10000; i++) {
    const particle = new THREE.Vector3(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
    );
    geometry.vertices.push(particle);
}

const material = new THREE.PointsMaterial({ color: 0xffffff });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Renderizado de la escena
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    particles.rotation.x += 0.005;
    particles.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();


// main.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });
  