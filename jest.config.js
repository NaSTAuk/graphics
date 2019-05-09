module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '!**/cjf/**',
    '!packages/**/dist/*.{ts,tsx}',
    'packages/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/dist/'],
  coverageReporters: ['html', 'text', 'json', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  notify: true,
  notifyMode: 'always',
  roots: [
    './packages',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\\.test\\.ts?$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  watchPathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/cjs/'],
}