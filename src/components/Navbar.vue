<template>
  <nav
    class="bg-white dark:bg-black text-gray-900 dark:text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="../assets/GMLogo.png"
          alt="Gray Mātrā Logo"
          class="w-28 h-10 sm:w-36 sm:h-14 object-contain"
        />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a v-scroll-to="'#home'" class="nav-link">Home</a>
        <a v-scroll-to="'#services'" class="nav-link">Services</a>
        <a v-scroll-to="'#about'" class="nav-link">About</a>
        <a v-scroll-to="'#contact'" class="nav-link">Contact</a>

        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-saffron/20 transition-colors"
          aria-label="Toggle dark mode"
        >
          <svg
            v-if="isDarkMode"
            class="w-6 h-6 text-saffron"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-saffron"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button
          @click="isMobileOpen = !isMobileOpen"
          class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              :d="
                isMobileOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              "
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu with slide animation -->
    <div
      v-if="isMobileOpen"
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="
        isMobileOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      "
    >
      <div class="bg-white dark:bg-black px-6 flex flex-col space-y-5">
        <a
          v-scroll-to="'#home'"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
          >Home</a
        >
        <a
          v-scroll-to="'#services'"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
          >Services</a
        >
        <a
          v-scroll-to="'#about'"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
          >About</a
        >
        <a
          v-scroll-to="'#contact'"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
          >Contact</a
        >

        <button
          @click="toggleDarkMode"
          class="self-start px-3 py-2 rounded hover:bg-saffron/20 transition-colors"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useDarkMode } from "../stores/darkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
const isMobileOpen = ref(false);
</script>

<style scoped>
/* Desktop nav items */
.nav-link {
  @apply px-3 py-2 rounded-md font-medium transition-all duration-200
         hover:text-white hover:bg-saffron;
}

/* Mobile nav items - slightly larger & full width feel */
.nav-link-mobile {
  @apply block px-4 py-3 text-lg font-medium rounded-md transition-all duration-200
         hover:text-white hover:bg-saffron;
}

/* Saffron color - define once if you don't have it globally */
:root {
  --saffron: #ff9933;
}

.text-saffron {
  color: var(--saffron);
}

.bg-saffron {
  background-color: var(--saffron);
}
</style>
