// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 24;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bubble-canvas"),
    antialias: true,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Sphere data
const radii = [
    1, 0.6, 0.8, 0.4, 0.9, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.5, 0.6, 0.7, 0.3, 0.4, 0.8, 0.7, 0.5,
    0.4, 0.6, 0.35, 0.38, 0.9, 0.3, 0.6, 0.4, 0.2, 0.35, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8, 0.76, 0.8,
    1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.55, 0.42, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35, 0.35, 0.35,
    0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3, 0.3, 0.6, 0.4, 0.2, 0.52, 0.5, 0.15, 0.2, 0.25, 0.4, 0.8,
    0.76, 0.8, 1, 0.8, 0.7, 0.8, 0.3, 0.5, 0.6, 0.8, 0.7, 0.75, 0.66, 0.6, 0.7, 0.5, 0.6, 0.35,
    0.35, 0.35, 0.8, 0.6, 0.7, 0.8, 0.4, 0.89, 0.3
];

const positions = [
    { x: 0, y: 0, z: 0 }, { x: 1.2, y: 0.9, z: -0.5 }, { x: 1.8, y: -0.3, z: 0 }, { x: -1, y: -1, z: 0 },
    { x: -1, y: 1.62, z: 0 }, { x: -1.65, y: 0, z: -0.4 }, { x: -2.13, y: -1.54, z: -0.4 }, { x: 0.8, y: 0.94, z: 0.3 },
    { x: 0.5, y: -1, z: 1.2 }, { x: -0.16, y: -1.2, z: 0.9 }, { x: 1.5, y: 1.2, z: 0.8 }, { x: 0.5, y: -1.58, z: 1.4 },
    { x: -1.5, y: 1, z: 1.15 }, { x: -1.5, y: -1.5, z: 0.99 }, { x: -1.5, y: -1.5, z: -1.9 }, { x: 1.85, y: 0.8, z: 0.05 },
    { x: 1.5, y: -1.2, z: -0.75 }, { x: 0.9, y: -1.62, z: 0.22 }, { x: 0.45, y: 2, z: 0.65 }, { x: 2.5, y: 1.22, z: -0.2 },
    { x: 2.35, y: 0.7, z: 0.55 }, { x: -1.8, y: -0.35, z: 0.85 }, { x: -1.02, y: 0.2, z: 0.9 }, { x: 0.2, y: 1, z: 1 },
    { x: -2.88, y: 0.7, z: 1 }, { x: -2, y: -0.95, z: 1.5 }, { x: -2.3, y: 2.4, z: -0.1 }, { x: -2.5, y: 1.9, z: 1.2 },
    { x: -1.8, y: 0.37, z: 1.2 }, { x: -2.4, y: 1.42, z: 0.05 }, { x: -2.72, y: -0.9, z: 1.1 }, { x: -1.8, y: -1.34, z: 1.67 },
    { x: -1.6, y: 1.66, z: 0.91 }, { x: -2.8, y: 1.58, z: 1.69 }, { x: -2.97, y: 2.3, z: 0.65 }, { x: 1.1, y: -0.2, z: -1.45 },
    { x: -4, y: 1.78, z: 0.38 }, { x: 0.12, y: 1.4, z: -1.29 }, { x: -1.64, y: 1.4, z: -1.79 }, { x: -3.5, y: -0.58, z: 0.1 },
    { x: -0.1, y: -1, z: -2 }, { x: -4.5, y: 0.55, z: -0.5 }, { x: -3.87, y: 0, z: 1 }, { x: -4.6, y: -0.1, z: 0.65 },
    { x: -3, y: 1.5, z: -0.7 }, { x: -0.5, y: 0.2, z: -1.5 }, { x: -1.3, y: -0.45, z: -1.5 }, { x: -3.35, y: 0.25, z: -1.5 },
    { x: -4.76, y: -1.26, z: 0.4 }, { x: -4.32, y: 0.85, z: 1.4 }, { x: -3.5, y: -1.82, z: 0.9 }, { x: -3.6, y: -0.6, z: 1.46 },
    { x: -4.55, y: -1.5, z: 1.63 }, { x: -3.8, y: -1.15, z: 2.1 }, { x: -2.9, y: -0.25, z: 1.86 }, { x: -2.2, y: -0.4, z: 1.86 },
    { x: -5.1, y: -0.24, z: 1.86 }, { x: -5.27, y: 1.24, z: 0.76 }, { x: -5.27, y: 2, z: -0.4 }, { x: -6.4, y: 0.4, z: 1 },
    { x: -5.15, y: 0.95, z: 2 }, { x: -6.2, y: 0.5, z: -0.8 }, { x: -4, y: 0.08, z: 1.8 }, { x: 2, y: -0.95, z: 1.5 },
    { x: 2.3, y: 2.4, z: -0.1 }, { x: 2.5, y: 1.9, z: 1.2 }, { x: 1.8, y: 0.37, z: 1.2 }, { x: 3.24, y: 0.6, z: 1.05 },
    { x: 2.72, y: -0.9, z: 1.1 }, { x: 1.8, y: -1.34, z: 1.67 }, { x: 1.6, y: 1.99, z: 0.91 }, { x: 2.8, y: 1.58, z: 1.69 },
    { x: 2.97, y: 2.3, z: 0.65 }, { x: -1.3, y: -0.2, z: -2.5 }, { x: 4, y: 1.78, z: 0.38 }, { x: 1.72, y: 1.4, z: -1.29 },
    { x: 2.5, y: -1.2, z: -2 }, { x: 3.5, y: -0.58, z: 0.1 }, { x: 0.1, y: 0.4, z: -2.42 }, { x: 4.5, y: 0.55, z: -0.5 },
    { x: 3.87, y: 0, z: 1 }, { x: 4.6, y: -0.1, z: 0.65 }, { x: 3, y: 1.5, z: -0.7 }, { x: 2.3, y: 0.6, z: -2.6 },
    { x: 4, y: 1.5, z: -1.6 }, { x: 3.35, y: 0.25, z: -1.5 }, { x: 4.76, y: -1.26, z: 0.4 }, { x: 4.32, y: 0.85, z: 1.4 },
    { x: 3.5, y: -1.82, z: 0.9 }, { x: 3.6, y: -0.6, z: 1.46 }, { x: 4.55, y: -1.5, z: 1.63 }, { x: 3.8, y: -1.15, z: 2.1 },
    { x: 2.9, y: -0.25, z: 1.86 }, { x: 2.2, y: -0.4, z: 1.86 }, { x: 5.1, y: -0.24, z: 1.86 }, { x: 5.27, y: 1.24, z: 0.76 },
    { x: 5.27, y: 2, z: -0.4 }, { x: 6.4, y: 0.4, z: 1 }, { x: 5.15, y: 0.95, z: 2 }, { x: 6.2, y: 0.5, z: -0.8 },
    { x: 4, y: 0.08, z: 1.8 }
];

