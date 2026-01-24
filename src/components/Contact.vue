<template>
  <section
    id="contact-section"
    class="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    data-scroll-section
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <!-- Left Side - Main CTA -->
        <div class="lg:col-span-9">
          <!-- Large Animated Text -->
          <div class="mb-10 md:mb-14">
            <h2
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-tight tracking-tight"
            >
              <span
                v-for="(word, wordIndex) in words"
                :key="wordIndex"
                class="inline-block mr-3 md:mr-4 mb-2 md:mb-3"
                :class="
                  isSpecialWord(word)
                    ? 'font-bhavuka font-bold'
                    : 'font-montserrat'
                "
              >
                <span
                  v-for="(letter, letterIndex) in word.split('')"
                  :key="letterIndex"
                  class="inline-block transition-all duration-700 hover:text-[#ff9933] hover:-translate-y-2 hover:scale-110 cursor-default"
                  :class="
                    isSpecialWord(word)
                      ? 'text-[#ff9933]'
                      : 'text-white dark:text-gray-100'
                  "
                >
                  {{ letter }}
                </span>
              </span>
            </h2>
          </div>

          <!-- CTA Button -->
          <div class="inline-block">
            <router-link to="/contact" class="group/cta relative block">
              <!-- Main Button Container -->
              <div
                class="relative overflow-hidden rounded-full bg-gradient-to-br from-gray-700/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-white/10 dark:border-white/5 transition-all duration-500 hover:border-[#ff9933]/40 hover:shadow-[0_4px_24px_rgba(255,153,51,0.2)] hover:scale-[1.02]"
              >
                <!-- Animated mesh gradient background -->
                <div
                  class="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"
                >
                  <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.08),transparent_60%)]"
                  ></div>
                </div>

                <!-- Button Content -->
                <div
                  class="relative z-10 px-8 py-4 md:px-12 md:py-5 flex items-center gap-3"
                >
                  <span
                    class="text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-white to-gray-300 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent group-hover/cta:from-[#ff9933] group-hover/cta:to-[#ffb366] transition-all duration-500"
                  >
                    Let's do it!
                  </span>
                  <svg
                    class="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover/cta:text-[#ff9933] transition-all duration-500 group-hover/cta:translate-x-1"
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
                </div>

                <!-- Subtle edge glow -->
                <div
                  class="absolute inset-0 rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 pointer-events-none"
                >
                  <div
                    class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/30 to-transparent"
                  ></div>
                  <div
                    class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/30 to-transparent"
                  ></div>
                </div>
              </div>

              <!-- Floating particles effect -->
              <div
                class="absolute inset-0 pointer-events-none overflow-hidden rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"
              >
                <div
                  class="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#ff9933] rounded-full animate-cta-float-1"
                ></div>
                <div
                  class="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#ff9933] rounded-full animate-cta-float-2"
                ></div>
                <div
                  class="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-[#ff9933] rounded-full animate-cta-float-3"
                ></div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Right Side - Sitemap -->
        <div class="lg:col-span-3 flex items-start lg:justify-end">
          <div class="w-full max-w-[200px] lg:ml-auto">
            <!-- Sitemap Header -->
            <div class="mb-6">
              <h3
                class="text-sm md:text-base font-light text-gray-500 dark:text-gray-400 tracking-[0.25em] uppercase mb-2"
              >
                Navigate
              </h3>
              <div class="h-[1px] w-12 bg-[#ff9933]/30"></div>
            </div>

            <!-- Sitemap Links -->
            <nav class="space-y-3">
              <a
                @click.prevent="scrollToTop"
                href="#"
                class="group/link flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#ff9933] transition-all duration-400 cursor-pointer"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/link:bg-[#ff9933] transition-all duration-400 group-hover/link:scale-125"
                ></span>
                <span
                  class="text-sm md:text-base font-extralight tracking-wider uppercase group-hover/link:translate-x-0.5 transition-transform duration-400"
                >
                  Home
                </span>
              </a>

              <router-link
                to="/m1-casa"
                class="group/link flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#ff9933] transition-all duration-400"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/link:bg-[#ff9933] transition-all duration-400 group-hover/link:scale-125"
                ></span>
                <span
                  class="text-sm md:text-base font-extralight tracking-wider uppercase group-hover/link:translate-x-0.5 transition-transform duration-400"
                >
                  M1 Casa
                </span>
              </router-link>

              <router-link
                to="/contact"
                class="group/link flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#ff9933] transition-all duration-400"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/link:bg-[#ff9933] transition-all duration-400 group-hover/link:scale-125"
                ></span>
                <span
                  class="text-sm md:text-base font-extralight tracking-wider uppercase group-hover/link:translate-x-0.5 transition-transform duration-400"
                >
                  Contact
                </span>
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const words = ["Let's", "create", "something", "extraordinary", "together"];
const ctaText = "Let's do it!";

const specialWords = ["extraordinary"];

const isSpecialWord = (word) => {
  return specialWords.includes(word);
};

const scrollToTop = () => {
  if (router.currentRoute.value.path !== "/") {
    router.push("/").then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<style scoped>
/* CTA Button particle animations */
@keyframes cta-float-1 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(12px, -22px);
    opacity: 1;
  }
}

@keyframes cta-float-2 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-18px, -18px);
    opacity: 1;
  }
}

@keyframes cta-float-3 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(10px, -28px);
    opacity: 1;
  }
}

.animate-cta-float-1 {
  animation: cta-float-1 3s ease-in-out infinite;
}

.animate-cta-float-2 {
  animation: cta-float-2 4s ease-in-out infinite 0.5s;
}

.animate-cta-float-3 {
  animation: cta-float-3 3.5s ease-in-out infinite 1s;
}
</style>
