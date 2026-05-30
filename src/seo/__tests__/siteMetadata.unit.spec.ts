import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('site SEO metadata', () => {
  it('publishes discoverable page metadata in the app shell', () => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf8')

    expect(html).toContain('Lint Deck - Biome Rule Review and Config Builder')
    expect(html).toContain('name="description"')
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('property="og:image"')
    expect(html).toContain('name="twitter:card" content="summary_large_image"')
    expect(html).toContain('"@type": "SoftwareApplication"')
  })

  it('publishes crawler and AI-search discovery files', () => {
    const publicPath = join(process.cwd(), 'public')

    expect(readFileSync(join(publicPath, 'robots.txt'), 'utf8')).toContain(
      'Sitemap: https://rule-deck.marlonpassos.com.br/sitemap.xml',
    )
    expect(readFileSync(join(publicPath, 'sitemap.xml'), 'utf8')).toContain(
      '<loc>https://rule-deck.marlonpassos.com.br/</loc>',
    )
    expect(readFileSync(join(publicPath, 'llms.txt'), 'utf8')).toContain(
      'Desktop Biome rule review app',
    )
  })
})
