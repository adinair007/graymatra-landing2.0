<template>
  <nav
    class="bg-black/30 backdrop-blur-md border-b border-white/10 text-white py-4 px-6 fixed w-full top-0 z-50 transition-all duration-300"
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
        <a href="#home" class="nav-link">Home</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>

        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          <!-- Dark mode icons -->
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
          class="p-2 rounded-md hover:bg-white/10 transition-colors"
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

    <!-- Mobile Menu -->
    <div
      v-if="isMobileOpen"
      class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="
        isMobileOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      "
    >
      <div class="bg-black/80 backdrop-blur-md px-6 flex flex-col space-y-5">
        <a href="#home" @click="isMobileOpen = false" class="nav-link-mobile">
          Home
        </a>
        <a
          href="#services"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
        >
          Services
        </a>
        <a href="#about" @click="isMobileOpen = false" class="nav-link-mobile">
          About
        </a>
        <a
          href="#contact"
          @click="isMobileOpen = false"
          class="nav-link-mobile"
        >
          Contact
        </a>

        <button
          @click="toggleDarkMode"
          class="self-start px-3 py-2 rounded hover:bg-white/10 transition-colors"
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
         hover:text-white hover:bg-white/10;
}

/* Mobile nav items */
.nav-link-mobile {
  @apply block px-4 py-3 text-lg font-medium rounded-md transition-all duration-200
         hover:text-white hover:bg-white/10;
}
</style>
