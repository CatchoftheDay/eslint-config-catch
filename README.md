<h1 align="center">eslint-config-catch</h1>
<p align="center">
  <a title='License' href="https://github.com/mattyao-cotd/eslint-config-catch/blob/master/LICENSE.md">
    <img src='https://img.shields.io/github/license/mattyao-cotd/eslint-config-catch.svg' />
  </a>
</p>
<h4 align="center">
  A composable set of ESLint configurations, for Catch Group Web Team only.
</h4>

---

This project is based on [Airbnb ESLint rules](https://github.com/airbnb/javascript) , extended by Catch Group Web team with modifications by requirements. 

## Installation
1.  Install this config package and ESLint:

    ```bash
    $ npm install --save-dev eslint eslint-config-catch eslint-config-airbnb@17.0.0
    ```
    or
    ```bash
    $ yarn add eslint eslint-config-catch eslint-config-airbnb@17.0.0
    ```

2.  Then, install any additional dependencies required by your configuration. (See
    [Dependencies](#dependencies) section below.)

        e.g.
        ```bash
        $ npm install --save-dev eslint-plugin-filenames babel-eslint
        ```

## Usage
To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`. For
more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```yaml
---
"extends":
  - "catch"
```
If you only need React rules, you can do the following:
```yaml
---
"extends":
  - "catch/rules/react"
```
## About CI/CD
This repo is managed by Travis and npm hooks. It follows the [Semantic Release](https://github.com/semantic-release/cli) process and gets deployed automatically by Travis if the build is successful on master branch. 

To contribute to this repo, please install [Commitizen Cli](https://github.com/commitizen/cz-cli) and follow the instructions if you are submitting new commit.

Please never release via Github Manually.

## License

Copyright (c) 2018-present, Catch.com.au