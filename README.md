<div align="center">
  <img src="public/favicon.svg" alt="Lint Deck icon" width="96" height="96" />

  <h1>Lint Deck</h1>

  <p>Desktop React SPA for reviewing lint rules and building custom linter configs.</p>

  <p>
    <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-111111" />
    <img alt="Tests" src="https://img.shields.io/badge/tests-Vitest%20%2B%20Playwright-111111" />
    <img alt="Quality" src="https://img.shields.io/badge/quality-Biome-111111" />
    <img alt="License" src="https://img.shields.io/badge/license-UNLICENSED-111111" />
  </p>
</div>

## Features

- Review linter rules with a card/deck workflow.
- Import an existing `biome.json` and skip explicitly configured rules.
- Choose `Off`, `Info`, `Warn`, or `Error` for each remaining rule.
- Keep three Biome documentation iframes mounted for faster navigation.
- Filter the review deck by rule category.
- Persist imported config, decisions, filters, progress, and panel visibility in `localStorage`.
- Generate a final `biome.json` preview as decisions are made.

## Documentation

- Project guidance: [AGENTS.md](AGENTS.md)
- Contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- Biome docs: [biomejs.dev](https://biomejs.dev)

## Installation

```powershell
corepack enable
pnpm install
```

## Usage

Start the local app:

```powershell
pnpm dev -- --host 127.0.0.1
```

Open:

```text
http://127.0.0.1:5173
```

Run checks:

```powershell
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

Regenerate the Biome rule catalog after upgrading `@biomejs/biome`:

```powershell
node scripts/generate-biome-rules.mjs
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local setup, branch workflow, test expectations, and pull request guidelines.
