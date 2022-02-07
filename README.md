# ⛔️ THIS REPO HAS BEEN DEPRECATED ⛔️

Please make your changes to [Orchard](https://github.com/propelinc/orchard)'s eslint config instead.

---

# @propelinc/eslint-config

[![npm version](https://badge.fury.io/js/%40propelinc%2Feslint-config.svg)](https://badge.fury.io/js/%40propelinc%2Feslint-config)

This package contains Propel's shared ESLint config. These rules are specifically for projects built on Vue CLI.

## Setup

### Prerequisites

We currently only support ESLint 6.

```sh
npm install eslint@6.8.0 prettier --save-dev
```

### Install

You'll need to install a set of ESLint plugins along with this library. Use this shortcut to install the library and its required peer dependencies.


```sh
npx install-peerdeps --dev @propelinc/eslint-config
```

### Update your .eslintrc

Change your eslint configuration to extend from the `@propelinc` config.

```js
module.exports = {
  extends: ['@propelinc'],
  rules: {
    // Override any rules here
  },
};
```
