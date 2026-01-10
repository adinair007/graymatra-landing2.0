<template>
  <section
    id="services"
    class="py-16 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
  >
    <!-- Inspira UI Vortex Background -->
    <Vortex class="absolute inset-0 -z-10" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Our <span class="text-saffron">Services</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-saffron hover:text-white transition-all duration-300"
        >
          <img
            :src="service.image"
            :alt="service.alt"
            class="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
          />
          <h3
            class="text-lg sm:text-xl font-semibold mb-2 group-hover:text-white"
          >
            {{ service.title }}
          </h3>
          <p class="text-sm sm:text-base group-hover:text-white">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Vortex from "./ui/vortex/Vortex.vue";
import CodingInterface from "../assets/CodingInterface.jpg";
import ResponsiveDesign from "../assets/ResponsiveDesign.jpg";
import NativeApps from "../assets/NativeApps.jpg";
import TechSupport from "../assets/TechSupport.jpg";

const services = [
  {
    title: "Native Application Development",
    description:
      "High-performance native mobile apps for iOS and Android, tailored to your business needs.",
    image: NativeApps,
    alt: "Native App Development",
  },
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
