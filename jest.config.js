module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '!**/cjf/**',
    'packages/framework/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/cjs/'],
  coverageReporters: ['html', 'text', 'json', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  watchPathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/cjs/'],
  "roots": [
    "./packages",
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: '\\.test\\.ts?$',
  "moduleFileExtensions": [ "ts", "js" ],
}