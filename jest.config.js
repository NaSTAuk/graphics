module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '!packages/**/dist/*.{ts,tsx}',
    'packages/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/dist/', ],
  coverageReporters: ['html', 'text', 'json', 'lcov', ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '@nastauk/graphics-(.+)$': '<rootDir>packages/core/$1/src',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', ],
  setupFilesAfterEnv: ['<rootDir>testing/jest/setupTests.ts', ],
  snapshotSerializers: ['enzyme-to-json/serializer', ],
  testRegex: '\\.test\\.ts?$',
  watchPathIgnorePatterns: ['/node_modules/', '/docs/', '/packages/*/*/dist/', ],
}
