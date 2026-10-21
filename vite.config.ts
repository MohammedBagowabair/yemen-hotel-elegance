import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Static build for GitHub Pages: the home route is prerendered to HTML.
// BASE_PATH sets the subpath, e.g. BASE_PATH=/yemen-hotel-elegance/
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  base,
  server: { port: 8080 },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      pages: [{ path: "/" }],
      prerender: { enabled: true, crawlLinks: false },
    }),
    viteReact(),
  ],
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"] },
});
