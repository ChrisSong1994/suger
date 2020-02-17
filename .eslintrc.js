module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'no-console': 0,
    'no-useless-escape': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always']
  }
}
