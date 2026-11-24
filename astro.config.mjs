import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ebenezer.work",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  security: {
    allowedDomains: [{ hostname: "localhost" }, { hostname: "127.0.0.1" }, { hostname: "[::1]" }],
  },
  session: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
