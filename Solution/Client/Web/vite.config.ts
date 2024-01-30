import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
  server: {
    fs: {
      // Autoriser les fichiers servis depuis le répertoire parent
      allow: ["../../"],
    },
  },
});
