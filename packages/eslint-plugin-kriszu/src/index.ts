import importDedupe from './rules/import-dedupe'
import preferInlineTypeImport from './rules/prefer-inline-type-import'
import genericSpacing from './rules/generic-spacing'
export default {
  rules: {
    'import-dedupe': importDedupe,
    'prefer-inline-type-import': preferInlineTypeImport,
    'generic-spacing': genericSpacing,
  },
}
