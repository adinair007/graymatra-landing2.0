<template>
  <section id="contact" class="py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Get in <span class="text-saffron">Touch</span>
      </h2>
      <p class="text-base sm:text-lg text-center mb-8">
        Ready to elevate your online presence? Contact us today!
      </p>
      <div class="flex flex-col items-center space-y-4">
        <div
          class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-2xl"
        >
          <input
            type="text"
            placeholder="Your Name"
            class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full sm:w-1/2"
            v-model="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full sm:w-1/2"
            v-model="email"
          />
        </div>
        <textarea
          placeholder="Your Message"
          class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full max-w-2xl h-32"
          v-model="message"
        />
        <a
          :href="mailtoLink"
          class="bg-saffron text-gray-900 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-500 transition"
        >
          Send Message
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const mailtoLink = computed(
  () =>
    `mailto:contactus@graymatra.com?subject=Contact%20from%20GrayMatra%20Website&body=Name:%20${encodeURIComponent(
      name.value
    )}%0AEmail:%20${encodeURIComponent(
      email.value
    )}%0AMessage:%20${encodeURIComponent(message.value)}`
);
</script>
