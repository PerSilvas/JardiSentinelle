import reactiveCSSPreprocessor from "svelte-reactive-css-preprocess";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import seqPreprocess from "svelte-sequential-preprocessor";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: seqPreprocess([preprocess({
    defaults: {
      style: "postcss",
    },
    sass: true,
    scss: {
      prependData: "@import '../../Assets/Resources/Styles/index.scss';",
    }
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
    },
    adapter: adapter({
      out: "./build"
    }),
  },
};

export default config;