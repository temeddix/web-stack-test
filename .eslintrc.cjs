module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
  rules: {
    "no-restricted-syntax": [
      "warn",
      {
        selector: "TSInterfaceDeclaration",
        message:
          "To write TypeScript code that's aligned with JavaScript," +
          " which declares only things that actually exist at runtime," +
          " use classes instead of interfaces.",
      },
      {
        selector: "TSEnumDeclaration",
        message:
          "To write TypeScript code that's aligned with JavaScript," +
          " which declares only things that actually exist at runtime," +
          " use classes instead of enums.",
      },
      {
        selector: "TSTypeAliasDeclaration",
        message:
          "To write TypeScript code that's aligned with JavaScript," +
          " which declares only things that actually exist at runtime," +
          " do not use type aliases.",
      },
    ],
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/no-namespace": "warn",
  },
};
