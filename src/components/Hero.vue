<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    data-scroll-section
  >

    <!-- Main Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl font-segoe font-bold text-white mb-6"
      >
        Empowering Your Digital Presence with
      </h1>

      <div
        class="relative text-6xl sm:text-7xl lg:text-8xl font-extrabold text-saffron"
      >
        <CustomTypewriter
          :words="[
            { text: 'Innovation', class: 'font-segoe font-medium' },
            { text: 'Excellence', class: 'font-segoe font-medium' },
            { text: 'Gray Mātrā', class: 'font-bhavuka' },
          ]"
          :type-speed="60"
          :delete-speed="50"
          :delay-speed="1800"
          loop
          cursor
          cursor-style="|"
        />

        <!-- Underline gradient lines -->
        <div class="absolute inset-x-0 top-full h-10 -mt-2">
          <div
            class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
          />
          <div
            class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          />
          <div
            class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
          />
          <div
            class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomTypewriter from "./ui/CustomTypewriter.vue";

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
</style>
