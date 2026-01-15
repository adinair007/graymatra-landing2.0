<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/5 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a
          href="#"
          @click.prevent="scrollToTop"
          class="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src="../assets/GMLogo.png"
            alt="Gray Matra Logo"
            class="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-6">
          <!-- Contact Button -->
          <router-link
            to="/contact"
            class="group relative px-6 py-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)] overflow-hidden"
          >
            <!-- Glow effect -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl pointer-events-none"
            >
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.08),transparent_50%)]"
              ></div>
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,51,0.06),transparent_40%)]"
              ></div>
            </div>

            <div class="relative z-10 flex items-center gap-2">
              <span class="text-white text-lg font-bhavuka font-bold"
                >Contact</span
              >
              <svg
                class="w-4 h-4 text-[#ff9933] transition-transform duration-500 group-hover:translate-x-1"
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
          </router-link>

          <!-- Hamburger Menu for Desktop -->
          <div class="relative" ref="desktopMenuRef">
            <button
              @click="isDesktopMenuOpen = !isDesktopMenuOpen"
              @mouseenter="isHamburgerHovered = true"
              @mouseleave="isHamburgerHovered = false"
              class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
              aria-label="Toggle menu"
            >
              <div
                class="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
              >
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    'translate-y-2 rotate-45': isDesktopMenuOpen,
                    'w-3/4': isHamburgerHovered && !isDesktopMenuOpen,
                  }"
                ></span>
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    'opacity-0': isDesktopMenuOpen,
                    'w-1/2': isHamburgerHovered && !isDesktopMenuOpen,
                  }"
                ></span>
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    '-translate-y-2 -rotate-45': isDesktopMenuOpen,
                    'w-3/4': isHamburgerHovered && !isDesktopMenuOpen,
                  }"
                ></span>
              </div>
            </button>

            <!-- Desktop Dropdown Menu -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="isDesktopMenuOpen"
                class="absolute right-0 mt-3 w-64 rounded-2xl bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <!-- Glow effect -->
                <div class="absolute inset-0 opacity-30 pointer-events-none">
                  <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,51,0.15),transparent_50%)]"
                  ></div>
                </div>

                <div class="relative z-10 p-2">
                  <router-link
                    to="/m1-casa"
                    @click="isDesktopMenuOpen = false"
                    class="group/link flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <span class="text-white text-lg font-bhavuka font-bold"
                      >M1 Casa</span
                    >
                    <svg
                      class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
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
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button
            @click="isMobileOpen = !isMobileOpen"
            @mouseenter="isMobileHamburgerHovered = true"
            @mouseleave="isMobileHamburgerHovered = false"
            class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div
              class="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
            >
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                :class="{
                  'translate-y-2 rotate-45': isMobileOpen,
                  'w-3/4': isMobileHamburgerHovered && !isMobileOpen,
                }"
              ></span>
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                :class="{
                  'opacity-0': isMobileOpen,
                  'w-1/2': isMobileHamburgerHovered && !isMobileOpen,
                }"
              ></span>
              <span
                class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                :class="{
                  '-translate-y-2 -rotate-45': isMobileOpen,
                  'w-3/4': isMobileHamburgerHovered && !isMobileOpen,
                }"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="isMobileOpen"
        class="md:hidden border-t border-white/10 overflow-hidden"
      >
        <div
          class="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl"
        >
          <!-- Glow effect -->
          <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,153,51,0.15),transparent_70%)]"
            ></div>
          </div>

          <div class="relative z-10 px-4 py-6 space-y-3">
            <router-link
              to="/m1-casa"
              @click="isMobileOpen = false"
              class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
            >
              <span class="text-white text-xl font-bhavuka font-bold"
                >M1 Casa</span
              >
              <svg
                class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
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

            <router-link
              to="/contact"
              @click="isMobileOpen = false"
              class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
            >
              <span class="text-white text-xl font-bhavuka font-bold"
                >Contact</span
              >
              <svg
                class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
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
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobileOpen = ref(false);
const isDesktopMenuOpen = ref(false);
const desktopMenuRef = ref(null);
const isHamburgerHovered = ref(false);
const isMobileHamburgerHovered = ref(false);

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Close desktop menu when clicking outside
const handleClickOutside = (event) => {
  if (desktopMenuRef.value && !desktopMenuRef.value.contains(event.target)) {
    isDesktopMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
