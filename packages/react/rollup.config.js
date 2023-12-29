const TS = require("rollup-plugin-typescript2");

module.exports = {
  input: [
    "src/index.ts",
    "src/atoms/button/index.ts",
    "src/atoms/color/index.ts",
    "src/atoms/helperText/index.ts",
    "src/atoms/Label/index.ts",
    "src/molicules/InputHelper/index.ts",
    "src/molicules/select/index.ts",
  ],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [TS()],
  external: ["react"],
};
