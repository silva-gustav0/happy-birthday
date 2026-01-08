import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];

  // Em produção no GitHub Pages, a URL base costuma ser "/<nome-do-repo>/".
  // Em desenvolvimento/local e preview do Lovable, mantenha "/".
  const base = mode === "production" && repo ? `/${repo}/` : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
