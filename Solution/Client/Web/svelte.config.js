import reactiveCSSPreprocessor from "svelte-reactive-css-preprocess";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import seqPreprocess from "svelte-sequential-preprocessor";
import { cssModules } from "svelte-preprocess-cssmodules";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: seqPreprocess([preprocess({
    defaults: {
      style: "postcss",
    },
    sass: true,
    scss: {
      prependData: "@import './static/index.scss';"
    },
    cssModules
  }), reactiveCSSPreprocessor()]),

  kit: {
    alias: {
      "@assets/*": "../../Assets/*",
      "@components/*": "../Components/*",
      "@resources/*": "../Resources/*",
      "@styles/*": "../Resources/Styles/*",
      "@images/*": "../Resources/Images/*",
      "@core/*": "../../Core/*",
      "@modules/*": "../../Modules/*",
      "@application/*": "../Application/*",
    },
    adapter: adapter({
      out: "./build"
    }),
  },
};

export default config;