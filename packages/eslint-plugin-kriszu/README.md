# eslint-plugin-kriszu

[English](README.md) | [中文](README_ZH.md)

ESLint rules for [Kriszu](https://github.com/wangsizhu0504/eslint-config).


* eslint-plugin-kriszu
    * Rules
        * import-dedupe
        * prefer-inline-type-import

## Rules

### import-dedupe

Fix duplication in imports

The following patterns are considered problems:

```js
import { a, b, a, a, c, a } from 'footer'
// Message: undefined
```

The following patterns are not considered problems:

```js
import { a, b,   c,  } from 'footer'
```


### prefer-inline-type-import


TypeScript 4.5 introduced [type modifiers](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#type-modifiers-on-import-names) that allow to inline type imports as opposed to having dedicated `import type`. This allows to remove duplicate type imports. This rule enforces use of import type modifiers.

The following patterns are considered problems:

```js
import type { foo } from 'bar'
// Message: undefined

import type { foo, baz } from 'bar'
// Message: undefined
```

The following patterns are not considered problems:

```js
import {type foo} from 'bar'

import type Foo from 'bar'

import type * as Foo from 'bar'
```


## Install

```bash
npm add -D eslint eslint-plugin-kriszu
```

## Config `.eslintrc`

```json
{
  "plugins": ["kriszu"]
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](LICENSE) License © 2022-PRESENT Krizsu
