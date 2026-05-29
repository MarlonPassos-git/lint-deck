import { expect, test } from '@playwright/test'

test('reviews a rule and shows generated config output', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Rule config deck' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Warn' })).toBeVisible()

  await page.getByRole('button', { name: 'Warn' }).click()

  await expect(page.locator('pre')).toContainText('"warn"')
  await expect(page.getByText('1 decisions saved locally.')).toBeVisible()
})
