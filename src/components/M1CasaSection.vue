<template>
  <section
    id="m1-casa"
    class="py-32 relative overflow-hidden"
    data-scroll-section
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section Title - Outside Card -->
      <div class="flex items-center justify-start mb-16 gap-4 px-4 group">
        <div class="relative">
          <h2
            class="text-6xl md:text-7xl lg:text-8xl font-bhavuka font-bold text-white dark:text-gray-100 tracking-wide"
          >
            M1 Casa
          </h2>
          <div
            class="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ff9933] group-hover:w-full transition-all duration-700"
          ></div>
        </div>
        <div
          class="flex-1 h-[1px] bg-gradient-to-r from-[#ff9933]/40 via-[#ff9933]/20 to-transparent"
        ></div>
      </div>

      <!-- M1 Casa Showcase Card -->
      <div class="relative group">
        <!-- Card Container with darker acrylic effect -->
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 dark:from-black/80 dark:via-gray-900/70 backdrop-blur-3xl border border-white/10 dark:border-white/5 group-hover:border-[#ff9933]/50 transition-all duration-700 group-hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
        >
          <!-- Animated mesh gradient background -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          >
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.08),transparent_50%)]"
            ></div>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,51,0.06),transparent_40%)]"
            ></div>
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,153,51,0.06),transparent_40%)]"
            ></div>
          </div>

          <!-- Content Grid -->
          <div
            class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16"
          >
            <!-- Left Content -->
            <div class="flex flex-col justify-center">
              <!-- Animated Tagline -->
              <div class="mb-8">
                <div ref="taglineRef" class="leading-snug tracking-wide">
                  <span
                    v-for="(word, idx) in taglineWords"
                    :key="word + idx"
                    class="inline-block text-3xl md:text-4xl lg:text-5xl font-bhavuka font-medium tracking-tight text-[#ff9933] leading-tight opacity-0"
                    :style="{
                      filter: 'blur(10px)',
                      transition: 'opacity 0.7s, filter 0.7s',
                    }"
                    :ref="
                      (el) => {
                        if (el) taglineSpans[idx] = el;
                      }
                    "
                  >
                    {{ word }}&nbsp;
                  </span>
                </div>
              </div>

              <!-- Description with Text Reveal -->
              <div class="mb-12">
                <div ref="descriptionContainer" class="overflow-hidden">
                  <p
                    ref="descriptionText"
                    class="text-lg md:text-xl text-gray-300 dark:text-gray-400 leading-relaxed font-light opacity-0"
                  >
                    A modern property management platform designed to streamline
                    community operations with intuitive tools, secure access,
                    and efficient data management for administrators and
                    residents alike.
                  </p>
                </div>
              </div>

              <!-- Learn More Link -->
              <router-link
                to="/m1-casa"
                class="group/link inline-flex items-center gap-3 text-[#ff9933] text-lg md:text-xl font-medium transition-all duration-500 hover:gap-5 w-fit"
              >
                <span class="relative">
                  Learn more
                  <span
                    class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff9933] transition-all duration-500 group-hover/link:w-full"
                  ></span>
                </span>
                <svg
                  class="w-5 h-5 transition-transform duration-500 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>
            </div>

            <!-- Right Content - Logo Animation -->
            <div class="flex items-center justify-center lg:justify-end">
              <div class="relative group/logo">
                <!-- Glow effect behind logo -->
                <div
                  class="absolute inset-0 rounded-3xl bg-[#ff9933]/20 blur-3xl scale-110 opacity-60 group-hover/logo:opacity-100 transition-all duration-700"
                ></div>

                <!-- Logo container -->
                <div
                  class="relative rounded-3xl overflow-hidden border-2 border-[#ff9933]/30 group-hover/logo:border-[#ff9933]/60 transition-all duration-700 bg-black/20 p-8 backdrop-blur-sm"
                >
                  <img
                    src="../assets/M1CasaLogoAnimation.gif"
                    alt="M1 Casa Logo Animation"
                    class="w-full max-w-md h-auto transition-transform duration-700 group-hover/logo:scale-105"
                  />
                </div>

                <!-- Orbiting particles -->
                <div
                  class="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000"
                >
                  <div
                    class="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff9933] rounded-full animate-float-1"
                  ></div>
                  <div
                    class="absolute top-3/4 right-1/3 w-2 h-2 bg-[#ff9933] rounded-full animate-float-2"
                  ></div>
                  <div
                    class="absolute bottom-1/3 left-2/3 w-2 h-2 bg-[#ff9933] rounded-full animate-float-3"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Edge glow effect -->
          <div
            class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          >
            <div
              class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/50 to-transparent"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/50 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Floating particles effect on main card -->
        <div
          class="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        >
          <div
            class="absolute top-1/4 left-1/4 w-1 h-1 bg-[#ff9933] rounded-full animate-card-float-1"
          ></div>
          <div
            class="absolute top-3/4 right-1/3 w-1 h-1 bg-[#ff9933] rounded-full animate-card-float-2"
          ></div>
          <div
            class="absolute bottom-1/3 left-2/3 w-1 h-1 bg-[#ff9933] rounded-full animate-card-float-3"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 w-1 h-1 bg-[#ff9933] rounded-full animate-card-float-4"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const taglineRef = ref(null);
const taglineSpans = ref([]);
const descriptionContainer = ref(null);
const descriptionText = ref(null);

const taglineWords = computed(() =>
  "Simplifying Property Management".split(" ")
);

let hasTaglineAnimated = false;
let hasDescriptionAnimated = false;

function checkScroll() {
  // Check tagline animation
  if (!hasTaglineAnimated && taglineRef.value) {
    const rect = taglineRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      hasTaglineAnimated = true;
      animateTagline();
    }
  }

  // Check description animation
  if (!hasDescriptionAnimated && descriptionText.value) {
    const rect = descriptionText.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      hasDescriptionAnimated = true;
      animateDescription();
    }
  }
}

