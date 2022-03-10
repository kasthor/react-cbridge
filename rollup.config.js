import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    url({ exclude: ["**/*.svg"] }),
    resolve(),
    typescript(),
    json(),
    commonjs({ extensions: [".js", ".ts"] }),
  ],
  onwarn(warning, warn) {
    if (warning.code === "EVAL" && warning.id?.includes("google-protobuf"))
      return;

    warn(warning);
  },
};
