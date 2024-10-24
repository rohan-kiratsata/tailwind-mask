const crypto = require("crypto-js");
const plugin = require("tailwindcss/plugin");

function obfuscateClass(className) {
  return crypto.MD5(className).toString().substring(0, 8);
}

function createObfuscationMap(className) {
  const classMap = {};
  className.forEach((className) => {
    if (!classMap[className]) classMap[className] = obfuscateClass(className);
  });
  return classMap;
}

const obfuscatorPlugin = plugin(function ({ addVariant, e }) {
  addVariant("obfuscated", ({ container }) => {
    const classMap = createObfuscationMap(Object.keys(container.classes));
  });

  container.walkRules((rule) => {
    rule.selector = rule.selector.replace(/\./g, (match) => {
      const className = rule.selector.slice(1).split(":")[0];
      return "." + (classMap[className] || className);
    });
  });
});

module.exports = obfuscatorPlugin;
