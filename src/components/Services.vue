<template>
  <section
    id="services"
    class="py-16 relative overflow-hidden"
    data-scroll-section
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- 2. Mission Statement with Text Scroll Reveal -->
      <div class="mb-96">
        <TextScrollReveal
          text="Transforming ideas into seamless, scalable realities."
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium italic text-center w-full px-4 leading-tight font-['Montserrat',_sans-serif] text-gray-700 dark:text-gray-300"
        />
      </div>

      <div class="mb-52 flex justify-center items-center gap-4">
        <MorphingText :texts="texts" />
      </div>

      <!-- 3. Native Application Development with Container Scroll -->
      <div class="flex flex-col overflow-hidden mb-40">
        <ContainerScroll>
          <template #title>
            <h1 class="text-4xl font-semibold text-gray-900 dark:text-gray-200">
              Custom Built <br />
              <span
                class="mt-1 text-4xl leading-none font-bold md:text-[6rem] text-[#ff9933]"
              >
                Native Applications
              </span>
            </h1>
          </template>
          <template #card>
            <img
              src="../assets/NativeApps.jpg"
              alt="Native App Development"
              class="mx-auto h-full rounded-2xl object-cover object-left-top"
              height="720"
              width="1400"
            />
          </template>
        </ContainerScroll>
        <div class="text-center -mt-32 max-w-3xl mx-auto mb-40">
          <div class="overflow-hidden">
            <p
              ref="nativeAppsText"
              class="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed md:leading-tight font-semibold text-gray-700 dark:text-gray-300 opacity-0 px-4 max-w-3xl mx-auto"
            >
              High-performance native mobile apps for iOS and Android, tailored
              to your business needs with seamless user experiences and optimal
              performance.
            </p>
          </div>
        </div>
      </div>

      <!-- 4. Software Development with Icon Cloud -->
      <div class="flex flex-col overflow-hidden mb-40">
        <!-- Title -->
        <div class="mx-auto max-w-5xl text-center mb-16">
          <h1 class="text-4xl font-semibold text-gray-900 dark:text-gray-200">
            Innovative <br />
            <span
              class="mt-1 text-4xl leading-none font-bold md:text-[6rem] text-[#ff9933]"
            >
              Software Development
            </span>
          </h1>
        </div>

        <!-- Icon Cloud -->
        <div class="flex justify-center mb-16">
          <IconCloud
            :images="techStackImages"
            class="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          />
        </div>

        <!-- Description with Text Reveal -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="overflow-hidden">
            <p
              ref="softwareDevText"
              class="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed sm:leading-relaxed md:leading-tight font-semibold text-gray-700 dark:text-gray-300 opacity-0 px-4 max-w-3xl mx-auto"
            >
              Custom software solutions to optimize workflows and enhance
              business scalability with cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>

      <!-- 5. Other Services - Ultra Sleek -->
      <div class="mt-32 mb-20">
        <!-- Minimalist Header -->
        <div class="flex items-center justify-start mb-24 gap-4 px-4 group">
          <div class="relative">
            <h2
              class="text-xl md:text-2xl font-light text-gray-400 dark:text-gray-300 tracking-[0.3em] uppercase"
            >
              Other Services
            </h2>
            <div
              class="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#ff9933] group-hover:w-full transition-all duration-700"
            ></div>
          </div>
          <div
            class="flex-1 h-[1px] bg-gradient-to-r from-[#ff9933]/40 via-[#ff9933]/20 to-transparent"
          ></div>
        </div>

        <!-- Sleek Cards Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
        >
          <div
            v-for="(service, index) in otherServices"
            :key="index"
            class="group relative h-full"
          >
            <!-- Card -->
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 dark:from-gray-800/60 dark:via-gray-900/50 backdrop-blur-2xl border border-white/20 dark:border-white/10 transition-all duration-700 hover:border-[#ff9933]/50 hover:shadow-[0_8px_32px_rgba(255,153,51,0.15)] h-full flex flex-col"
            >
              <!-- Animated mesh gradient background -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
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

              <!-- Content Container -->
              <div class="relative z-10 p-10 md:p-12 flex flex-col flex-grow">
                <!-- Floating Icon Container -->
                <div class="mb-8 relative inline-block">
                  <!-- Glow ring -->
                  <div
                    class="absolute inset-0 rounded-2xl bg-[#ff9933]/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  ></div>

                  <!-- Icon box -->
                  <div
                    class="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#ff9933]/10 to-[#ff9933]/5 border border-[#ff9933]/20 group-hover:border-[#ff9933]/40 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <component
                      :is="service.icon"
                      class="w-8 h-8 md:w-10 md:h-10 text-[#ff9933] transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,153,51,0.5)]"
                    />
                  </div>

                  <!-- Orbiting dot -->
                  <div
                    class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#ff9933] opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                  ></div>
                </div>

                <!-- Title with gradient -->
                <h3 class="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                  <span
                    class="bg-gradient-to-r from-white via-white to-gray-400 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-[#ff9933] group-hover:via-[#ffb366] group-hover:to-white transition-all duration-700"
                  >
                    {{ service.title }}
                  </span>
                </h3>

                <!-- Description -->
                <p
                  class="text-base md:text-lg text-gray-300 dark:text-gray-400 leading-relaxed font-light group-hover:text-gray-200 dark:group-hover:text-gray-300 transition-colors duration-700 flex-grow"
                >
                  {{ service.description }}
                </p>
              </div>

              <!-- Edge glow effect -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              >
                <div
                  class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/50 to-transparent"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/50 to-transparent"
                ></div>
              </div>
            </div>

            <!-- Floating particles effect -->
            <div
              class="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
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
    </div>
  </section>
</template>

<script setup>
import { ref, h, onMounted, onUnmounted, nextTick } from "vue";
import MorphingText from "./ui/morphing-text/MorphingText.vue";
import TextScrollReveal from "./ui/text-scroll-reveal/TextScrollReveal.vue";
import ContainerScroll from "./ui/container-scroll/ContainerScroll.vue";
import IconCloud from "./ui/icon-cloud/IconCloud.vue";

const texts = ["Services", "Solutions", "Expertise"];

const nativeAppsText = ref(null);
const softwareDevText = ref(null);

let hasNativeAppsAnimated = false;
let hasSoftwareDevAnimated = false;

function checkScroll() {
  // Check native apps text animation
  if (!hasNativeAppsAnimated && nativeAppsText.value) {
    const rect = nativeAppsText.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      hasNativeAppsAnimated = true;
      animateText(nativeAppsText.value);
    }
  }

  // Check software dev text animation
  if (!hasSoftwareDevAnimated && softwareDevText.value) {
    const rect = softwareDevText.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      hasSoftwareDevAnimated = true;
      animateText(softwareDevText.value);
    }
  }
}

