// eslint.config.js (CommonJS)
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("./.prettierrc.json");
const angularEslintPlugin = require("@angular-eslint/eslint-plugin");

module.exports = [
    {
    ignores: [
      "dist/",
      "out-tsc/",
      ".angular/",
      "node_modules/",
      "*.env",
      ".vscode/",
      ".idea/",
      "coverage/"
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        sourceType: "module",
      },
    },
    plugins: {
      prettier: prettierPlugin,
      "@angular-eslint": angularEslintPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules,
      ...angular.configs.tsRecommended[0].rules,
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
      ...prettierPlugin.configs.recommended.rules,
      "prettier/prettier": ["error", prettierConfig],
    },
    processor: angular.processInlineTemplates,
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angular.templateParser,
    },
    rules: {
      ...angular.configs.templateRecommended[0].rules,
      ...angular.configs.templateAccessibility[0].rules,
    },
  },
  {
  files: ["**/*.spec.ts"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: process.cwd(),
      sourceType: "module",
    },
    globals: {
      // Jasmine/Jest global functions
      describe: "readonly",
      it: "readonly",
      beforeEach: "readonly",
      afterEach: "readonly",
      expect: "readonly",
      jest: "readonly",
    },
  },
  rules: {
    // optionally, test-specific rules here
  },
},
];
