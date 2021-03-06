// vite.config.js
const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RemoteMethods",
      fileName: (format) => `index.${format}.js`,
    },
  },
});
