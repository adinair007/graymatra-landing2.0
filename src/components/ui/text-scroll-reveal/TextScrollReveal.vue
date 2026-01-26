<template>
  <div ref="containerRef" class="text-scroll-reveal-wrapper">
    <div class="text-scroll-reveal-content" :class="className">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="inline-block mr-2 sm:mr-3 transition-opacity duration-500"
        :style="getWordStyle(index)"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const containerRef = ref(null);
const scrollProgress = ref(0);
let ticking = false;

const words = computed(() => props.text.split(" "));

const isMobile = computed(() => window.innerWidth <= 1024);

const getWordStyle = (index) => {
  const totalWords = words.value.length;
  const wordProgress = (scrollProgress.value * (totalWords + 4) - index) / 1.8;
  const opacity = Math.max(0.15, Math.min(1, wordProgress));

  return {
    opacity,
    filter: isMobile.value
      ? "none"
      : `blur(${Math.max(0, 12 - wordProgress * 12)}px)`,
    willChange: "opacity",
  };
};
let observer = null;

const updateScrollProgress = () => {
  if (!containerRef.value) {
    ticking = false;
    return;
  }

  const rect = containerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const viewportCenter = windowHeight / 2;
  const elementCenter = rect.top + rect.height / 2;
  const maxDistance = windowHeight;
  const distance = viewportCenter - elementCenter;
  const progress = Math.max(
    0,
    Math.min(1, (distance + maxDistance * 0.5) / (maxDistance * 1.2)),
  );

  scrollProgress.value = progress;
  ticking = false;
};

const requestTick = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateScrollProgress);
  }
};

onMounted(() => {
  if (!containerRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestTick();
        }
      });
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  observer.observe(containerRef.value);
  window.addEventListener("scroll", requestTick, { passive: true });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  window.removeEventListener("scroll", requestTick);
});
</script>

<style scoped>
.text-scroll-reveal-wrapper {
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .text-scroll-reveal-wrapper {
    min-height: 100vh;
  }
}

.text-scroll-reveal-content {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  will-change: opacity;
}
</style>
