/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  root: "./",
  test: {
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.stories.tsx", "src/main.tsx", "e2e/**/*"],
      reporter: ["text", "json", "html"],
    },
    exclude: ["e2e/*.spec.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
  },
});