function animateTagline() {
  taglineSpans.value.forEach((span, index) => {
    if (span) {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.filter = "blur(0px)";
      }, index * 150);
    }
  });
}

function animateDescription() {
  if (descriptionText.value) {
    setTimeout(() => {
      descriptionText.value.style.opacity = "1";
      descriptionText.value.style.transition = "opacity 1s ease-out";
    }, 300);
  }
}

onMounted(async () => {
  await nextTick();

  // Listen to scroll events
  window.addEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", checkScroll);
  }

  // Set up interval to continuously check scroll position
  const checkInterval = setInterval(checkScroll, 100);

  // Clean up interval after 30 seconds
  setTimeout(() => {
    clearInterval(checkInterval);
  }, 30000);

  // Initial check
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", checkScroll);
  }
});
</script>

<style scoped>
/* Logo particles */
@keyframes float-1 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(15px, -25px);
    opacity: 1;
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-20px, -20px);
    opacity: 1;
  }
}

@keyframes float-3 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(12px, -30px);
    opacity: 1;
  }
}

/* Card particles */
@keyframes card-float-1 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(10px, -20px);
    opacity: 1;
  }
}

@keyframes card-float-2 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-15px, -15px);
    opacity: 1;
  }
}

@keyframes card-float-3 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(8px, -25px);
    opacity: 1;
  }
}

@keyframes card-float-4 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-10px, -18px);
    opacity: 1;
  }
}

.animate-float-1 {
  animation: float-1 3s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 4s ease-in-out infinite 0.5s;
}

.animate-float-3 {
  animation: float-3 3.5s ease-in-out infinite 1s;
}

.animate-card-float-1 {
  animation: card-float-1 3s ease-in-out infinite;
}

.animate-card-float-2 {
  animation: card-float-2 4s ease-in-out infinite 0.5s;
}

.animate-card-float-3 {
  animation: card-float-3 3.5s ease-in-out infinite 1s;
}

.animate-card-float-4 {
  animation: card-float-4 3.5s ease-in-out infinite 1.5s;
}
</style>
