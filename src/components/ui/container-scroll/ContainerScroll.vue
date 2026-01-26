<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import ContainerScrollTitle from "./ContainerScrollTitle.vue";
import ContainerScrollCard from "./ContainerScrollCard.vue";

const containerRef = ref(null);
const isMobile = ref(false);
const scrollYProgress = ref(0);

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

function updateScrollProgress() {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate the center of the viewport
  const viewportCenter = windowHeight / 2;

  // Calculate the center of the element
  const elementCenter = rect.top + rect.height / 2;

  // Distance from viewport center to element center
  const distance = viewportCenter - elementCenter;

  // Calculate progress (0 to 1) based on how close element is to viewport center
  // Element starts animating when it enters the viewport and completes when centered
  const maxDistance = windowHeight;
  let progress = (distance + maxDistance / 2) / maxDistance;

  // Clamp between 0 and 1
  progress = Math.max(0, Math.min(1, progress));

  scrollYProgress.value = progress;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);

  // Listen to scroll on the locomotive scroll container
  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", updateScrollProgress);
  }

  // Also listen to window scroll as fallback
  window.addEventListener("scroll", updateScrollProgress);

  // Initial update
  updateScrollProgress();

  // Update periodically to catch locomotive scroll updates
  const interval = setInterval(updateScrollProgress, 50);

  onUnmounted(() => {
    clearInterval(interval);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
  window.removeEventListener("scroll", updateScrollProgress);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", updateScrollProgress);
  }
});

const scaleDimensions = computed(() =>
  isMobile.value ? [0.7, 0.9] : [1.05, 1],
);

const isReducedMotion = computed(
  () =>
    window.innerWidth <= 1024 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
);

const rotate = computed(() =>
  isReducedMotion.value ? 0 : 20 * (1 - scrollYProgress.value),
);
const scale = computed(() => {
  if (isReducedMotion.value) return 1;
  const [start, end] = scaleDimensions.value;
  return start + (end - start) * scrollYProgress.value;
});
const translateY = computed(() =>
  isReducedMotion.value
    ? -30 * scrollYProgress.value
    : -100 * scrollYProgress.value,
);
</script>

<template>
  <div
    ref="containerRef"
    class="relative flex h-[60rem] items-center justify-center p-2 md:h-[80rem] md:p-20"
  >
    <div class="relative w-full py-10 md:py-40" style="perspective: 1000px">
      <ContainerScrollTitle :translate="translateY">
        <slot name="title" />
      </ContainerScrollTitle>
      <ContainerScrollCard :rotate="rotate" :scale="scale">
        <slot name="card" />
      </ContainerScrollCard>
    </div>
  </div>
</template>
