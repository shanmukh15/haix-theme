import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, "./configuration/postcss.config.js"),
  },
  resolve: {
    alias: {
      "@uirack": path.resolve(__dirname, "./src/ComponentLibrary"),
    },
  },
  server: {
    port: 3000,
  },
});
