import { useEffect } from 'react'

const ruleDocPrefetchOrigin = 'https://biomejs.dev'

export function useRuleDocPrefetch(ruleUrls: string[]) {
  useEffect(() => {
    removeRuleDocPrefetchLinks()
    const links = [createRuleDocPreconnectLink(), ...ruleUrls.map(createRuleDocPrefetchLink)]
    for (const link of links) document.head.append(link)
    return removeRuleDocPrefetchLinks
  }, [ruleUrls])
}

function removeRuleDocPrefetchLinks() {
  const selector = 'link[data-biome-rule-prefetch="true"]'
  for (const link of document.querySelectorAll(selector)) link.remove()
}

function createRuleDocPreconnectLink() {
  const link = document.createElement('link')
  link.rel = 'preconnect'
  link.href = ruleDocPrefetchOrigin
  link.crossOrigin = 'anonymous'
  link.dataset.biomeRulePrefetch = 'true'
  return link
}

function createRuleDocPrefetchLink(ruleUrl: string) {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.as = 'document'
  link.href = ruleUrl
  link.dataset.biomeRulePrefetch = 'true'
  return link
}
