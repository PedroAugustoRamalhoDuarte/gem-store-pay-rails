import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import ViteRuby from "vite-plugin-ruby";

export default defineConfig({
  build: {sourcemap: false},
  plugins: [ViteRuby(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.js"],
    testMatch: ["./app/frontend/**/*.test.jsx"],
    globals: true,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});