// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://henrynguyen0x.github.io",
  base: "/Portfolio/hieu-landing",

  vite: {
    plugins: [tailwindcss()],
  },
});
