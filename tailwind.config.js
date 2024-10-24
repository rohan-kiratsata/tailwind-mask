const obfuscatorPlugin = require("tailwind-obfuscator");

module.exports = {
  content: [
    // ... your content files
  ],
  theme: {
    // ... your theme configuration
  },
  plugins: [
    obfuscatorPlugin,
    // ... other plugins
  ],
};
