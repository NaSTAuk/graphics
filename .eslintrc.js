module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
      project: './tsconfig.json'
  },
  plugins: ["@typescript-eslint"],
  overrides: [{
    files: ['*.ts', '*.js'],
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      '@typescript-eslint/prefer-interface': 0,
      '@typescript-eslint/explicit-function-return-type': 0
    }
  }],
}

