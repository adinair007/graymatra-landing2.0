<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  images: string[];
  titles?: string[];
  descriptions?: string[];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex h-96 w-full gap-4" :class="[props.class]">
    <div
      v-for="(image, index) in images"
      :key="image"
      class="group relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out hover:flex-[3] border border-white/10 hover:border-[#ff9933]/50"
    >
      <img
        class="relative h-full w-full object-cover"
        :src="image"
        :alt="image"
      />

      <!-- Overlay with title and description on hover -->
      <div
        v-if="titles && titles[index]"
        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
      >
        <!-- Glow effect -->
        <div class="absolute inset-0 pointer-events-none">
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,153,51,0.15),transparent_70%)]"
          ></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-2 h-2 rounded-full bg-[#ff9933]"></div>
            <h3 class="text-2xl font-bold text-white">
              {{ titles[index] }}
            </h3>
          </div>
          <p
            v-if="descriptions && descriptions[index]"
            class="text-gray-300 leading-relaxed"
          >
            {{ descriptions[index] }}
          </p>
        </div>

        <!-- Floating particles effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute top-1/4 left-1/4 w-1 h-1 bg-[#ff9933] rounded-full animate-float-1"
          ></div>
          <div
            class="absolute top-3/4 right-1/3 w-1 h-1 bg-[#ff9933] rounded-full animate-float-2"
          ></div>
          <div
            class="absolute bottom-1/3 left-2/3 w-1 h-1 bg-[#ff9933] rounded-full animate-float-3"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float-1 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(10px, -20px);
    opacity: 1;
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-15px, -15px);
    opacity: 1;
  }
}

@keyframes float-3 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(8px, -25px);
    opacity: 1;
  }
}

.animate-float-1 {
  animation: float-1 3s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 4s ease-in-out infinite 0.5s;
}

.animate-float-3 {
  animation: float-3 3.5s ease-in-out infinite 1s;
}
</style>
