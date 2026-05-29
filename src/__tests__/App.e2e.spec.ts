import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

type StabilityMetrics = {
  cls: number
  domContentLoaded: number
  iframeCount: number
  loadEnd: number
  overflowX: number
}

type DesignMetrics = {
  canvasBackground: string
  checkboxAppearance: string
  checkboxBackground: string
  checkboxBorderColor: string
  checkboxBorderRadius: string
  checkboxCursor: string
  checkboxHeight: string
  decisionBarShadow: string
  errorBackground: string
  headerFontSize: string
  panelShadow: string
  ruleCardRadius: string
  ruleCardShadow: string
}

type HoverMetrics = {
  chipRestingShadow: string
  chipHoverShadow: string
  focusedChipShadow: string
  focusedShadow: string
  focusedTransform: string
  restingShadow: string
  hoverShadow: string
  hoverTransform: string
}

const expectedInitialTabOrder = [
  'JavaScript',
  'CSS',
  'JSON',
  'GraphQL',
  'HTML/ARIA',
  'General',
  'Reset review',
  'Hide base file',
  'Biome config input',
  'Start from this config',
  'Ignore',
  'Warn',
  'Error',
  'Hide output',
]

declare global {
  interface Window {
    __layoutShiftValues: number[]
  }
}

async function installLayoutShiftTracker(page: Page) {
  await page.addInitScript(() => {
    window.__layoutShiftValues = []
    new PerformanceObserver((observedEntries) => {
      for (const entry of observedEntries.getEntries()) {
        const layoutShift = entry as PerformanceEntry & {
          hadRecentInput?: boolean
          value: number
        }
        if (!layoutShift.hadRecentInput) {
          window.__layoutShiftValues.push(layoutShift.value)
        }
      }
    }).observe({ type: 'layout-shift', buffered: true })
  })
}

async function getStabilityMetrics(page: Page): Promise<StabilityMetrics> {
  return page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

    return {
      cls: window.__layoutShiftValues.reduce((sum, value) => sum + value, 0),
      domContentLoaded: navigation.domContentLoadedEventEnd,
      iframeCount: document.querySelectorAll('iframe.docs-frame').length,
      loadEnd: navigation.loadEventEnd,
      overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    }
  })
}

async function getDesignMetrics(page: Page): Promise<DesignMetrics> {
  return page.evaluate(() => {
    const rootStyle = getComputedStyle(document.documentElement)
    const checkboxStyle = getComputedStyle(
      document.querySelector('.category-filter input') as Element,
    )
    const decisionBarStyle = getComputedStyle(document.querySelector('.decision-bar') as Element)
    const errorButtonStyle = getComputedStyle(document.querySelector('.error-button') as Element)
    const headerStyle = getComputedStyle(document.querySelector('.review-header h1') as Element)
    const panelStyle = getComputedStyle(document.querySelector('.control-panel') as Element)
    const ruleCardStyle = getComputedStyle(document.querySelector('.rule-frame') as Element)

    return {
      canvasBackground: rootStyle.backgroundColor,
      checkboxAppearance: checkboxStyle.appearance,
      checkboxBackground: checkboxStyle.backgroundColor,
      checkboxBorderColor: checkboxStyle.borderColor,
      checkboxBorderRadius: checkboxStyle.borderRadius,
      checkboxHeight: checkboxStyle.height,
      decisionBarShadow: decisionBarStyle.boxShadow,
      errorBackground: errorButtonStyle.backgroundColor,
      headerFontSize: headerStyle.fontSize,
      panelShadow: panelStyle.boxShadow,
      ruleCardRadius: ruleCardStyle.borderRadius,
      checkboxCursor: checkboxStyle.cursor,
      ruleCardShadow: ruleCardStyle.boxShadow,
    }
  })
}

async function getHoverMetrics(page: Page): Promise<HoverMetrics> {
  const warnButton = page.getByRole('button', { name: 'Warn' })
  const chip = page.locator('.category-filter label').first()
  const restingShadow = await warnButton.evaluate((button) => getComputedStyle(button).boxShadow)
  const chipRestingShadow = await chip.evaluate((label) => getComputedStyle(label).boxShadow)

  await warnButton.hover()
  await page.waitForTimeout(250)

  const hoverState = await warnButton.evaluate((button) => {
    const buttonStyle = getComputedStyle(button)

    return {
      hoverShadow: buttonStyle.boxShadow,
      hoverTransform: buttonStyle.transform,
    }
  })

  await chip.hover()
  await page.waitForTimeout(250)

  const chipHoverShadow = await chip.evaluate((label) => getComputedStyle(label).boxShadow)

  await page.reload()
  await page.keyboard.press('Tab')
  await page.waitForTimeout(250)
  const focusedChipShadow = await chip.evaluate((label) => getComputedStyle(label).boxShadow)

  for (let tabCount = 0; tabCount < 20; tabCount += 1) {
    const focusedLabel = await page.evaluate(() =>
      document.activeElement?.getAttribute('aria-label'),
    )
    if (focusedLabel === 'Reset review') break
    await page.keyboard.press('Tab')
  }
  await page.waitForTimeout(250)

  const resetButton = page.getByRole('button', { name: 'Reset review' })
  const focusedShadow = await resetButton.evaluate((button) => getComputedStyle(button).boxShadow)
  const focusedTransform = await resetButton.evaluate(
    (button) => getComputedStyle(button).transform,
  )

  return {
    chipHoverShadow,
    chipRestingShadow,
    focusedChipShadow,
    focusedShadow,
    focusedTransform,
    restingShadow,
    ...hoverState,
  }
}

