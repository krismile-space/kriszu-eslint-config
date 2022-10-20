# eslint-plugin-kriszu

[English](README.md) | [中文](README_ZH.md)

[Kriszu](https://github.com/wangsizhu0504/eslint-config)的ESLint 规则插件


* eslint-plugin-kriszu
    * Rules
        * import-dedupe
        * prefer-inline-type-import

## Rules

### import-dedupe

修复导出中的重复项

以下模式被认为是问题:

```js
import { a, b, a, a, c, a } from 'footer'
// Message: undefined
```

以下模式不被认为是问题:

```js
import { a, b,   c,  } from 'footer'
```


### prefer-inline-type-import


TypeScript 4.5 引入了[type modifiers](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#type-modifiers-on-import-names)，允许内联类型导入，而不是有专门的`import type'。这允许删除重复的类型导入。这条规则强制使用了导入类型修饰符.

以下模式被认为是问题:

```js
import type { foo } from 'bar'
// Message: undefined

import type { foo, baz } from 'bar'
// Message: undefined
```

以下模式不被认为是问题:

```js
import {type foo} from 'bar'

import type Foo from 'bar'

import type * as Foo from 'bar'
```


## 安装

```bash
npm add -D eslint eslint-plugin-kriszu
```

## 配置 `.eslintrc`

```json
{
  "plugins": ["kriszu"]
}
```

> 你通常不需要`.eslintignore`，因为它已经由预设提供了。

### 添加脚本到 package.json 中

例如:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

项目基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](LICENSE) License © 2022-PRESENT Krizsu
