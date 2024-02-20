module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
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
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-syntax": [
      "warn",
      {
        selector: "TSInterfaceDeclaration",
        message:
          "To write code that's coherent with JavaScript," +
          " use classes instead of interfaces.",
      },
      {
        selector: "TSEnumDeclaration",
        message:
          "To write code that's coherent with JavaScript," +
          " use classes instead of enums.",
      },
      {
        selector: "TSTypeAliasDeclaration",
        message:
          "To write code that's coherent with JavaScript," +
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
