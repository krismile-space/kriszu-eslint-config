import { ESLintUtils } from '@typescript-eslint/utils'

export const createEslintRule = ESLintUtils.RuleCreator(
  ruleName => ruleName,
)

const PROMISE_STATICS = {
  all: true,
  allSettled: true,
  any: true,
  race: true,
  reject: true,
  resolve: true,
}

export function isPromise(expression) {
  return (
  // hello.then()
    (expression.type === 'CallExpression'
       && expression.callee.type === 'MemberExpression'
       && expression.callee.property.name === 'then')
     // hello.catch()
     || (expression.type === 'CallExpression'
       && expression.callee.type === 'MemberExpression'
       && expression.callee.property.name === 'catch')
     // hello.finally()
     || (expression.type === 'CallExpression'
       && expression.callee.type === 'MemberExpression'
       && expression.callee.property.name === 'finally')
     // somePromise.ANYTHING()
     || (expression.type === 'CallExpression'
       && expression.callee.type === 'MemberExpression'
       && isPromise(expression.callee.object))
     // Promise.STATIC_METHOD()
     || (expression.type === 'CallExpression'
       && expression.callee.type === 'MemberExpression'
       && expression.callee.object.type === 'Identifier'
       && expression.callee.object.name === 'Promise'
       && PROMISE_STATICS[expression.callee.property.name])
  )
}

module.exports = isPromise
