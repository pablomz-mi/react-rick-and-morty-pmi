import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://pablomz-mi.github.io/react-rick-and-morty-pmi/",
  plugins: [react(), eslint()],
});
