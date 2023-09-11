module.exports = {
  // Specify the environment your code will run in.
  env: {
    browser: true, // For browser-based JavaScript
    node: true, // For Node.js
    es6: true, // For ECMAScript 2015 (ES6) features
  },

  // Specify the JavaScript language options you want to support.
  parserOptions: {
    ecmaVersion: 2021, // The version of ECMAScript/JavaScript you're using
    sourceType: "module", // Use 'module' if you're using ECMAScript modules (ESM)
  },

  // Define the set of rules you want to enforce.
  rules: {
    // Example rule: enforce a consistent indentation style (2 spaces).
    indent: ["error", 2],

    // Add more rules or customize existing ones as needed.
  },

  // You can add plugins or extend configurations here.
  // For example, if you're using React, you might extend the 'plugin:react/recommended' config.
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
    "plugin:react/recommended",
    // Add more extensions or plugins as needed.
  ],
};
