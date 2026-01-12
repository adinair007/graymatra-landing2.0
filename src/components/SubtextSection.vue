<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    data-scroll-section
  >
    <div
      class="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 md:py-14 lg:py-16"
    >
      <div class="relative rounded-3xl overflow-hidden">
        <GlowBorder
          :color="['#feb733', '#ff8c4d', '#ff4d6e', '#ff9933']"
          :border-width="4"
          :duration="10"
          :border-radius="24"
        />
        <div
          class="relative px-6 py-8 md:px-12 md:py-12 bg-black/40 backdrop-blur-sm rounded-3xl"
        >
          <!-- Logo/Header in Bhavuka -->
          <BoxReveal color="#E1251B" :duration="1.0">
            <div class="flex justify-center mb-8 md:mb-10">
              <h1
                class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bhavuka font-bold tracking-tight text-center leading-none drop-shadow-2xl"
              >
                <span class="text-[#b4b4b4]">Gray</span
                ><span class="text-[#ff7a00] -ml-0.5 md:-ml-0.5">Mātrā</span>
              </h1>
            </div>
          </BoxReveal>

          <!-- Taglines -->
          <div class="mt-2 md:mt-4 text-center max-w-4xl mx-auto font-segoe">
            <!-- First three lines -->
            <BoxReveal color="#E1251B" :duration="1.0" :delay="1">
              <div class="space-y-4 md:space-y-6">
                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white"
                >
                  Crafting
                  <span class="text-[#ff9933]">cutting-edge</span> native
                  applications
                </p>

                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white"
                >
                  Providing
                  <span class="text-[#ff9933]">robust</span> software solutions
                </p>

                <p
                  class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white"
                >
                  Creating
                  <span class="text-[#ff9933]">responsive</span> websites
                </p>
              </div>
            </BoxReveal>

            <!-- Elevating line -->
            <div class="mt-8 md:mt-10 text-center">
              <TextGenerateEffect
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bhavuka font-medium tracking-tight text-[#ff9933] leading-tight"
                words="Elevating your digital presence to new heights"
                :delay="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlowBorder from "./ui/glow-border/GlowBorder.vue";
import BoxReveal from "./ui/box-reveal/BoxReveal.vue";
import TextGenerateEffect from "./ui/text-generate-effect/TextGenerateEffect.vue";
</script>