// Create spheres with optimized geometry
const material = new THREE.MeshLambertMaterial({
    color: "#808080",
    emissive: "#808080",
    emissiveIntensity: 0.2
});

const group = new THREE.Group();
const spheres = [];
const sphereGeometries = {}; // Cache geometries by radius

positions.forEach((pos, index) => {
    const radius = radii[index];
    
    // Reuse geometry if already created for this radius
    if (!sphereGeometries[radius]) {
        sphereGeometries[radius] = new THREE.SphereGeometry(radius, 24, 24); // Reduced segments for performance
    }
    
    const sphere = new THREE.Mesh(sphereGeometries[radius], material);
    sphere.position.set(pos.x, pos.y, pos.z);
    sphere.userData = { 
        originalPosition: { ...pos }, 
        radius,
        hoverIntensity: 0
    };
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    spheres.push(sphere);
    group.add(sphere);
});

scene.add(group);

// Enhanced lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.8);
spotLight.position.set(14, 24, 30);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
scene.add(spotLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight.position.set(0, -4, 0);
scene.add(directionalLight);

// Add subtle fill light from the side
const fillLight = new THREE.DirectionalLight(0x5577aa, 0.2);
fillLight.position.set(-10, 5, 10);
scene.add(fillLight);

// Mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const forces = new Map();
const tempVector = new THREE.Vector3();

// Animation parameters
const breathingAmplitude = 0.1;
const breathingSpeed = 0.002;

// Initialize spheres off-screen (left and right)
const leftSideSpheres = spheres.slice(0, Math.floor(spheres.length / 2));
const rightSideSpheres = spheres.slice(Math.floor(spheres.length / 2));

// Position left spheres to the left and right spheres to the right
leftSideSpheres.forEach(sphere => {
    sphere.position.x = -20;
    sphere.visible = false;
});

rightSideSpheres.forEach(sphere => {
    sphere.position.x = 20;
    sphere.visible = false;
});

// Entry animation
function playEntryAnimation() {
    // Animate left side spheres
    leftSideSpheres.forEach((sphere, i) => {
        sphere.visible = true;
        const delay = i * 0.05;
        
        gsap.to(sphere.position, {
            x: sphere.userData.originalPosition.x,
            y: sphere.userData.originalPosition.y,
            z: sphere.userData.originalPosition.z,
            duration: 1.5,
            delay: delay,
            ease: "back.out(1.7)"
        });
    });
    
    // Animate right side spheres
    rightSideSpheres.forEach((sphere, i) => {
        sphere.visible = true;
        const delay = i * 0.05;
        
        gsap.to(sphere.position, {
            x: sphere.userData.originalPosition.x,
            y: sphere.userData.originalPosition.y,
            z: sphere.userData.originalPosition.z,
            duration: 1.5,
            delay: delay,
            ease: "back.out(1.7)"
        });
    });
}

// Mouse move handler
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(spheres);

    // Reset all spheres' hover intensity
    spheres.forEach(sphere => {
        sphere.userData.hoverIntensity = Math.max(0, sphere.userData.hoverIntensity - 0.05);
    });

    if (intersects.length > 0) {
        const hoveredSphere = intersects[0].object;
        hoveredSphere.userData.hoverIntensity = 1;
        
        const force = new THREE.Vector3();
        force.subVectors(intersects[0].point, hoveredSphere.position)
                .normalize()
                .multiplyScalar(0.2);
        forces.set(hoveredSphere.uuid, force);
    }
}

