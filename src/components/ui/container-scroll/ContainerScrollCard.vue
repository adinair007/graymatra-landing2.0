<script setup lang="ts">
defineProps({
  rotate: Number,
  scale: Number,
});
</script>

<template>
  <div
    :style="{
      transform: `rotateX(${rotate}deg) scale(${scale})`,
      boxShadow:
        '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
    }"
    class="mx-auto -mt-12 h-[38rem] w-full max-w-[22rem] rounded-[3rem] border-8 border-[#1d1d1f] bg-[#1d1d1f] p-2 shadow-2xl md:h-[48rem] md:max-w-[26rem] md:p-3"
  >
    <div
      class="size-full overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-zinc-900"
    >
      <slot />
    </div>
  </div>
</template>