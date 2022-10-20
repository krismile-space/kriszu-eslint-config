# @kriszu/eslint-config-vue


[中文](README_ZH.md) | [English](README.md)


- 单引号，无半角
- 格式化的自动修复（旨在独立使用，不需要Prettier）。
- 设计用于与TypeScript、Vue开箱即用。
- 也适用于json、yaml、markdown
- 导入自动排序，需要尾随逗号，更干净的提交差异

## 使用

### 安装

```bash
pnpm add -D eslint @kriszu/eslint-config-vue
```

### Config `.eslintrc`

```json
{
  "extends": "@kriszu"
}
```

> 你通常不需要`.eslintignore`，因为它已经由预设提供了。

### 添加脚本到 package.json

例如:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

本项目基于: [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](LICENSE) License © 2022-PRESENT Krizsu
