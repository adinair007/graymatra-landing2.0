<template>
  <div
    ref="scrollContainer"
    data-scroll-container
    class="smooth-scroll-container"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";

const scrollContainer = ref<HTMLDivElement | null>(null);
let scrollInstance: LocomotiveScroll | null = null;

onMounted(async () => {
  await nextTick();

  if (!scrollContainer.value) return;

  const isMobileDevice =
    window.innerWidth <= 1024 ||
    /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent);

  // More aggressive mobile optimization
  scrollInstance = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: !isMobileDevice,
    lerp: isMobileDevice ? 0.15 : 0.08,
    multiplier: isMobileDevice ? 1.6 : 1.2,
    getDirection: true,
    getSpeed: true,
    class: "is-inview",
    scrollFromAnywhere: true,
    resetNativeScroll: isMobileDevice,
    reloadOnContextChange: true,
    smartphone: {
      smooth: false,
      breakpoint: 768,
    },
    tablet: {
      smooth: false,
      breakpoint: 1024,
    },
  });

  // Handle anchor links
  const handleAnchorClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');

    if (anchor) {
      e.preventDefault();
      const href = anchor.getAttribute("href");
      if (href && scrollInstance) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          scrollInstance.update();

          // Simpler scrolling on mobile
          scrollInstance.scrollTo(targetElement, {
            offset: -80,
            duration: isMobileDevice ? 800 : 1200,
            easing: [0.25, 0.0, 0.35, 1.0],
          });
        }
      }
    }
  };

  document.addEventListener("click", handleAnchorClick);

  // Debounced resize handler
  let resizeTimeout: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (scrollInstance) {
        scrollInstance.update();
      }
    }, 250); // Debounce resize updates
  };

  window.addEventListener("resize", handleResize);

  // Reduced update frequency
  const updateDelays = isMobileDevice
    ? [100, 500, 1000] // Fewer updates on mobile
    : [100, 300, 500, 800, 1200, 1500, 2000];

  updateDelays.forEach((delay) => {
    setTimeout(() => {
      scrollInstance?.update();
    }, delay);
  });

  // Listen for custom events that might change layout
  const handleLayoutChange = () => {
    setTimeout(() => {
      scrollInstance?.update();
    }, 100);
  };

  window.addEventListener("load", handleLayoutChange);
  document.addEventListener("DOMContentLoaded", handleLayoutChange);
});

onBeforeUnmount(() => {
  scrollInstance?.destroy();
  window.removeEventListener("resize", () => {});
  window.removeEventListener("load", () => {});
  document.removeEventListener("click", () => {});
  document.removeEventListener("DOMContentLoaded", () => {});
});
</script>

<style>
.smooth-scroll-container {
  min-height: 100vh;
  position: relative;
  background: transparent;
}

/* Ensure sections are properly visible */
[data-scroll-section] {
  will-change: auto; /* Don't force will-change everywhere */
}

/* Only apply will-change on desktop */
@media (min-width: 1025px) {
  [data-scroll-section] {
    will-change: transform;
  }
}

/* Ensure footer and all sections have proper spacing */
html,
body {
  overflow-x: hidden;
}

/* Fix for Locomotive Scroll container */
[data-scroll-container] {
  min-height: 100vh;
}

/* Performance optimization for mobile */
@media (max-width: 1024px) {
  .smooth-scroll-container {
    /* Use native scrolling on mobile */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Disable expensive effects on mobile */
  [data-scroll-section] {
    transform: none !important;
  }
}
</style>
