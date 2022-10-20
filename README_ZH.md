# @kriszu/eslint-config

来源: [@antfu/eslint-config](https://github.com/antfu/eslint-config)

[中文](README_ZH.md) | [English](README.md)

[![npm](https://img.shields.io/npm/v/@kriszu/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@kriszu/eslint-config)

- 单引号，无半角
- 格式化的自动修复（旨在独立使用，不需要Prettier）。
- 设计用于与TypeScript、Vue开箱即用。
- 也适用于json、yaml、markdown
- import 分类，悬空的逗号，更干净的提交差异

## 使用

### 安装

```bash
pnpm add -D eslint @kriszu/eslint-config
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

### 配置 VS Code 自动修复

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
