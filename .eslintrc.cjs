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
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSInterfaceDeclaration",
        message: "For object-oriented code, use classes instead of interfaces.",
      },
      {
        selector: "TSEnumDeclaration",
        message: "For object-oriented code, use classes instead of enums.",
      },
    ],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
  },
};
