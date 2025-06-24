# Renovate
This repository hosts the [Renovate](https://docs.renovatebot.com/) bot responsible for updating dependencies accross our (SDK) repsitories, as well as shared configuration.  

## Running Renovate
It's run on a schedule, but you can run it manually [here](https://github.com/RevenueCat/renovate/actions/workflows/renovate.yml).

## Directory
Some notable files in this repo:
- [`.github/workflows/renovate.yml`](/.github/workflows/renovate.yml): contains the GitHub Actions workflow that runs Renovate. This is where the schedule is configured.
- [`.github/renovate-bot-config.js`](/.github/renovate-bot-config.js): contains the [configuration](https://docs.renovatebot.com/self-hosted-configuration/) of the Renovate bot itself, e.g. which repositories to check. 
- [`default.json`](/default.json): contains a [shareable preset](https://docs.renovatebot.com/config-presets/), to be used by the repositories enabled in the file above. Avoids repeating the same config in all repos.
- [`renovate.json`](/renovate.json): contains the Renovate configuration for this repository. It extends `default.json`, and enables `github-actions` updates. This allows Renovate to update itself.
