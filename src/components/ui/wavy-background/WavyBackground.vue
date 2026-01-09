<script setup lang="ts">
import { createNoise3D } from "simplex-noise";
import { onBeforeUnmount, onMounted, ref } from "vue";

interface WavyBackgroundProps {
  class?: string;
  containerClass?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}

const props = withDefaults(defineProps<WavyBackgroundProps>(), {
  colors: () => ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth: 50,
  backgroundFill: "black",
  blur: 10,
  speed: "fast",
  waveOpacity: 0.5,
});

const noise = createNoise3D();

let w: number = 0;
let h: number = 0;
let nt = 0;
let ctx: CanvasRenderingContext2D | null = null;
let animationId: number;

const canvasRef = ref<HTMLCanvasElement | null>(null);

function getSpeed(): number {
  return props.speed === "slow" ? 0.001 : 0.002;
}

function init() {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  if (!ctx) return;

  const parent = canvas.parentElement;
  if (parent) {
    w = canvas.width = parent.clientWidth;
    h = canvas.height = parent.clientHeight;
  }

  ctx.filter = `blur(${props.blur}px)`;

  window.addEventListener("resize", () => {
    if (parent) {
      w = canvas.width = parent.clientWidth;
      h = canvas.height = parent.clientHeight;
    }
    ctx!.filter = `blur(${props.blur}px)`;
  });

  render();
}

function drawWave(n: number) {
  nt += getSpeed();
  for (let i = 0; i < n; i++) {
    ctx!.beginPath();
    ctx!.lineWidth = props.waveWidth!;
    ctx!.strokeStyle = props.colors[i % props.colors!.length];
    for (let x = 0; x < w; x += 5) {
      const y = noise(x / 800, 0.3 * i, nt) * 100;
      ctx!.lineTo(x, y + h * 0.5);
    }
    ctx!.stroke();
    ctx!.closePath();
  }
}

function render() {
  if (!ctx) return;

  ctx.fillStyle = props.backgroundFill!;
  ctx.globalAlpha = props.waveOpacity!;
  ctx.fillRect(0, 0, w, h);
  drawWave(5);

  animationId = requestAnimationFrame(render);
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", () => {});
});

onMounted(() => {
  init();
});
</script>

<template>
  <div
    class="flex h-screen flex-col items-center justify-center"
    :class="[props.containerClass]"
  >
    <canvas ref="canvasRef" class="absolute z-0" />
    <div class="relative z-10" :class="[props.class]">
      <slot />
    </div>
  </div>
</template>
