<template>
  <div
    class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
  >
    <!-- Fixed Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <NeuralBgVue class="w-full h-full" />
    </div>

    <!-- Navbar -->
    <nav
      class="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/5 transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <router-link
            to="/"
            class="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="../assets/GMLogo.png"
              alt="Gray Matra Logo"
              class="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </router-link>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-6">
            <!-- Contact Button (only on M1 Casa page) -->
            <router-link
              v-if="$route.path !== '/contact'"
              to="/contact"
              class="group relative px-6 py-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)] overflow-hidden"
            >
              <!-- Glow effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl pointer-events-none"
              >
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.08),transparent_50%)]"
                ></div>
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,51,0.06),transparent_40%)]"
                ></div>
              </div>

              <div class="relative z-10 flex items-center gap-2">
                <span class="text-white text-lg font-bhavuka font-bold"
                  >Contact</span
                >
                <svg
                  class="w-4 h-4 text-[#ff9933] transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </router-link>

            <!-- Hamburger Menu for Desktop -->
            <div class="relative" ref="desktopMenuRef">
              <button
                @click="isDesktopMenuOpen = !isDesktopMenuOpen"
                @mouseenter="isHamburgerHovered = true"
                @mouseleave="isHamburgerHovered = false"
                class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
                aria-label="Toggle menu"
              >
                <div
                  class="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
                >
                  <span
                    class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                    :class="{
                      'translate-y-2 rotate-45': isDesktopMenuOpen,
                      'w-3/4': isHamburgerHovered && !isDesktopMenuOpen,
                    }"
                  ></span>
                  <span
                    class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                    :class="{
                      'opacity-0': isDesktopMenuOpen,
                      'w-1/2': isHamburgerHovered && !isDesktopMenuOpen,
                    }"
                  ></span>
                  <span
                    class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                    :class="{
                      '-translate-y-2 -rotate-45': isDesktopMenuOpen,
                      'w-3/4': isHamburgerHovered && !isDesktopMenuOpen,
                    }"
                  ></span>
                </div>
              </button>

              <!-- Desktop Dropdown Menu -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 scale-95 -translate-y-2"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 -translate-y-2"
              >
                <div
                  v-if="isDesktopMenuOpen"
                  class="absolute right-0 mt-3 w-64 rounded-2xl bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
                >
                  <div class="relative z-10 p-2">
                    <!-- Links inside dropdown -->
                    <router-link
                      v-if="$route.path !== '/m1-casa'"
                      to="/m1-casa"
                      @click="isDesktopMenuOpen = false"
                      class="group/link flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <span class="text-white text-lg font-bhavuka font-bold"
                        >M1 Casa</span
                      >
                      <svg
                        class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </router-link>

                    <router-link
                      v-if="$route.path !== '/'"
                      to="/"
                      @click="isDesktopMenuOpen = false"
                      class="group/link flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <span class="text-white text-lg font-bhavuka font-bold"
                        >Home</span
                      >
                      <svg
                        class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- Mobile Hamburger -->
          <div class="md:hidden">
            <button
              @click="isMobileOpen = !isMobileOpen"
              @mouseenter="isMobileHamburgerHovered = true"
              @mouseleave="isMobileHamburgerHovered = false"
              class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div
                class="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
              >
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    'translate-y-2 rotate-45': isMobileOpen,
                    'w-3/4': isMobileHamburgerHovered && !isMobileOpen,
                  }"
                ></span>
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    'opacity-0': isMobileOpen,
                    'w-1/2': isMobileHamburgerHovered && !isMobileOpen,
                  }"
                ></span>
                <span
                  class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
                  :class="{
                    '-translate-y-2 -rotate-45': isMobileOpen,
                    'w-3/4': isMobileHamburgerHovered && !isMobileOpen,
                  }"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-if="isMobileOpen"
          class="md:hidden border-t border-white/10 overflow-hidden"
        >
          <div
            class="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl"
          >
            <div class="relative z-10 px-4 py-6 space-y-3">
              <router-link
                v-if="$route.path !== '/m1-casa'"
                to="/m1-casa"
                @click="isMobileOpen = false"
                class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
              >
                <span class="text-white text-xl font-bhavuka font-bold"
                  >M1 Casa</span
                >
                <svg
                  class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>

              <router-link
                v-if="$route.path !== '/'"
                to="/"
                @click="isMobileOpen = false"
                class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
              >
                <span class="text-white text-xl font-bhavuka font-bold"
                  >Home</span
                >
                <svg
                  class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>

              <router-link
                v-if="$route.path !== '/contact'"
                to="/contact"
                @click="isMobileOpen = false"
                class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
              >
                <span class="text-white text-xl font-bhavuka font-bold"
                  >Contact</span
                >
                <svg
                  class="w-5 h-5 text-[#ff9933] transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Hero Section with Text Reveal -->
      <section class="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Title -->
          <div class="mb-3">
            <TextReveal
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight"
            >
              Get In Touch
            </TextReveal>
          </div>

          <p
            class="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-4"
          >
            Ready to transform your vision into reality? Let's start a
            conversation about your next project.
          </p>

          <!-- Contact Form Card -->
          <div class="max-w-4xl mx-auto">
            <div
              class="group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
            >
              <!-- Glow effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl"
              >
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.08),transparent_50%)]"
                ></div>
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,51,0.06),transparent_40%)]"
                ></div>
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,153,51,0.06),transparent_40%)]"
                ></div>
              </div>

              <form
                @submit.prevent="submitForm"
                class="relative z-10 space-y-5"
              >
                <!-- Name and Email Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <!-- Name -->
                  <div class="group/input">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                    >
                      Name <span class="text-[#ff9933]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="formData.name"
                      required
                      class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <!-- Email -->
                  <div class="group/input">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                    >
                      Email <span class="text-[#ff9933]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      required
                      class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <!-- Business Name -->
                <div class="group/input">
                  <label
                    for="business"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    v-model="formData.business"
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                    placeholder="Your Company Name"
                  />
                </div>

                <!-- Service Required -->
                <div class="group/input">
                  <label
                    for="service"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Service Required <span class="text-[#ff9933]">*</span>
                  </label>
                  <select
                    id="service"
                    v-model="formData.service"
                    required
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="native-app">
                      Mobile Application Development
                    </option>
                    <option value="software">Software Development</option>
                    <option value="website">Website Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Timeframe -->
                <div class="group/input">
                  <label
                    for="timeframe"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Timeframe <span class="text-[#ff9933]">*</span>
                  </label>
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      v-for="option in timeframeOptions"
                      :key="option.value"
                      @click="formData.timeframe = option.value"
                      :class="[
                        'px-4 py-2.5 rounded-xl border-2 transition-all duration-300 font-medium',
                        formData.timeframe === option.value
                          ? 'bg-[#ff9933]/20 border-[#ff9933] text-[#ff9933]'
                          : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-[#ff9933]/50 hover:text-[#ff9933]',
                      ]"
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </div>

                <!-- Description -->
                <div class="group/input">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Project Description <span class="text-[#ff9933]">*</span>
                  </label>
                  <textarea
                    id="description"
                    v-model="formData.description"
                    required
                    rows="5"
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full px-8 py-3 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#ff9933]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/button"
                  >
                    <span class="relative z-10">
                      {{ isSubmitting ? "Sending..." : "Send Message" }}
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-[#ffb366] to-[#ff9933] opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                    ></div>
                  </button>
                </div>

                <!-- Success Message -->
                <transition
                  enter-active-class="transition ease-out duration-300"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-200"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-if="showSuccess"
                    class="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                  >
                    Your message has been sent successfully! We'll get back to
                    you soon.
                  </div>
                </transition>
              </form>

              <!-- Floating particles effect -->
              <div
                class="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              >
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

          <!-- Contact Info -->
          <div class="mt-4 mb-6 text-center">
            <p class="text-gray-400 mb-3">Or reach us directly at:</p>
            <a
              href="mailto:contactus@graymatra.com"
              class="text-[#ff9933] hover:text-[#ffb366] text-lg font-medium transition-colors duration-300"
            >
              contactus@graymatra.com
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} Gray Mātrā. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NeuralBgVue from "../components/ui/bg-neural/NeuralBg.vue";
import TextReveal from "../components/ui/text-reveal/TextReveal.vue";

