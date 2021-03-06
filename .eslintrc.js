module.exports = {
    env: {
      browser: true,
      commonjs: true
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      quotes: ["error", "double"],
    },
};