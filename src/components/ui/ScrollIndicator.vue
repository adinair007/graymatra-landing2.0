<template>
  <div
    class="fixed z-50 flex flex-col items-center pointer-events-none bottom-5 right-4 transition-all duration-700 ease-out md:bottom-8 md:right-8"
    :class="{
      'opacity-0 scale-90 translate-y-6': shouldHide,
      'opacity-100 scale-100 translate-y-0': !shouldHide,
    }"
  >
    <div class="flex flex-col items-center gap-3 md:gap-4">
      <!-- Scroll text -->
      <span
        class="text-[10px] uppercase tracking-[0.35em] font-light text-white/70 rotate-90 origin-bottom-left translate-x-3 translate-y-1 md:text-xs md:tracking-[0.4em] md:translate-x-4"
      >
        Scroll
      </span>

      <!-- Progress line -->
      <div
        class="relative w-[1.5px] h-14 rounded-full overflow-hidden bg-white/15 md:w-[2px] md:h-24"
      >
        <div class="absolute left-0 w-full h-full overflow-hidden">
          <div
            class="absolute left-0 w-full h-12 bg-gradient-to-b from-transparent from-5% via-[#ff9933] via-50% to-transparent to-95% opacity-100 animate-pulse-wave"
          ></div>
        </div>
      </div>

      <!-- Arrow -->
      <svg
        class="w-4 h-4 md:w-5 md:h-5 text-white/65 transition-all duration-300"
        :class="{ 'animate-bounce-subtle': scrollPosition < 0.12 }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const scrollPosition = ref(0);
const isFooterInView = ref(false);

const shouldHide = computed(() => {
  // Hide when scroll is near bottom OR footer is in view
  return scrollPosition.value > 0.75 || isFooterInView.value;
});

let ticking = false;

function checkFooterVisibility() {
  const footer = document.querySelector("footer");
  if (!footer) {
    // Fallback: hide when very close to bottom
    isFooterInView.value = scrollPosition.value > 0.85;
    return;
  }

  const rect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Hide when footer starts entering viewport (top edge crosses 90% of viewport height)
  const footerTopInView = rect.top < viewportHeight * 0.9;

  isFooterInView.value = footerTopInView;
}

function updateScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
  );
  const clientHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const maxScroll = scrollHeight - clientHeight;

  if (maxScroll <= 0) {
    scrollPosition.value = 0;
  } else {
    scrollPosition.value = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
  }

  checkFooterVisibility();
  ticking = false;
}

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll);
    ticking = true;
  }
}

let resizeObserver = null;

onMounted(() => {
  updateScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", updateScroll, { passive: true });

  // Delayed updates for smooth scroll libraries
  setTimeout(updateScroll, 100);
  setTimeout(updateScroll, 300);
  setTimeout(updateScroll, 600);
  setTimeout(updateScroll, 1000);

  // Observe footer size changes
  const footer = document.querySelector("footer");
  if (footer && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(updateScroll);
    resizeObserver.observe(footer);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateScroll);
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
@keyframes pulse-wave {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(250%);
    opacity: 0;
  }
}

@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

.animate-pulse-wave {
  animation: pulse-wave 2.5s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}
</style>
