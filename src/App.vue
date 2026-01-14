<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useDarkMode } from "./stores/darkMode";

const dark = useDarkMode();

onMounted(() => {
  dark.init();
});
</script>

<style>
/* Global styles */
</style>
