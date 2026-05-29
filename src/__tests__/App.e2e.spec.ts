import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

type StabilityMetrics = {
  cls: number
  domContentLoaded: number
  iframeCount: number
  loadEnd: number
  overflowX: number
}

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
