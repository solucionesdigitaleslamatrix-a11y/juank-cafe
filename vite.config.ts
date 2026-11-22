import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub Pages project sites live below /<repository>/; local development and
// user/organization sites (owner.github.io) use the domain root.
const repository = process.env.GITHUB_REPOSITORY;
const repositoryName = repository?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io") ?? false;
const base = repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}/` : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
