module.exports = {
  branchPrefix: 'renovate/',
  onboarding: true,
  platform: 'github',
  dryRun: 'full',
  repositories: [
    'RevenueCat/renovate',
    'RevenueCat/purchases-flutter',
  ],
  packageRules: [
    {
      matchPackageNames: ['*'],
      enabledManagers: ['github-actions'],
    },
  ],
};