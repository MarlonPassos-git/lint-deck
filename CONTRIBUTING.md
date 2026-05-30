<div align="center">
  <img src="public/favicon.svg" alt="Biome Rule Deck icon" width="72" height="72" />

  <h1>Contributing to Biome Rule Deck</h1>

  <p>Keep the review workflow fast, predictable, and easy to validate.</p>
</div>

## Getting Started

### Runtime

- Node: `>=24.0.0`
- pnpm: `>=10.0.0`
- Package manager: pinned by `packageManager` in `package.json`

### Installation

```powershell
corepack enable
pnpm install
```

## Development

Start the local app:

```powershell
pnpm dev -- --host 127.0.0.1
```

Open:

```text
http://127.0.0.1:5173
```

Run local development checks:

```powershell
pnpm lint
pnpm lint:fix
pnpm test
pnpm type-check
```

## Tests

- Use `*.unit.spec.ts` for unit tests.
- Use `*.integration.spec.ts` for integration tests.
- Use `*.e2e.spec.ts` for end-to-end tests.
- Prefer colocated `__tests__/` folders beside the code under test.
- Keep tests fast, independent, repeatable, self-validating, and timely.
- Mock external I/O with named fake classes, not inline stubs.

Run the full local verification set before opening a pull request:

```powershell
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

## Biome Rule Catalog

The rule catalog is generated from the installed `@biomejs/biome` schema.

```powershell
node scripts/generate-biome-rules.mjs
```

Run the generator after changing the Biome package version, then review the generated `src/domain/biomeRules.ts` diff.

## Pull Requests

- Keep changes focused on one concern.
- Update tests and docs with behavior changes.
- Include screenshots or recordings for visible UI changes.
- Confirm destructive actions still require a modal confirmation.
- Do not crop or translate the cross-origin Biome documentation iframe.

## Commit Style

Use Conventional Commits:

```text
feat(scope): add new behavior
fix(scope): correct broken behavior
docs(scope): update documentation
```
