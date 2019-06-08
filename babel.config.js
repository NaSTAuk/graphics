const env = {
  build: {
    ignore: [
      '**/*.test.tsx',
      '**/*.test.ts',
      '**/*.story.tsx',
      '__snapshots__',
      '__tests__',
      '__stories__',
    ],
  },
}

const ignore = ['node_modules', ]

const presets = [
  [
    '@babel/env',
    {
      targets: {
        browsers: 'Last 2 Chrome versions, Firefox ESR',
        node: '8.9',
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
]

const config = (api) => {
  api.cache(true)

  return {
    env,
    ignore,
    presets,
  }
}

module.exports = config
