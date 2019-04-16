# Graphics

[![NaSTA-uk/graphics](https://img.shields.io/badge/slack-@NaSTAhq/graphics-yellow.svg?logo=slack)](https://nasta-hq.slack.com/messages/CHGJDNE02)

A repository for HTML based, TV Graphics

## Development

1. Clone the repo using one of the following commands, we would advise the first if you have SSH setup.
`git clone git@github.com:NaSTAuk/graphics.git`
`git clone https://github.com/NaSTAuk/graphics.git`
2. Install the latest LTS version of Node
`Todo command`
3. Install dependancies using:
`yarn`
4. Profit...

## Community

Join the discussion via [nasta-hq.slack.com](http://nasta-hq.slack.com) in #graphics (our Slack channel)

## Structure

This repoisitory acts as a monorepo built upon [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).
It is formed of the following structure:

```
.
├── _config.yml
├── packages
|   ├── atomics
|   |   ├── atoms
|   |   ├── molecules
|   |   ├── organisms
|   |   ├── templates
|   |   └── pages
|   ├── components
|   |   └── lowerThirds
|   └── framework
|       ├── core
|       └── admin
└── package.json
```