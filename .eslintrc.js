/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: [
    "plugin:i18next/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "universe/web",
    "universe/shared/typescript-analysis",
    "plugin:perfectionist/recommended-natural",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "react-refresh",
    "i18next",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "react-hooks",
    "react",
    "sonarjs",
    "sort-destructure-keys",
    "unicorn",
    "prettier",
    "perfectionist",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      1,
      {
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
      },
    ],
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        args: "after-used",
        argsIgnorePattern: "^_.*?$",
        ignoreRestSiblings: false,
      },
    ],
    "padding-line-between-statements": [
      1,
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
    ],
    "perfectionist/sort-imports": 0,
    "perfectionist/sort-jsx-props": 0,
    "prettier/prettier": 1,
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 1,
    "react-hooks/exhaustive-deps": [
      1,
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
    "react-refresh/only-export-components": [1, { allowConstantExport: true }],
    "sort-destructure-keys/sort-destructure-keys": 1,
    "unicorn/filename-case": [0],
    "unicorn/no-null": 0,
    "unicorn/prevent-abbreviations": [
      1,
      {
        replacements: {
          args: {
            arguments: false,
          },
          attr: {
            attribute: false,
          },
          env: {
            environment: false,
          },
          params: {
            parameters: false,
          },
          prop: {
            property: false,
          },
          props: {
            properties: false,
          },
          ref: {
            reference: false,
          },
          res: false,
        },
      },
    ],
    "no-multiple-empty-lines": [
      1,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
