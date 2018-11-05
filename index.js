"use strict";

module.exports = {
  extends: [
    "airbnb", // use airbnb as the base
    "catch/rules/eslint", 
    "catch/rules/filenames",
    "catch/rules/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
  },
}