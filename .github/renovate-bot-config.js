module.exports = {
  branchPrefix: 'renovate/',
  onboarding: true,
  platform: 'github',
  dryRun: 'full',
  repositories: [
    'RevenueCat/purchases-flutter',
  ],
  packageRules: [
    // Disable everything except updates to Gradle itself.
    {
      matchPackageNames: ['*'],
      enabledManagers: ['gradle-wrapper'],
    },
    // Enable Android Gradle Plugin updates.
    {
      matchPackageNames: ['com.android.tools.build:gradle'],
      enabledManagers: ['gradle'],
    },
  ],
};