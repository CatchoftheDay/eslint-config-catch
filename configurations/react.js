"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: ["catch/configurations/default", "catch/rules/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    fetch: false
  },
  rules: {
    "no-extra-parens": 0,
    "no-var": 2
  }
};