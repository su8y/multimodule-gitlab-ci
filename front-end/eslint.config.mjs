import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    settings: {
      react: {
        version: "detect",
      }
    }
  },
  {
    ignores: ["**/.config/",
      "!node_modules/",
      "node_modules/*",
      "!node_modules/mylibrary/",
      "build/**/*",
      "!build/test.js",
      "!build/**/*/",
      "!build/**/test.js"
    ]

  },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];