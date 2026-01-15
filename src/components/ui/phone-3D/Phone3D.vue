<template>
  <div ref="containerRef" class="w-full h-full"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const containerRef = ref(null);
let scene, camera, renderer, phone, animationId;

const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  initThree();
  animate();
});

onBeforeUnmount(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  if (renderer) {
    renderer.dispose();
  }
});

function initThree() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    45,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(
    containerRef.value.clientWidth,
    containerRef.value.clientHeight
  );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  containerRef.value.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Brighter ambient
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // Stronger
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const rimLight = new THREE.DirectionalLight(0xff9933, 0.6);
  rimLight.position.set(-5, 0, -5);
  scene.add(rimLight);

  // Screen illumination light - brighter
  const screenLight = new THREE.PointLight(0xffffff, 1.8, 10);
  screenLight.position.set(0, 0, 3);
  scene.add(screenLight);

  // Create iPhone 3D Model
  createiPhone();

  // Handle window resize
  window.addEventListener("resize", onWindowResize);
}

function createiPhone() {
  const phoneGroup = new THREE.Group();

  // Phone dimensions (iPhone-like proportions)
  const width = 1.5;
  const height = 3;
  const depth = 0.15;
  const radius = 0.3;

  // Main phone body with rounded corners
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2 + radius, -height / 2);
  shape.lineTo(width / 2 - radius, -height / 2);
  shape.quadraticCurveTo(
    width / 2,
    -height / 2,
    width / 2,
    -height / 2 + radius
  );
  shape.lineTo(width / 2, height / 2 - radius);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
  shape.lineTo(-width / 2 + radius, height / 2);
  shape.quadraticCurveTo(
    -width / 2,
    height / 2,
    -width / 2,
    height / 2 - radius
  );
  shape.lineTo(-width / 2, -height / 2 + radius);
  shape.quadraticCurveTo(
    -width / 2,
    -height / 2,
    -width / 2 + radius,
    -height / 2
  );

  // Create a hole for the screen so it's visible
  const screenHole = new THREE.Path();
  const holeWidth = width - 0.2;
  const holeHeight = height - 0.2;
  const holeRadius = 0.25;

  screenHole.moveTo(-holeWidth / 2 + holeRadius, -holeHeight / 2);
  screenHole.lineTo(holeWidth / 2 - holeRadius, -holeHeight / 2);
  screenHole.quadraticCurveTo(
    holeWidth / 2,
    -holeHeight / 2,
    holeWidth / 2,
    -holeHeight / 2 + holeRadius
  );
  screenHole.lineTo(holeWidth / 2, holeHeight / 2 - holeRadius);
  screenHole.quadraticCurveTo(
    holeWidth / 2,
    holeHeight / 2,
    holeWidth / 2 - holeRadius,
    holeHeight / 2
  );
  screenHole.lineTo(-holeWidth / 2 + holeRadius, holeHeight / 2);
  screenHole.quadraticCurveTo(
    -holeWidth / 2,
    holeHeight / 2,
    -holeWidth / 2,
    holeHeight / 2 - holeRadius
  );
  screenHole.lineTo(-holeWidth / 2, -holeHeight / 2 + holeRadius);
  screenHole.quadraticCurveTo(
    -holeWidth / 2,
    -holeHeight / 2,
    -holeWidth / 2 + holeRadius,
    -holeHeight / 2
  );

  shape.holes.push(screenHole);

  const extrudeSettings = {
    steps: 2,
    depth: depth,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 5,
  };

  // Phone body - IPHONE 17 ORANGE WITH SHINE
  const bodyGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xff8c42, // iPhone 17 orange
    metalness: 0.99, // Maximum metallic shine
    roughness: 0.02, // Ultra shiny
    envMapIntensity: 3.0, // Strong reflections
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.receiveShadow = true;
  phoneGroup.add(body);

  // Screen with texture - BRIGHTER
  const screenGeometry = new THREE.PlaneGeometry(
    holeWidth * 0.95,
    holeHeight * 0.95
  );

  // Load screen texture
  const textureLoader = new THREE.TextureLoader();
  const screenMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.5,
    metalness: 0,
    roughness: 0.3,
  });

  // Load the app screenshot
  textureLoader.load(
    props.imagePath,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      screenMaterial.map = texture;
      screenMaterial.emissiveMap = texture;
      screenMaterial.emissiveIntensity = 0.65;
      screenMaterial.needsUpdate = true;
    },
    undefined,
    (error) => {
      console.warn("Could not load texture:", error);
    }
  );

  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.z = depth;
  screen.position.y = 0.05; // Reduced from 0.2 - keeps it within phone bounds
  phoneGroup.add(screen);

  // Glossy screen protector effect
  const glossGeometry = new THREE.PlaneGeometry(
    holeWidth * 0.95,
    holeHeight * 0.95
  );
  const glossMaterial = new THREE.MeshPhysicalMaterial({
    transparent: true,
    opacity: 0.1,
    metalness: 0,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    reflectivity: 0.8,
  });
  const gloss = new THREE.Mesh(glossGeometry, glossMaterial);
  gloss.position.z = depth + 0.01;
  gloss.position.y = 0.05; // Match screen position
  phoneGroup.add(gloss);

  // Surrounding saffron glow/halo effect - STRONGER
  const glowGeometry = new THREE.PlaneGeometry(width + 0.8, height + 0.8);
  const glowMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      color: { value: new THREE.Color(0xff9933) },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vec2(0.5, 0.5);
        float dist = distance(vUv, center);
        
        // Create a circular gradient that fades from center - STRONGER
        float alpha = smoothstep(0.5, 0.15, dist) * 0.5;
        
        // Add subtle pulsing
        alpha *= 0.8 + 0.2 * sin(time * 2.0);
        
        // Fade out towards edges more smoothly
        alpha *= 1.0 - smoothstep(0.15, 0.5, dist);
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);
  glow.position.z = depth / 2;
  phoneGroup.add(glow);

  // Store glow material for animation
  phoneGroup.userData.glowMaterial = glowMaterial;

  // Side buttons - matching orange metallic
  const buttonGeometry = new THREE.BoxGeometry(0.05, 0.2, 0.03);
  const buttonMaterial = new THREE.MeshStandardMaterial({
    color: 0xff8c42, // Match body color - iPhone 17 orange
    metalness: 0.99,
    roughness: 0.02,
  });

  // Power button
  const powerButton = new THREE.Mesh(buttonGeometry, buttonMaterial);
  powerButton.position.set(width / 2 + 0.03, 0.8, depth / 2);
  phoneGroup.add(powerButton);

  // Volume buttons
  const volumeUp = new THREE.Mesh(buttonGeometry, buttonMaterial);
  volumeUp.position.set(-width / 2 - 0.03, 0.5, depth / 2);
  phoneGroup.add(volumeUp);

  const volumeDown = new THREE.Mesh(buttonGeometry, buttonMaterial);
  volumeDown.position.set(-width / 2 - 0.03, 0.2, depth / 2);
  phoneGroup.add(volumeDown);

  // Camera bump (on back, so negative z)
  const cameraRadius = 0.25;
  const cameraGeometry = new THREE.CylinderGeometry(
    cameraRadius,
    cameraRadius,
    0.05,
    32
  );
  const cameraMaterial = new THREE.MeshStandardMaterial({
    color: 0x2a2a3a,
    metalness: 0.95,
    roughness: 0.15,
  });
  const camera1 = new THREE.Mesh(cameraGeometry, cameraMaterial);
  camera1.rotation.x = Math.PI / 2;
  camera1.position.set(-0.35, height / 2 - 0.5, -0.03);
  phoneGroup.add(camera1);

  // Camera lenses
  const lensGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 32);
  const lensMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalness: 1,
    roughness: 0.05,
    emissive: 0x111111,
  });
  const lens = new THREE.Mesh(lensGeometry, lensMaterial);
  lens.rotation.x = Math.PI / 2;
  lens.position.set(-0.35, height / 2 - 0.5, -0.01);
  phoneGroup.add(lens);

  phoneGroup.position.z = -depth / 2;
  phone = phoneGroup;
  scene.add(phone);
}

function animate() {
  animationId = requestAnimationFrame(animate);

  // Smooth rotation animation - FLIPPED to show front
  if (phone) {
    const time = Date.now() * 0.0003;
    phone.rotation.y = Math.sin(time) * 0.6;
    phone.rotation.x = Math.cos(time * 0.7) * 0.1;
    phone.rotation.z = Math.sin(time * 0.5) * 0.05;

    // Subtle floating animation
    phone.position.y = Math.sin(time * 2) * 0.1;

    // Update glow shader time uniform for pulsing effect
    if (phone.userData.glowMaterial) {
      phone.userData.glowMaterial.uniforms.time.value = time * 3;
    }
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!containerRef.value) return;

  camera.aspect =
    containerRef.value.clientWidth / containerRef.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(
    containerRef.value.clientWidth,
    containerRef.value.clientHeight
  );
}
</script>

<style scoped>
/* Container styles handled by parent */
</style>