async function collectKeyboardTabOrder(page: Page, tabPresses: number) {
  const focusedNames: string[] = []

  for (let tabIndex = 0; tabIndex < tabPresses; tabIndex += 1) {
    await page.keyboard.press('Tab')
    focusedNames.push(await getFocusedControlName(page))
  }

  return focusedNames
}

async function getFocusedControlName(page: Page) {
  return page.evaluate(() => {
    const focusedElement = document.activeElement

    if (!focusedElement) return ''
    if (focusedElement instanceof HTMLInputElement) {
      return focusedElement.labels?.[0]?.textContent?.trim() ?? ''
    }
    return focusedElement.getAttribute('aria-label') ?? focusedElement.textContent?.trim() ?? ''
  })
}

test('reviews a rule and shows generated config output', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Rule config deck' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Warn' })).toBeVisible()

  await page.getByRole('button', { name: 'Warn' }).click()

  await expect(page.locator('pre')).toContainText('"warn"')
  await expect(page.getByText('1 decisions saved locally.')).toBeVisible()
})

test('keeps load and interactive review layout stable', async ({ page }) => {
  await installLayoutShiftTracker(page)
  await page.goto('/', { waitUntil: 'load' })
  await page.waitForTimeout(400)

  await page.getByRole('button', { name: 'Warn' }).click()
  await page.getByRole('checkbox', { name: 'JavaScript' }).click()
  await page.getByRole('button', { name: 'Hide output' }).click()
  await page.getByRole('button', { name: 'Reset review' }).click()

  await expect(page.getByRole('dialog', { name: 'Reset review?' })).toBeVisible()

  const metrics = await getStabilityMetrics(page)
  expect(metrics.cls).toBe(0)
  expect(metrics.iframeCount).toBe(3)
  expect(metrics.overflowX).toBe(0)
  expect(metrics.domContentLoaded).toBeLessThan(1000)
  expect(metrics.loadEnd).toBeLessThan(2000)
})

test('matches core neo-brutalist design tokens', async ({ page }) => {
  await page.goto('/')

  const metrics = await getDesignMetrics(page)
  expect(metrics.canvasBackground).toBe('rgb(244, 239, 227)')
  expect(metrics.checkboxAppearance).toBe('none')
  expect(metrics.checkboxBackground).toBe('rgb(211, 59, 83)')
  expect(metrics.checkboxBorderColor).toBe('rgb(211, 59, 83)')
  expect(metrics.checkboxBorderRadius).toBe('0px')
  expect(metrics.checkboxCursor).toBe('pointer')
  expect(metrics.checkboxHeight).toBe('12px')
  expect(metrics.errorBackground).toBe('rgb(232, 93, 93)')
  expect(metrics.headerFontSize).toBe('34px')
  expect(metrics.ruleCardRadius).toBe('0px')
  expect(metrics.panelShadow).toBe('none')
  expect(metrics.ruleCardShadow).toBe('none')
  expect(metrics.decisionBarShadow).toBe('none')
})

test('keeps control shadows visible and moving on hover', async ({ page }) => {
  await page.goto('/')

  const metrics = await getHoverMetrics(page)
  expect(metrics.restingShadow).toBe('none')
  expect(metrics.chipRestingShadow).toBe('none')
  expect(metrics.hoverShadow).toContain('rgb(21, 21, 21) 2.25px 2.25px 0px')
  expect(metrics.chipHoverShadow).toContain('rgb(21, 21, 21) 2.25px 2.25px 0px')
  expect(metrics.hoverTransform).toBe('matrix(1, 0, 0, 1, -3, -3)')
  expect(metrics.focusedShadow).toContain('rgb(21, 21, 21) 2.25px 2.25px 0px')
  expect(metrics.focusedTransform).toBe('matrix(1, 0, 0, 1, -3, -3)')
  expect(metrics.focusedChipShadow).toContain('rgb(21, 21, 21) 2.25px 2.25px 0px')
})

test('keeps docs iframes out of the keyboard tab order', async ({ page }) => {
  await page.goto('/')

  const tabOrder = await collectKeyboardTabOrder(page, expectedInitialTabOrder.length)

  expect(tabOrder).toEqual(expectedInitialTabOrder)
  expect(tabOrder).not.toContain('No Aria Hidden On Focusable documentation')
})