function animateText(element) {
  if (element) {
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transition = "opacity 1s ease-out";
    }, 300);
  }
}

onMounted(async () => {
  await nextTick();

  // Listen to scroll events
  window.addEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", checkScroll);
  }

  // Set up interval to continuously check scroll position
  const checkInterval = setInterval(checkScroll, 100);

  // Clean up interval after 30 seconds
  setTimeout(() => {
    clearInterval(checkInterval);
  }, 30000);

  // Initial check
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);

  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", checkScroll);
  }
});

// Tech stack images for icon cloud
const techStackImages = [
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/vue.js/4FC08D",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/python/3776AB",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Java alternative
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/kubernetes/326CE5",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/postgresql/4169E1",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/FFFFFF",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", // AWS alternative
  "https://cdn.simpleicons.org/postman/FF6C37",
  "https://cdn.simpleicons.org/render/46E3B7",
  "https://cdn.simpleicons.org/swift/F05138",
];
// Previous detailed icons
const GlobeIcon = () =>
  h(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      class: "w-full h-full",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      }),
    ]
  );

const SupportIcon = () =>
  h(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      class: "w-full h-full",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      }),
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      }),
    ]
  );

const otherServices = [
  {
    title: "Website Development",
    description:
      "Responsive, user-centric websites designed to engage and convert your audience with modern technologies.",
    icon: GlobeIcon,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support to ensure your apps, software, and websites remain secure, optimized, and up-to-date.",
    icon: SupportIcon,
  },
];
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
</style>
