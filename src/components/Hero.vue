<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Sparkles – concentrated under typewriter text -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 z-0 pointer-events-none"
    >
      <Sparkles
        class="size-full"
        particle-color="#ffffff"
        :density="120"
        :speed="0.9"
      />
    </div>

    <!-- Wavy Background – full coverage, saffron-red blend -->
    <div class="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <WavyBackground
        class="size-full"
        :colors="['#fe9f06', '#ff6b35', '#e63946', '#d00000', '#9d0208']"
        wave-width="140"
        wave-speed="0.5"
        wave-opacity="0.6"
        blur="8"
      />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
        Empowering Your Digital Presence with
      </h1>

      <div
        class="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-saffron relative"
      >
        <Typewriter
          :words="['Gray Mātrā', 'Innovation', 'Excellence']"
          loop
          cursor
          cursor-style="|"
          type-speed="80"
          delete-speed="50"
          delay-speed="1800"
        />
      </div>

      <p class="mt-10 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
        We craft cutting-edge native applications, robust software solutions,
        and responsive websites to elevate your digital presence.
      </p>

      <div class="mt-12">
        <a
          href="#contact"
          class="inline-block bg-saffron text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-orange-700 transition-all duration-300 shadow-2xl hover:shadow-saffron/60 hover:-translate-y-1 transform"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Typewriter } from "vue-simple-typewriter";
import "vue-simple-typewriter/dist/style.css";
import { Sparkles } from "./ui/sparkles";
import { WavyBackground } from "./ui/wavy-background";

import { useDarkMode } from "../stores/darkMode";
const { isDarkMode } = useDarkMode();
</script>

<style scoped>
.text-saffron {
  color: #fe9f06;
}
.bg-saffron {
  background-color: #fe9f06;
}

/* Glow under typewriter for better sparkles visibility */
.text-saffron {
  text-shadow: 0 0 20px rgba(254, 159, 6, 0.6);
}
</style>
