/** @type {import('eslint').Linter.Config} */
const config = {
  extends: 'next/core-web-vitals',
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
  }
}

module.exports = config
