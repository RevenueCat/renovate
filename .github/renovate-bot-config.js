module.exports = {
  branchPrefix: 'renovate/',
  onboarding: false,
  platform: 'github',
  dryRun: 'full',
  repositories: [
    'RevenueCat/renovate',
    'RevenueCat/purchases-flutter',
  ],
  // Move these to a preset.
  dependencyDashboard: true,
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