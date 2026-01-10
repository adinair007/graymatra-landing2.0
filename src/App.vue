<template>
  <SmoothScroll>
    <div
      class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <Navbar />
      <Hero />
      <SubtextSection />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  </SmoothScroll>
</template>

<script setup>
import { onMounted } from "vue";
import { useDarkMode } from "./stores/darkmode";

const dark = useDarkMode();

onMounted(() => {
  dark.init();
});
import SmoothScroll from "./components/SmoothScroll.vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import SubtextSection from "./components/SubtextSection.vue";
import Services from "./components/Services.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>