// Collision detection
function handleCollisions() {
    for (let i = 0; i < spheres.length; i++) {
        const sphereA = spheres[i];
        const radiusA = sphereA.userData.radius;

        for (let j = i + 1; j < spheres.length; j++) {
            const sphereB = spheres[j];
            const radiusB = sphereB.userData.radius;

            const distance = sphereA.position.distanceTo(sphereB.position);
            const minDistance = (radiusA + radiusB) * 1.2;

            if (distance < minDistance) {
                tempVector.subVectors(sphereB.position, sphereA.position);
                tempVector.normalize();

                const pushStrength = (minDistance - distance) * 0.4;
                sphereA.position.sub(tempVector.multiplyScalar(pushStrength));
                sphereB.position.add(tempVector.multiplyScalar(pushStrength));
            }
        }
    }
}

let clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    
    // Breathing animation with hover effect
    const time = Date.now() * breathingSpeed;
    
    spheres.forEach((sphere, i) => {
        const offset = i * 0.2;
        const breathingY = Math.sin(time + offset) * breathingAmplitude;
        const breathingZ = Math.cos(time + offset) * breathingAmplitude * 0.5;
        
        // Hover effect - scale up when hovered
        const scale = 1 + sphere.userData.hoverIntensity * 0.2;
        sphere.scale.set(scale, scale, scale);
        
        // Apply forces and update positions
        const force = forces.get(sphere.uuid);
        if (force) {
            sphere.position.add(force);
            force.multiplyScalar(0.95);

            if (force.length() < 0.01) {
                forces.delete(sphere.uuid);
            }
        }

        // Return to original position with breathing offset
        const originalPos = sphere.userData.originalPosition;
        tempVector.set(
            originalPos.x,
            originalPos.y + breathingY,
            originalPos.z + breathingZ
        );
        sphere.position.lerp(tempVector, 0.018);
    });

    handleCollisions();

    renderer.render(scene, camera);
}

// Initialize
window.addEventListener('load', () => {
    // Start the entry animation after a brief delay
    setTimeout(playEntryAnimation, 300);
});

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();