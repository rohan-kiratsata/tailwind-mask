const postcss = require("postcss");

module.exports = postcss.plugin("postcss-tailwind-obfuscator", () => {
  return (root) => {
    root.walkRules((rule) => {
      rule.selector = rule.selector.replace(/\.([\w-]+)/g, ".obfuscated:$1");
    });
  };
});
