<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted, onUnmounted, ref, nextTick } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  containerClass?: HTMLAttributes["class"];
  duration?: number;
  delay?: number;
  stagger?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.6,
  delay: 0.2,
  stagger: 0.1,
});

gsap.registerPlugin(SplitText);

const textContainer = ref<HTMLElement | null>(null);
const containerDiv = ref<HTMLElement | null>(null);
let splitInstance: any = null;
let hasAnimated = false;

function checkScroll() {
  if (!containerDiv.value || hasAnimated) return;

  const rect = containerDiv.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Check if element is in viewport (more generous threshold)
  if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
    hasAnimated = true;
    animateText();
  }
}

function animateText() {
  if (!splitInstance) return;

  gsap.to(splitInstance.lines, {
    duration: props.duration,
    delay: props.delay,
    yPercent: 0,
    stagger: props.stagger,
    ease: "power3.out",
  });
}

async function initSplitText() {
  if (!textContainer.value || !containerDiv.value) return;

  // Wait for fonts to load
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  splitInstance = new SplitText(textContainer.value, {
    type: "words,lines",
    linesClass: "line",
  });

  // Set initial state
  gsap.set(splitInstance.lines, {
    yPercent: 100,
  });

  // Listen to scroll events
  window.addEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", checkScroll);
  }

  // Set up interval to continuously check scroll position
  const checkInterval = setInterval(checkScroll, 100);

  // Clean up interval after 30 seconds or when animated
  setTimeout(() => {
    if (!hasAnimated) {
      clearInterval(checkInterval);
    }
  }, 30000);

  // Store interval for cleanup
  (window as any).__textRevealInterval = checkInterval;

  // Initial check
  checkScroll();
}

onMounted(async () => {
  await nextTick();
  await initSplitText();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", checkScroll);
  }

  if ((window as any).__textRevealInterval) {
    clearInterval((window as any).__textRevealInterval);
  }

  splitInstance?.revert();
});
</script>

<template>
  <div
    ref="containerDiv"
    class="text-reveal-container"
    :class="[props.containerClass]"
  >
    <div ref="textContainer" :class="[props.class]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.text-reveal-container {
  overflow: hidden;
}

.line {
  overflow: hidden;
  display: inline-block;
}
</style>
