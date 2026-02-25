<template>
  <div class="app-wrapper">
    <div class="fixed inset-0 z-0 pointer-events-none">
      <NeuralBgVue class="w-full h-full" />
    </div>
    <Navbar />
    <ScrollIndicator />
    <SmoothScroll>
      <main class="relative z-10">
        <Hero id="home" data-scroll-section />
        <SubtextSection id="subtext" data-scroll-section />
        <Services id="services" data-scroll-section />
        <M1CasaSection id="m1casa" data-scroll-section />   
        <Contact id="contact" data-scroll-section />
        <Footer id="footer" data-scroll-section />
      </main>
    </SmoothScroll>
    
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import SubtextSection from "../components/SubtextSection.vue";
import Services from "../components/Services.vue";
import M1CasaSection from "../components/M1CasaSection.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import SmoothScroll from "../components/ui/SmoothScroll.vue";
import ScrollIndicator from "../components/ui/ScrollIndicator.vue";
import NeuralBgVue from "../components/ui/bg-neural/NeuralBg.vue";

import { onMounted, nextTick } from "vue";
import { useDarkMode } from "../stores/darkmode";

const dark = useDarkMode();

onMounted(async () => {
  dark.init();
  await nextTick();
  document.dispatchEvent(new Event("resize"));
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 500);
});
</script>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  background: transparent;
}

main {
  min-height: 100vh;
  background: transparent;
}
</style>
