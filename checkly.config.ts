import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'externals',
  logicalId: 'externals',
  repoUrl: 'https://github.com/hahafury/TETSREPO',
  checks: {
    frequency: 10,
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['mac'],
    checkMatch: '**/__checks__/**/*.check.ts',
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
})

export default config
