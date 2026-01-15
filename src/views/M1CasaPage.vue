<template>
  <div
    class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
  >
    <!-- Fixed Background with locked saffron color -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <NeuralBgVue class="w-full h-full" />
    </div>

    <!-- Navbar -->
    <nav
      class="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-[#ff9933]/20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Gray Matra Logo -->
          <router-link to="/" class="flex items-center gap-3 group">
            <img
              src="../assets/GMLogo.png"
              alt="Gray Matra Logo"
              class="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </router-link>

          <!-- Nav Links -->
          <div class="flex items-center gap-6">
            <router-link
              to="/contact"
              class="text-gray-300 hover:text-[#ff9933] transition-colors duration-300 font-medium"
            >
              Contact
            </router-link>
            <router-link
              to="/"
              class="px-6 py-2 bg-gradient-to-r from-[#ff9933] to-[#ffb366] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#ff9933]/50 transition-all duration-300"
            >
              Back to Home
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Hero Section with M1 Casa Logo -->
      <section class="py-32 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
          <!-- M1 Casa Logo -->
          <div class="flex justify-center mb-12">
            <img
              src="../assets/M1CasaLogo.png"
              alt="M1 Casa Logo"
              class="h-32 md:h-40 lg:h-48 w-auto"
            />
          </div>

          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-bhavuka font-bold text-white mb-8"
          >
            Simplifying Property Management
          </h1>
          <p
            class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            M1 Casa is a modern property management platform designed to
            streamline community operations with intuitive tools, secure access,
            and efficient data management for administrators and residents
            alike.
          </p>
        </div>
      </section>

      <!-- Why Choose M1 Casa -->
      <section id="why-choose" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2
            class="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Why Choose M1 Casa?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(item, index) in whyChoose"
              :key="index"
              class="group relative p-8 rounded-3xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
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

              <div class="relative z-10">
                <h3 class="text-2xl font-bold text-white mb-4">
                  {{ item.title }}
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>

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
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2
            class="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          >
            Features
          </h2>
          <p class="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Hover over each feature to explore our comprehensive property
            management tools
          </p>

          <!-- Expandable Gallery with overlays -->
          <div
            class="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl p-8"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 pointer-events-none">
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,51,0.05),transparent_50%)]"
              ></div>
            </div>

            <ExpandableGallery
              :images="featureImages"
              :titles="featureTitles"
              :descriptions="featureDescriptions"
              class="relative z-10"
            />
          </div>
        </div>
      </section>

      <!-- Mobile App -->
      <section id="mobile-app" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div
            class="group relative p-12 rounded-3xl bg-gradient-to-br from-black/70 via-gray-900/60 to-black/50 backdrop-blur-2xl border border-white/10 hover:border-[#ff9933]/50 transition-all duration-700 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)]"
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

            <div class="relative z-10">
              <h2
                class="text-4xl md:text-5xl font-bold text-white text-center mb-8"
              >
                Mobile App
              </h2>
              <p
                class="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12"
              >
                Available on Android and iOS, our mobile app is intuitive and
                easy to use for residents, providing quick access to community
                features on the go.
              </p>

              <!-- 3D iPhone Model -->
              <div class="flex justify-center mb-8">
                <div class="w-full max-w-xl h-[500px] relative">
                  <Phone3D :imagePath="getImagePath('AppScreenshot.png')" />
                </div>
              </div>

              <div class="flex justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/m1-casa/id6753820282"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    :src="getImagePath('AppStoreBadge.svg')"
                    alt="Download on the App Store"
                    class="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.graymatra.m1casa"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    :src="getImagePath('PlayStoreBadge.png')"
                    alt="Get it on Google Play"
                    class="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

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
      </section>

      <!-- About Us -->
      <section id="about" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
            About Us
          </h2>
          <p class="text-xl text-gray-300 leading-relaxed">
            Gray Mātrā transforms your digital vision with expertise in native
            mobile applications and custom software solutions. Our passionate
            team delivers innovative, high-performance technology to drive your
            business forward.
          </p>
        </div>
      </section>

      <!-- Contact Us -->
      <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-12">
            Contact Us
          </h2>
          <div class="space-y-4 mb-12">
            <p class="text-xl text-gray-300">
              Email:
              <a
                href="mailto:contactus@graymatra.com"
                class="text-[#ff9933] hover:text-[#ffb366] transition-colors duration-300 ml-2"
              >
                contactus@graymatra.com
              </a>
            </p>
            <p class="text-xl text-gray-300">
              Website:
              <a
                href="https://www.graymatra.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#ff9933] hover:text-[#ffb366] transition-colors duration-300 ml-2"
              >
                www.graymatra.com
              </a>
            </p>
          </div>
          <div class="flex justify-center">
            <img
              :src="getImagePath('PoweredBy.png')"
              alt="Powered by Gray Mātrā"
              class="max-h-64 w-auto"
            />
          </div>
        </div>
      </section>

      <!-- Footer Links -->
      <footer class="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div class="max-w-7xl mx-auto text-center space-y-4">
          <div class="flex justify-center gap-8">
            <router-link
              to="/privacy-policy"
              class="text-gray-400 hover:text-[#ff9933] transition-colors duration-300"
            >
              Privacy Policy
            </router-link>
            <router-link
              to="/eula"
              class="text-gray-400 hover:text-[#ff9933] transition-colors duration-300"
            >
              End User License Agreement (EULA)
            </router-link>
          </div>
          <p class="text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} Gray Mātrā. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import NeuralBgVue from "../components/ui/bg-neural/NeuralBg.vue";
import ExpandableGallery from "../components/ui/expandable-gallery/ExpandableGallery.vue";
import Phone3D from "../components/ui/phone-3D/Phone3D.vue";

// Helper function to get image paths
const getImagePath = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

// Feature images for expandable gallery
const featureImages = [
  getImagePath("Desktop.png"),
  getImagePath("AmenitiesScreenshot.png"),
  getImagePath("iPhoneMockup.png"),
  getImagePath("Desktop.png"),
];

// Feature titles and descriptions
const featureTitles = [
  "Community Management",
  "Property Tools",
  "User-Friendly Access",
  "Growth Made Simple",
];

const featureDescriptions = [
  "Easily manage communities with user-friendly and simple-to-use tools, fostering stronger connections.",
  "Manage amenities, service requests, and keep track of bills effortlessly with integrated tools.",
  "Custom, intuitive UI for administrators and residents, backed by high account security with multi-factor authentication.",
  "Handles large-scale operations with seamless and efficient data management for growing communities.",
];

const whyChoose = [
  {
    title: "Secure Sign-Ins",
    description:
      "Protect your community with multi-factor authentication for safe and secure access.",
  },
  {
    title: "Tailored Access",
    description:
      "Customized interfaces for management and residents, ensuring seamless interaction for all users.",
  },
  {
    title: "Quick Setup",
    description:
      "Easily onboard multiple users and properties with our efficient setup tools.",
  },
  {
    title: "Effortless Management",
    description:
      "Manage amenities, service requests, and billing with user-friendly tools designed for simplicity.",
  },
];
</script>

<style scoped>
/* Floating particles animations */
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

@keyframes float-4 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    transform: translate(-10px, -18px);
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

.animate-float-4 {
  animation: float-4 3.5s ease-in-out infinite 1.5s;
}
</style>
