# @kriszu/eslint-config

[English](README.md) | [中文](README_ZH.md)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff

## Usage

### Install

```bash
npm add -D eslint @kriszu/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@kriszu"
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

### Config VS Code auto fix

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

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)
