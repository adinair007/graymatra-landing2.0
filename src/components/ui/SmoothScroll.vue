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

  scrollInstance = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: true,
    lerp: isMobileDevice ? 0.12 : 0.08,
    multiplier: isMobileDevice ? 1.6 : 1.2,
    getDirection: true,
    getSpeed: true,
    class: "is-inview",
    scrollFromAnywhere: true,
    resetNativeScroll: true,
    reloadOnContextChange: true,
    smartphone: { smooth: true },
    tablet: { smooth: true, breakpoint: 1024 },
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
          // Update scroll before navigating
          scrollInstance.update();

          scrollInstance.scrollTo(targetElement, {
            offset: -80,
            duration: 1200,
            easing: [0.25, 0.0, 0.35, 1.0],
          });
        }
      }
    }
  };

  document.addEventListener("click", handleAnchorClick);

  // Update on resize
  const handleResize = () => {
    if (scrollInstance) {
      scrollInstance.update();
    }
  };
  window.addEventListener("resize", handleResize);

  const updateDelays = [100, 300, 500, 800, 1200, 1500, 2000];
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
  will-change: transform;
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
</style>
