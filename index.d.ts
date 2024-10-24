declare module "tailwind-mask" {
  import { Plugin } from "tailwindcss";

  const obfuscatorPlugin: Plugin;
  export default obfuscatorPlugin;
}

declare module "tailwind-mask/postcss" {
  import { Plugin } from "postcss";

  const postcssObfuscatorPlugin: Plugin;
  export default postcssObfuscatorPlugin;
}
