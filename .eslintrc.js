module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'standard-with-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json'
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  }
}

