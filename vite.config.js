import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui-rack": path.resolve(new URL("./uirack", import.meta.url).pathname),
    },
  },
  server: {
    port: 3000,
  },
});
