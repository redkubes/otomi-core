module.exports = {
  $schema: 'https://docs.renovatebot.com/renovate-schema.json',
  dryRun: 'full',
  onboarding: false,
  platform: 'github',
  repositories: ['redkubes/otomi-core'],
  schedule: 'before 5am every weekday',
  npm: { enabled: false },
  enabledManagers: ['helmv3'],
  helmv3: {
    enabled: true,
    registryAliases: { stable: 'https://charts.helm.sh/stable' },
    commitMessageTopic: 'helm chart {{depName}}',
    fileMatch: ['^chart/otomi-deps/Chart\\.yaml$'],
  },
  hostRules: [{ hostType: 'github', matchHost: 'github.com', token: process.env.RENOVATE_TOKEN }],
}
