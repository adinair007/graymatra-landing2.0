<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { Camera, Mesh, Plane, Program, Renderer, Transform } from "ogl";

const props = withDefaults(
  defineProps<{
    hue?: number;
    saturation?: number;
    chroma?: number;
    class?: string;
  }>(),
  {
    hue: 17,
    saturation: 0.9,
    chroma: 0.6,
  },
);

const canvasRef = ref<HTMLCanvasElement | null>(null);
const animationRef = ref<number | null>(null);
const rendererRef = ref<Renderer | null>(null);
const sceneRef = ref<Transform | null>(null);
const meshRef = ref<Mesh | null>(null);
const cameraRef = ref<Camera | null>(null);

const pointer = ref({ x: 0, y: 0, targetX: 0, targetY: 0 });

const isTouchEnvironment = ref(false);

function detectEnvironment() {
  // More reliable check: prioritize touch capability over width
  isTouchEnvironment.value =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // fallback width check only if no touch info
    (navigator.maxTouchPoints === undefined && window.innerWidth <= 1024);
}

const vertex = `
  precision mediump float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer;
  uniform float u_hue;
  uniform float u_saturation;
  uniform float u_chroma;
  uniform bool u_disablePointerEffect;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro(vec2 uv, float t, float p) {
    vec2 s = vec2(0.);
    vec2 r = vec2(0.);
    float scale = 8.;
    for (int i = 0; i < 15; i++) {
      uv  = rotate(uv, 1.);
      s   = rotate(s, 1.);
      vec2 layer = uv * scale + float(i) + s - t;
      s += sin(layer) + 2.4 * p;
      r += (0.5 + 0.5 * cos(layer)) / scale;
      scale *= 1.2;
    }
    return r.x + r.y;
  }

  vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x*6.+vec3(0,4,2),6.)-3.)-1.,0.,1.);
    return c.z + c.y * (rgb - 0.5) * (1. - abs(2.*c.z - 1.));
  }

  void main() {
    vec2 uv = 0.5 * vUv;
    uv.x *= u_ratio;

    float influence = 0.0;
    if (!u_disablePointerEffect) {
      vec2 delta = uv - u_pointer;
      delta.x *= u_ratio;
      float dist = length(delta);
      influence = 0.5 * pow(1.0 - clamp(dist, 0.0, 1.0), 2.0);
    }

    float t = 0.001 * u_time;
    float n = neuro(uv, t, influence);
    n = 1.2 * pow(n, 3.0);
    n += pow(n, 10.0);
    n = max(0.0, n - 0.5);
    n *= (1.0 - length(vUv - 0.5));

    float h = u_hue / 360.0;
    vec3 hsl = vec3(h, u_saturation, u_chroma);
    vec3 col = hsl2rgb(hsl) * n;

    gl_FragColor = vec4(col, n * 0.92);
  }
`;

function initWebGL() {
  const canvas = canvasRef.value;
  if (!canvas) return false;

  try {
    const renderer = new Renderer({
      canvas,
      dpr: Math.min(window.devicePixelRatio, 1.8),
    });

    const camera = new Camera(renderer.gl);
    const scene = new Transform();

    const geometry = new Plane(renderer.gl, { width: 2, height: 2 });

    const program = new Program(renderer.gl, {
      vertex,
      fragment,
      uniforms: {
        u_time: { value: 0 },
        u_ratio: { value: window.innerWidth / window.innerHeight },
        u_pointer: { value: [0.5, 0.5] },
        u_hue: { value: props.hue },
        u_saturation: { value: props.saturation },
        u_chroma: { value: props.chroma },
        u_disablePointerEffect: { value: false },
      },
    });

    const mesh = new Mesh(renderer.gl, { geometry, program });
    mesh.setParent(scene);

    rendererRef.value = renderer;
    cameraRef.value = camera;
    sceneRef.value = scene;
    meshRef.value = mesh;

    return true;
  } catch (err) {
    console.error("WebGL init failed:", err);
    return false;
  }
}

function onResize() {
  if (!rendererRef.value) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  rendererRef.value.setSize(w, h);
  if (meshRef.value?.program?.uniforms.u_ratio) {
    meshRef.value.program.uniforms.u_ratio.value = w / h;
  }
  detectEnvironment(); // re-check on resize (orientation change etc.)
}

let lastFrameTime = 0;
const frameInterval = 1000 / 60; // 60 FPS target

function animate(currentTime: number = 0) {
  if (
    !rendererRef.value ||
    !sceneRef.value ||
    !cameraRef.value ||
    !meshRef.value
  )
    return;

  // Frame rate limiting
  const elapsed = currentTime - lastFrameTime;

  if (elapsed > frameInterval) {
    lastFrameTime = currentTime - (elapsed % frameInterval);

    const uniforms = meshRef.value.program.uniforms;
    uniforms.u_time.value = performance.now();

    // Only lerp & update pointer when pointer effect is allowed
    if (!isTouchEnvironment.value) {
      pointer.value.x += (pointer.value.targetX - pointer.value.x) * 0.16;
      pointer.value.y += (pointer.value.targetY - pointer.value.y) * 0.16;

      uniforms.u_pointer.value = [
        pointer.value.x / window.innerWidth,
        1 - pointer.value.y / window.innerHeight,
      ];
    }

    rendererRef.value.render({
      scene: sceneRef.value,
      camera: cameraRef.value,
    });
  }

  animationRef.value = requestAnimationFrame(animate);
}

function handlePointerMove(e: PointerEvent) {
  if (isTouchEnvironment.value) return;
  pointer.value.targetX = e.clientX;
  pointer.value.targetY = e.clientY;
}

onMounted(() => {
  detectEnvironment();
  window.addEventListener("resize", onResize);

  if (initWebGL()) {
    onResize(); // sets ratio + detects env
    animate(); // always start time-based animation loop

    // Only attach mouse listener if pointer effect should be active
    if (!isTouchEnvironment.value) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      // Center initially
      pointer.value.targetX = window.innerWidth * 0.5;
      pointer.value.targetY = window.innerHeight * 0.5;
      pointer.value.x = pointer.value.targetX;
      pointer.value.y = pointer.value.targetY;
    }

    // Ensure uniform matches current state
    if (meshRef.value?.program?.uniforms.u_disablePointerEffect) {
      meshRef.value.program.uniforms.u_disablePointerEffect.value =
        isTouchEnvironment.value;
    }
  }
});

onUnmounted(() => {
  if (animationRef.value) cancelAnimationFrame(animationRef.value);
  window.removeEventListener("resize", onResize);
  if (!isTouchEnvironment.value) {
    window.removeEventListener("pointermove", handlePointerMove);
  }
});

watch(
  () => isTouchEnvironment.value,
  (val) => {
    if (meshRef.value?.program?.uniforms.u_disablePointerEffect) {
      meshRef.value.program.uniforms.u_disablePointerEffect.value = val;
    }
  },
);
</script>

<template>
  <canvas
    ref="canvasRef"
    class="absolute inset-0 w-full h-full pointer-events-none select-none"
    :class="props.class"
  />
</template>

<style scoped>
canvas {
  z-index: -1;
  opacity: 0.92;
}

@media (max-width: 1024px) {
  canvas {
    pointer-events: none !important;
    touch-action: none !important;
  }
}
</style>
