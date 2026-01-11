<!-- src/components/ui/CustomTypewriter.vue -->
<template>
  <span class="typewriter-wrapper relative inline-block">
    <span :class="[activeWord.class || '']" v-html="displayText"></span>
    <span v-if="props.cursor && showCursor" class="cursor ml-1">{{
      props.cursorStyle || "|"
    }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    words: Array<{ text: string; class?: string; html?: string }>;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
    loop?: boolean;
    cursor?: boolean;
    cursorStyle?: string;
  }>(),
  {
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 1800,
    loop: true,
    cursor: true,
    cursorStyle: "|",
  }
);

const currentIndex = ref(0);
const displayText = ref("");
const isDeleting = ref(false);
const charIndex = ref(0);
const showCursor = ref(true);

const formattedWords = computed(() => props.words);

const activeWord = computed(
  () => formattedWords.value[currentIndex.value] || { text: "" }
);

let timeout: NodeJS.Timeout | null = null;

const type = () => {
  const fullText = activeWord.value.text;
  const hasHtml = !!activeWord.value.html;

  if (!isDeleting.value) {
    // Typing forward
    charIndex.value++;
    if (hasHtml) {
      // For HTML words, we simulate typing by gradually revealing the full HTML
      // Here we just show the full HTML immediately after first char (smooth enough for short words)
      displayText.value =
        activeWord.value.html || fullText.substring(0, charIndex.value);
    } else {
      displayText.value = fullText.substring(0, charIndex.value);
    }

    if (charIndex.value >= fullText.length) {
      timeout = setTimeout(() => {
        if (
          props.loop ||
          currentIndex.value < formattedWords.value.length - 1
        ) {
          isDeleting.value = true;
          type();
        }
      }, props.delaySpeed);
      return;
    }
  } else {
    // Deleting – always use plain text for clean reverse
    displayText.value = fullText.substring(0, charIndex.value - 1);
    charIndex.value--;

    if (charIndex.value === 0) {
      isDeleting.value = false;
      currentIndex.value =
        (currentIndex.value + 1) % formattedWords.value.length;
      charIndex.value = 0;
    }
  }

  const speed = isDeleting.value ? props.deleteSpeed : props.typeSpeed;
  timeout = setTimeout(type, speed);
};

const blinkCursor = () => {
  showCursor.value = !showCursor.value;
};

onMounted(() => {
  // Start typing
  if (formattedWords.value.length > 0) {
    const first = formattedWords.value[0];
    displayText.value = first.html
      ? first.html.charAt(0)
      : first.text.charAt(0);
    charIndex.value = 1;
  }
  type();

  if (props.cursor) {
    const blinkInterval = setInterval(blinkCursor, 500);
    onUnmounted(() => clearInterval(blinkInterval));
  }
});

onUnmounted(() => {
  if (timeout) clearTimeout(timeout);
});
</script>

<style scoped>
.typewriter-wrapper {
  display: inline-block;
  white-space: pre-wrap;
}

.cursor {
  font-size: 0.9em;
  font-weight: 300;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
