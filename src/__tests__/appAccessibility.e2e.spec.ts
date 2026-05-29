import { expect, type Page, test } from '@playwright/test'

test('keeps docs iframes out of the keyboard tab order', async ({ page }) => {
  await page.goto('/')

  const focusedNames = await collectKeyboardControlNames(page, 15)

  expect(focusedNames).toContain('Reset review')
  expect(focusedNames).toContain('Biome config input')
  expect(focusedNames).toContain('Warn')
  expect(focusedNames).not.toContain('noAriaHiddenOnFocusable documentation')
})

test('opens reset confirmation as a named modal dialog', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Reset review' }).click()

  await expect(page.getByRole('dialog', { name: 'Reset review?' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Reset everything' })).toBeVisible()
})

async function collectKeyboardControlNames(page: Page, expectedNameCount: number) {
  const focusedNames: string[] = []

  while (focusedNames.length < expectedNameCount) {
    await page.keyboard.press('Tab')
    const focusedName = await getFocusedControlName(page)
    if (focusedName !== '') focusedNames.push(focusedName)
  }

  return focusedNames
}

async function getFocusedControlName(page: Page) {
  return page.evaluate(() => {
    const focusedElement = document.activeElement

    if (!focusedElement) return ''
    if (focusedElement === document.body) return ''
    if (focusedElement instanceof HTMLInputElement) {
      return focusedElement.labels?.[0]?.textContent?.trim() ?? ''
    }
    return focusedElement.getAttribute('aria-label') ?? focusedElement.textContent?.trim() ?? ''
  })
}
