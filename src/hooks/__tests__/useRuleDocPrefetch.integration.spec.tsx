import { render, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useRuleDocPrefetch } from '../useRuleDocPrefetch'

describe('useRuleDocPrefetch', () => {
  it('keeps one preconnect and document prefetch links for current rules', async () => {
    const { rerender } = render(<PrefetchProbe urls={['https://biomejs.dev/one']} />)

    await waitFor(() => expect(getPrefetchLinks()).toHaveLength(2))

    rerender(<PrefetchProbe urls={['https://biomejs.dev/two', 'https://biomejs.dev/three']} />)

    await waitFor(() =>
      expect(getDocumentPrefetchHrefs()).toEqual([
        'https://biomejs.dev/two',
        'https://biomejs.dev/three',
      ]),
    )
    expect(getPreconnectLink()).toHaveAttribute('href', 'https://biomejs.dev')
  })
})

function PrefetchProbe({ urls }: { urls: string[] }) {
  useRuleDocPrefetch(urls)
  return null
}

function getPrefetchLinks() {
  return Array.from(document.querySelectorAll('link[data-biome-rule-prefetch="true"]'))
}

function getPreconnectLink() {
  return document.querySelector('link[data-biome-rule-prefetch="true"][rel="preconnect"]')
}

function getDocumentPrefetchHrefs() {
  return Array.from(
    document.querySelectorAll<HTMLLinkElement>(
      'link[data-biome-rule-prefetch="true"][rel="prefetch"]',
    ),
    (link) => link.href,
  )
}
