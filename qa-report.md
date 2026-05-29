# Frontend QA Report

## Summary

Verdict: PASS WITH ISSUES.

Exploratory QA covered the main review deck, side panels, category filters, reset modal, invalid base config handling, persistence by reload, and 390px viewport behavior.

## Scope

- URL: `http://127.0.0.1:5173`
- App: Biome rule config deck
- Date: 2026-05-28 local
- Browser surfaces: Codex in-app browser, Playwright Chromium headless
- Viewports: 1280x720 desktop, 390x844 narrow/mobile

## Environment

- Dev server: already running on `127.0.0.1:5173`
- Branch/worktree: existing dirty worktree; no app code changed
- Screenshots:
  - `test-results/qa/desktop-initial.png`
  - `test-results/qa/no-filters.png`
  - `test-results/qa/mobile.png`
  - `test-results/qa/invalid-config.png`

## Validation Plan

- Load app and verify no blank shell or console errors.
- Confirm three `iframe.docs-frame` elements during active review.
- Exercise side panels, decisions, base config parsing, reset modal, filters, reload persistence, and narrow viewport layout.
- Capture screenshots for confirmed issues.

## Results By Area

- Page load: PASS. App loaded and rendered active review state.
- Core flow: PASS. Decision buttons advanced progress and generated config updated.
- Base config: PASS WITH ISSUE. Invalid config is visible, but not announced through an alert/live region.
- Filters: ISSUE. All filters off produces misleading completed-review state.
- Reset: PASS. Destructive reset opens confirmation with `Cancel` and `Reset everything`.
- Persistence: PASS. Filters and imported config survived reload.
- Console: PASS. No product errors observed; only Vite/React dev messages in headless run.
- Responsive: LOW ISSUE. Narrow viewport is awkward; project is desktop-only, so this is lower priority.

## Bugs Found

### BUG-001 - Medium - Empty category selection is reported as completed review

- URL: `http://127.0.0.1:5173`
- Viewport: 1280x720
- Steps:
  1. Load app.
  2. Uncheck JavaScript, CSS, JSON, GraphQL, HTML/ARIA, and General.
- Expected: Empty-filter state explains no categories are selected; progress should not imply real completion.
- Actual: UI shows `100%`, `0/0`, and `All rules reviewed. Generated config is ready in the right panel.`
- Evidence: `test-results/qa/no-filters.png`
- Suggested fix: Add a distinct no-categories-selected state and avoid treating zero denominator as completed progress.
- Confidence: High.

### BUG-002 - Low - Invalid config error is not exposed as an alert

- URL: `http://127.0.0.1:5173`
- Viewport: 1280x720
- Steps:
  1. Type `{ invalid json` in Base file.
  2. Click `Start from this config`.
- Expected: Visible error should be announced to assistive tech, for example `role="alert"` or an `aria-live` region.
- Actual: Error text appears visually, but `document.querySelectorAll('[role="alert"]').length` returned `0`.
- Evidence: `test-results/qa/invalid-config.png`
- Suggested fix: Render parse errors in a semantic alert/live region while preserving the existing visible styling.
- Confidence: Medium.

### BUG-003 - Low - Narrow viewport header/progress layout is clipped and hard to use

- URL: `http://127.0.0.1:5173`
- Viewport: 390x844
- Steps:
  1. Set viewport to 390x844.
  2. Load app or keep all filters unchecked.
- Expected: If narrow screens are supported, header, filters, and progress remain readable and controls stay reachable.
- Actual: Title stacks awkwardly, filters consume the top column, and the progress bar extends off the visible right edge.
- Evidence: `test-results/qa/mobile.png`
- Suggested fix: If desktop-only is strict, add a minimum-width shell or desktop-required message. If narrow screens should work, stack the progress block under filters and constrain panel widths.
- Confidence: High for visual issue; priority low because project is documented as desktop-only.

## Notes

- The Biome docs iframe appeared blank in the Codex in-app browser during one run, but the same iframe loaded correctly in Playwright Chromium and the docs URL loaded directly. Not filed as an app bug.
- Default reset state shows both side panels open. Existing persisted state can make first-load screenshots differ.

## Final Verdict

Safe to continue development. Fix BUG-001 before relying on progress/completion semantics in demos or user testing.
