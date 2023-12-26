import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/weather-wiser/",
  server: {
    hmr: {
      overlay: false, // for the overlay to work properly with React
    },
  },
});
