"use strict";

module.exports = {
  rules: {
    "radix": ["error", "as-needed"],
    "import/prefer-default-export": "warn",
    "function-paren-newline": "off",
    "no-prototype-builtins": "off",
    "default-case": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-case-declarations": "off",
    "arrow-parens": ["error", "as-needed"],
    "prefer-destructuring": "warn",
    "no-unused-vars": "warn",
    "consistent-return": "warn",
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": false
    }],
    "curly": ["error", "all"],
    "no-plusplus": [ "error", {
        "allowForLoopAfterthoughts": true
    }],
    "no-restricted-globals": "warn",
    "no-undef": "warn",
    "max-len": "warn",
    "class-methods-use-this": "warn",
  }
};