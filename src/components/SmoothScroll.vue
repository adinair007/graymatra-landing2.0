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

  scrollInstance = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: true,
    lerp: 0.08,
    multiplier: 1.2,
    getDirection: true,
    getSpeed: true,
    class: "is-inview",
    scrollFromAnywhere: true,
    resetNativeScroll: true,
    reloadOnContextChange: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
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

  // Force multiple updates to ensure all sections are detected
  setTimeout(() => {
    scrollInstance?.update();
  }, 100);

  setTimeout(() => {
    scrollInstance?.update();
  }, 500);

  setTimeout(() => {
    scrollInstance?.update();
  }, 1000);
});

onBeforeUnmount(() => {
  scrollInstance?.destroy();
  window.removeEventListener("resize", () => {});
  document.removeEventListener("click", () => {});
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
</style>