const isMobileOpen = ref(false);
const isDesktopMenuOpen = ref(false);
const desktopMenuRef = ref(null);
const isHamburgerHovered = ref(false);
const isMobileHamburgerHovered = ref(false);

// Close desktop menu on outside click
const handleClickOutside = (event) => {
  if (desktopMenuRef.value && !desktopMenuRef.value.contains(event.target)) {
    isDesktopMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const formData = ref({
  name: "",
  email: "",
  business: "",
  service: "",
  timeframe: "",
  description: "",
});

const timeframeOptions = [
  { value: "asap", label: "ASAP" },
  { value: "flexible", label: "Flexible" },
  { value: "relaxed", label: "Relaxed" },
];

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Web3Forms submission
    const formDataToSend = new FormData();

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    // Get it from: https://web3forms.com
    formDataToSend.append("access_key", "de1a049c-e6f3-4d2f-9130-30902fc82903");
    formDataToSend.append("name", formData.value.name);
    formDataToSend.append("email", formData.value.email);
    formDataToSend.append("business", formData.value.business || "N/A");
    formDataToSend.append("service", formData.value.service);
    formDataToSend.append("timeframe", formData.value.timeframe);
    formDataToSend.append("message", formData.value.description);
    formDataToSend.append(
      "subject",
      "New Contact Form Submission - Gray Mātrā"
    );
    formDataToSend.append("from_name", "Gray Mātrā Contact Form");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      // Show success message
      showSuccess.value = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        formData.value = {
          name: "",
          email: "",
          business: "",
          service: "",
          timeframe: "",
          description: "",
        };
        showSuccess.value = false;
      }, 3000);
    } else {
      // Handle error
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

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

/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ff9933' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
</style>
