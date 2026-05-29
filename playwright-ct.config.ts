import { defineConfig, devices } from '@playwright/experimental-ct-react'

export default defineConfig({
  testDir: './src',
  testMatch: '**/*.ct.spec.tsx',
  fullyParallel: true,
  reporter: 'list',
  use: {
    ctPort: 3100,
    trace: 'on-first-retry',
    viewport: devices['Desktop Chrome'].viewport,
  },
})
