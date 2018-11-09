"use strict";

module.exports = {
  plugins: ["react"],
  rules: {
    "react/jsx-one-expression-per-line": "off",
    "react/no-unused-state": "warn",
    "react/prop-types": "warn",
    "react/no-unescaped-entities": "warn",
    "jsx-a11y/media-has-caption": "warn",
    "class-methods-use-this": "warn",
    "react/no-array-index-key": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};