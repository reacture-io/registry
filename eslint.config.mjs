import config from "@reacture-io/eslint-config/react";

const eslintConfig = [
  ...config,
  {
    ignores: ["node_modules/", "dist/", "build/", ".next/", ".turbo/"],
  },
];

export default eslintConfig;
