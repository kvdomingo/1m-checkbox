import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "src/lib"),
    },
  },
  plugins: [svelte()],
});
