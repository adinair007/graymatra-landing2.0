<template>
  <section
    class="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
  >
    <!-- Vortex Background – full coverage, fixed -->
    <div class="absolute inset-0 z-0">
      <Vortex
        class="w-full h-full"
        background-color="#000000"
        :range-y="150"
        :particle-count="250"
        :base-speed="0.5"
        :range-speed="1"
        :base-radius="1"
        :range-radius="2"
        :base-hue="220"
      />
    </div>

    <!-- Content container with GlowBorder -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-6">
      <div class="relative">
        <!-- GlowBorder – animated beam -->
        <GlowBorder
          :color="['#fe9f06', '#ff6b35', '#e63946']"
          :border-width="3"
          :duration="10"
          :border-radius="24"
        />

        <!-- Box Reveal Content -->
        <div class="relative p-6 md:p-10">
          <BoxReveal color="#E1251B" :duration="1">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white text-center leading-tight"
            >
              We craft <span class="text-[#ff9933]">cutting-edge</span> native
              applications,<br class="hidden sm:block" />
              <span class="text-[#ff9933]">robust</span> software solutions,<br
                class="hidden sm:block"
              />
              and <span class="text-[#ff9933]">responsive</span> websites<br
                class="hidden sm:block"
              />
              that elevate your
              <span class="text-[#ff9933]">digital presence</span> to new
              heights.
            </h2>
          </BoxReveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlowBorder from "./ui/glow-border/GlowBorder.vue";
import Vortex from "./ui/vortex/Vortex.vue";
import BoxReveal from "./ui/box-reveal/BoxReveal.vue";
</script>
