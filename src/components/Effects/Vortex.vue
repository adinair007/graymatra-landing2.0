<template>
  <canvas ref="canvasRef" :class="className" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  className: String,
});

const canvasRef = ref(null);
let animationId = null;

const colors = [
  "#fe9f06", // Saffron main
  "#ffb340",
  "#ff7b00",
  "#e68a00",
  "#ff4500",
];

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.size = Math.random() * 3 + 1;
    this.life = 0;
    this.maxLife = Math.random() * 100 + 100;
  }

  update(cx, cy) {
    this.life++;
    if (this.life > this.maxLife) {
      this.reset();
    }

    const dx = cx - this.x;
    const dy = cy - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    // Swirl force
    const force = 0.05;
    const perpX = -dy / dist;
    const perpY = dx / dist;

    this.vx += perpX * force * 100;
    this.vy += perpY * force * 100;

    // Damping
    this.vx *= 0.98;
    this.vy *= 0.98;

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 1 - this.life / this.maxLife;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  const particles = Array.from({ length: 200 }, () => new Particle());

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    particles.forEach((p) => {
      p.update(cx, cy);
      p.draw(ctx);
    });

    animationId = requestAnimationFrame(animate);
  };

  animate();

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
  });
});
</script>
