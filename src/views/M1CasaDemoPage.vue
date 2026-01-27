<template>
  <div
    class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
  >
    <!-- Fixed Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <NeuralBgVue class="w-full h-full" />
    </div>

    <nav
      class="sticky top-0 z-50 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/5 transition-all duration-300"
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
            <!-- Hamburger Menu for Desktop -->
            <div class="relative" ref="desktopMenuRef">
              <button
                @click="isDesktopMenuOpen = !isDesktopMenuOpen"
                @mouseenter="isHamburgerHovered = true"
                @mouseleave="isHamburgerHovered = false"
                class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
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
                  class="absolute right-0 mt-3 w-64 rounded-2xl bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
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
              class="p-3 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300"
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
            class="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)]"
          >
            <div class="relative z-10 px-4 py-6 space-y-3">
              <router-link
                v-if="$route.path !== '/m1-casa'"
                to="/m1-casa"
                @click="isMobileOpen = false"
                class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
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
                class="group/link flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-br from-black/50 via-gray-900/40 to-black/30 backdrop-blur-xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 hover:border-[#ff9933]/50 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,153,51,0.1)]"
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
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10">
      <section class="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="mb-3">
            <TextReveal
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bhavuka font-bold text-center text-white leading-tight"
            >
              Request a Demo
            </TextReveal>
          </div>

          <p
            class="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8"
          >
            See M1 Casa in action — schedule a personalized demo for your
            community.
          </p>

          <!-- Demo Request Form Card -->
          <div class="max-w-4xl mx-auto">
            <div
              class="group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
            >
              <!-- Glow effect (same as contact page) -->
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
                @submit.prevent="submitDemoForm"
                class="relative z-10 space-y-5"
              >
                <!-- Name & Email -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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

                <!-- Phone -->
                <div class="group/input">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Phone Number <span class="text-[#ff9933]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    required
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <!-- Apartment/Company Name -->
                <div class="group/input">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Apartment/Company Name <span class="text-[#ff9933]">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    v-model="formData.company"
                    required
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300"
                    placeholder="Your Community / Company"
                  />
                </div>

                <!-- Description -->
                <div class="group/input">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-300 mb-2 group-hover/input:text-[#ff9933] transition-colors duration-300"
                  >
                    Why do you need M1 Casa?
                    <span class="text-[#ff9933]">*</span>
                  </label>
                  <textarea
                    id="description"
                    v-model="formData.description"
                    required
                    rows="5"
                    class="w-full px-4 py-2.5 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9933] focus:ring-2 focus:ring-[#ff9933]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your community size, current challenges, or what you're looking for..."
                  ></textarea>
                </div>

                <!-- Submit -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full px-8 py-3 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#ff9933]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/button"
                  >
                    <span class="relative z-10">{{
                      isSubmitting ? "Sending..." : "Request Demo"
                    }}</span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-[#ffb366] to-[#ff9933] opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                    ></div>
                  </button>
                </div>

                <!-- Success -->
                <transition
                  enter-active-class="transition ease-out duration-300"
                  leave-active-class="transition ease-in duration-200"
                >
                  <div
                    v-if="showSuccess"
                    class="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                  >
                    Demo request sent successfully! We'll contact you soon.
                  </div>
                </transition>
              </form>

              <!-- Floating particles (same as before) -->
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

          <div class="mt-6 text-center">
            <p class="text-gray-400">
              Or email us directly:
              <a
                href="mailto:contactus@graymatra.com"
                class="text-[#ff9933] hover:text-[#ffb366] transition-colors"
                >contactus@graymatra.com</a
              >
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer (same as other pages) -->
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
  phone: "",
  company: "",
  description: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitDemoForm = async () => {
  isSubmitting.value = true;

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "e14ef646-5ea7-44f4-bb1b-d93ed27c0122");

    formDataToSend.append("name", formData.value.name);
    formDataToSend.append("email", formData.value.email);
    formDataToSend.append("phone", formData.value.phone);
    formDataToSend.append("company", formData.value.company);
    formDataToSend.append("message", formData.value.description);
    formDataToSend.append("subject", "New M1 Casa Demo Request");
    formDataToSend.append("from_name", "M1 Casa Demo Form");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      showSuccess.value = true;
      setTimeout(() => {
        formData.value = {
          name: "",
          email: "",
          phone: "",
          company: "",
          description: "",
        };
        showSuccess.value = false;
      }, 4000);
    } else {
      alert("Failed to send request. Please try again.");
    }
  } catch (error) {
    console.error("Demo form error:", error);
    alert("An error occurred. Please try again later.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Copy all floating particles + custom select styles from your Contact page */
</style>
