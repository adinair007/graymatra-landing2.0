<template>
  <div ref="wrapper" class="wrapper" data-scroll-container>
    <slot />
  </div>
</template>

<script setup lang="ts">
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";

const wrapper = ref<HTMLDivElement | null>(null);
let scrollInstance: LocomotiveScroll | null = null;

onMounted(async () => {
  await nextTick();

  if (!wrapper.value) return;

  scrollInstance = new LocomotiveScroll({
    el: wrapper.value,
    smooth: true,
    lerp: 0.1,
    multiplier: 1,
    getDirection: true,
    getSpeed: true,
    class: "is-inview",
    scrollbar: false,
  });

  window.addEventListener("resize", () => scrollInstance?.update());
});

onBeforeUnmount(() => {
  scrollInstance?.destroy();
  window.removeEventListener("resize", () => {});
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  /* Remove overflow: hidden */
}
</style>
