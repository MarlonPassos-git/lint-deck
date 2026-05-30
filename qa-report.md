# Frontend QA Report

## Summary
- **Overall verdict:** PASS WITH ISSUES
- **Target:** Biome rule deck SPA
- **Mode:** page + core flow
- **Date:** 2026-05-28
- **Tested by:** Codex + frontend-qa-debugger skill
- **Browser tooling:** Chrome DevTools MCP

## Scope
Tested local Vite app load, rule decision flow, generated config update, localStorage persistence, side panel visibility, category filters, reset confirmation modal, embedded docs iframe mounting, console, network, and responsive layout.

Not tested: full Playwright E2E suite, production build, exhaustive keyboard traversal, full WCAG audit, performance trace.

## Environment
- URL: `http://127.0.0.1:5173/`
- Branch: `master`
- Commit: `a30a212`
- Browser: Chrome via Chrome DevTools MCP
- Viewports: desktop `1440x900`, tablet `768x1024`, mobile `390x844`
- Test account: none
- Build/dev command: existing Vite dev server on `127.0.0.1:5173`

## Validation plan
1. Load app and verify core workbench renders without blank screen.
2. Verify three `iframe.docs-frame` elements stay mounted during active review.
3. Make a `Warn` decision and verify progress, generated `biome.json`, and persisted choice.
4. Hide side panels, reload, and verify hidden panel state persists.
5. Toggle category filter, verify progress denominator and persisted filter state.
6. Open reset flow and verify confirmation modal appears before destructive reset.
7. Check console, network, and responsive overflow.

## Results by area

### Page load
- Status: PASS
- Notes: App rendered `Lint Forge`, filters, review card, decision buttons, and generated config.

### Core flow
- Status: PASS
- Notes: Clicking `Warn` on `a11y/noAccessKey` advanced to next rule, changed progress to `1/502`, persisted choice, and generated `"noAccessKey": "warn"` in output.

### Forms
- Status: PASS
- Notes: Base config text area rendered and retained default config. Full config parse variants were not exhaustively tested.

### Navigation
- Status: PASS
- Notes: Side panel controls worked. Reset button opened a modal with `Cancel` and `Reset everything`; cancellation left state intact.

### Console
- Errors: none from app in isolated context.
- Warnings/issues: Chrome reported `A form field element should have an id or name attribute (count: 21)`. Evidence points to embedded Biome docs iframe content, not app-owned controls.

### Network
- Failed requests: none.
- Suspicious patterns: none. Biome docs iframe URLs redirect from slug without trailing slash to trailing slash with `301`, then load successfully.

### Responsive layout
- Mobile (390x844): PASS. No horizontal overflow detected; mounted frame count stayed `3`.
- Tablet (768x1024): PASS. No horizontal overflow detected; mounted frame count stayed `3`.
- Desktop (1440x900): PASS. No horizontal overflow detected; mounted frame count stayed `3`.

### Accessibility basics
- Notes: App controls had usable accessible names in the snapshot (`Reset review`, filters, panel toggles, decision buttons). Embedded Biome docs iframe produced the form-field issue noted above.

### Performance notes
- Notes: No performance trace run. Page loaded quickly in local dev mode; three iframe docs pages create expected external network load.

## Bugs found

No app-owned bugs confirmed.

### NOTE-001: Embedded docs iframe reports form-field id/name issue
- **Severity:** Low
- **Status:** External / not app-owned
- **URL:** `http://127.0.0.1:5173/`
- **Viewport:** observed after isolated load and responsive checks
- **Steps to reproduce:**
  1. Open `http://127.0.0.1:5173/` in Chrome DevTools.
  2. Wait for embedded Biome docs iframes to load.
  3. Inspect console issues.
- **Expected:** No app-owned accessibility issues.
- **Actual:** Browser issue: `A form field element should have an id or name attribute (count: 21)`.
- **Evidence:**
  - Console: `A form field element should have an id or name attribute (count: 21)`
  - Screenshot: `artifacts/qa/desktop-1440x900.png`
- **Suspected cause:** Cross-origin Biome docs iframe contains form fields without `id`/`name`.
- **Suggested fix:** No app fix unless project chooses to suppress or replace external iframe content; current project notes say not to mutate the cross-origin iframe.
- **Confidence:** Medium

## Screenshots / evidence
- `artifacts/qa/desktop-1440x900.png` - desktop baseline.
- `artifacts/qa/tablet-768x1024.png` - tablet responsive state.
- `artifacts/qa/mobile-390x844.png` - mobile responsive state.

## Final verdict
Safe to ship from this browser QA pass. Core flow, persistence, reset confirmation, iframe count, network, and responsive overflow checks passed. Only observed issue is from embedded third-party Biome docs iframe content.

## Recommended next actions
1. Run `pnpm test`, `pnpm lint`, `pnpm build`, and `pnpm test:e2e` before release if this QA is gating a change.
2. Track the iframe console issue only if it affects user workflows or release criteria.
