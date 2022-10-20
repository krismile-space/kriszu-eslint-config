import importDedupe from './rules/import-dedupe'
import preferInlineTypeImport from './rules/prefer-inline-type-import'

export default {
  rules: {
    'import-dedupe': importDedupe,
    'prefer-inline-type-import': preferInlineTypeImport,
  },
}
