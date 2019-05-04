# eslint-config-catch

[![GitHub license](https://img.shields.io/github/license/CatchoftheDay/eslint-config-catch.svg)](https://github.com/CatchoftheDay/eslint-config-catch/blob/master/LICENSE.md)
[![NPM version](https://img.shields.io/npm/v/eslint-config-catch.svg)](https://www.npmjs.org/package/eslint-config-catch)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-catch.svg)](https://www.npmjs.org/package/eslint-config-catch)
[![Build Status](https://travis-ci.org/CatchoftheDay/eslint-config-catch.svg?branch=master)](https://travis-ci.org/CatchoftheDay/eslint-config-catch)

An ESLint configuration for the Catch IT team.

## Installation

```bash
$ npm install eslint eslint-config-catch --save-dev
```
or
```bash
$ yarn add eslint eslint-config-catch --dev
```

## Usage
To start using this configuration, simply extend this package in your
ESLint configuration:

```json
{
  "extends": "catch"
}
```

For legacy rules (pre ES6), the following can be used:

```json
{
  "extends": "catch/legacy"
}
```

For more additional information on shareable configs, see the
[ESLint Documentation](http://eslint.org/docs/developer-guide/shareable-configs).
