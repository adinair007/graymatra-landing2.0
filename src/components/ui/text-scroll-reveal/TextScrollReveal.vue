<template>
  <div ref="containerRef" class="text-scroll-reveal-wrapper">
    <div class="text-scroll-reveal-content" :class="className">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="inline-block mr-2 sm:mr-3 transition-all duration-500"
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

const words = computed(() => props.text.split(" "));

const getWordStyle = (index) => {
  const totalWords = words.value.length;
  // More aggressive reveal calculation with buffer for last words
  const wordProgress = (scrollProgress.value * (totalWords + 4) - index) / 1.8;
  const opacity = Math.max(0.15, Math.min(1, wordProgress));
  const blur = Math.max(0, 12 - wordProgress * 12);

  return {
    opacity,
    filter: `blur(${blur}px)`,
  };
};

let observer = null;

onMounted(() => {
  if (!containerRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateScrollProgress();
        }
      });
    },
    { threshold: Array.from({ length: 100 }, (_, i) => i / 100) }
  );

  observer.observe(containerRef.value);

  window.addEventListener("scroll", updateScrollProgress);
});

const updateScrollProgress = () => {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Use viewport-based calculation for sticky effect
  // Progress from when element enters viewport to when it exits
  const viewportCenter = windowHeight / 2;
  const elementCenter = rect.top + rect.height / 2;

  // Calculate progress based on distance from viewport center
  const maxDistance = windowHeight;
  const distance = viewportCenter - elementCenter;

  // Normalize to 0-1 range, with extended range for complete reveal
  const progress = Math.max(
    0,
    Math.min(1, (distance + maxDistance * 0.5) / (maxDistance * 1.2))
  );

  scrollProgress.value = progress;
};

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  window.removeEventListener("scroll", updateScrollProgress);
});
</script>

<style scoped>
.text-scroll-reveal-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-scroll-reveal-content {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  will-change: opacity;
}
</style>
