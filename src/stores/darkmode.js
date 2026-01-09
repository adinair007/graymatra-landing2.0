import { defineStore } from "pinia";

export const useDarkMode = defineStore("darkMode", {
  state: () => ({
    isDarkMode: true, // Start with dark
  }),

  actions: {
    init() {
      const saved = localStorage.getItem("theme");
      if (saved !== null) {
        this.isDarkMode = saved === "dark";
      } else {
        // First time or no saved preference → force dark
        this.isDarkMode = true;
        localStorage.setItem("theme", "dark");
      }
      this.apply();
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.apply();
    },

    apply() {
      const html = document.documentElement;
      if (this.isDarkMode) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
});
