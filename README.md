# Lint Deck

<div align="center">
  <img src="public/favicon.svg" alt="Lint Deck icon" width="96" height="96" />

  <p>Desktop React SPA for reviewing lint rules and building custom linter configs.</p>

  <p>
    <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-111111" />
    <img alt="Tests" src="https://img.shields.io/badge/tests-Vitest%20%2B%20Playwright-111111" />
    <img alt="Quality" src="https://img.shields.io/badge/quality-Biome-111111" />
    <img alt="License" src="https://img.shields.io/badge/license-MIT-111111" />
  </p>
</div>

Lint Deck is a Biome rule review app for developers who want a custom `biome.json` without reading every lint rule page manually. Import an existing Biome config, skip rules already configured by your team, review the remaining rules as a deck, and export the generated config.

> Project note: Lint Deck is for Biome configs. It is an independent project, not an official Biome tool.

## Features

- Review linter rules with a card/deck workflow.
- Import an existing `biome.json` and skip explicitly configured rules.
- Choose `Off`, `Info`, `Warn`, or `Error` for each remaining rule.
- Keep three Biome documentation iframes mounted for faster navigation.
- Filter the review deck by rule category.
- Persist imported config, decisions, filters, progress, and panel visibility in `localStorage`.
- Generate a final `biome.json` preview as decisions are made.

## Demo

- Live app: [rule-deck.marlonpassos.com.br](https://rule-deck.marlonpassos.com.br/)
- Source: [github.com/MarlonPassos-git/lint-deck](https://github.com/MarlonPassos-git/lint-deck)

## Getting Started

Open the public app and use the review flow:

1. Paste an existing `biome.json` in the base file panel.
2. Start the review so explicitly configured rules are skipped.
3. Choose `Off`, `Info`, `Warn`, or `Error` for each remaining rule.
4. Copy the generated `biome.json` from the output panel.

To run the project locally, follow the [Contributing guide](CONTRIBUTING.md#getting-started).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local setup, branch workflow, test expectations, and pull request guidelines.
