module.exports = () => {
  return {
    postcssPlugin: "postcss-tailwind-obfuscator",
    Once(root) {
      root.walkRules((rule) => {
        rule.selector = rule.selector.replace(/\.([\w-]+)/g, ".obfuscated:$1");
      });
    },
  };
};

module.exports.postcss = true;
