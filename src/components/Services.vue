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
      <div class="mb-40 flex flex-col overflow-hidden">
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
        <div class="text-center mt-2 max-w-3xl mx-auto">
          <TextReveal
            :duration="0.8"
            :delay="0.3"
            :stagger="0.12"
            class="text-center text-4xl leading-relaxed font-semibold"
          >
            High-performance native mobile apps for iOS and Android, tailored to
            your business needs with seamless user experiences and optimal
            performance.
          </TextReveal>
        </div>
      </div>

      <!-- Placeholder for other services (to be added) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
        <div
          v-for="(service, index) in otherServices"
          :key="index"
          class="group bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-saffron/80 hover:text-white transition-all duration-300"
        >
          <img
            :src="service.image"
            :alt="service.alt"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3
            class="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-white"
          >
            {{ service.title }}
          </h3>
          <p class="text-base sm:text-lg group-hover:text-white">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MorphingText from "./ui/morphing-text/MorphingText.vue";
import TextScrollReveal from "./ui/text-scroll-reveal/TextScrollReveal.vue";
import TextReveal from "./ui/text-reveal/TextReveal.vue";
import ContainerScroll from "./ui/container-scroll/ContainerScroll.vue";
import CodingInterface from "../assets/CodingInterface.jpg";
import ResponsiveDesign from "../assets/ResponsiveDesign.jpg";
import TechSupport from "../assets/TechSupport.jpg";

const texts = ["Services", "Solutions", "Expertise"];

const otherServices = [
  {
    title: "Software Development",
    description:
      "Custom software solutions to optimize workflows and enhance business scalability.",
    image: CodingInterface,
    alt: "Software Development",
  },
  {
    title: "Website Development",
    description:
      "Responsive, user-centric websites designed to engage and convert your audience.",
    image: ResponsiveDesign,
    alt: "Website Development",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support to ensure your apps, software, and websites remain secure and up-to-date.",
    image: TechSupport,
    alt: "Support Team",
  },
];
</script>
