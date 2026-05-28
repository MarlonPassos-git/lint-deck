import type { BiomeRule, RuleCategory } from './types'

export const ruleCategories = [
  'JavaScript',
  'CSS',
  'JSON',
  'GraphQL',
  'HTML/ARIA',
  'General',
] satisfies RuleCategory[]

export function getRuleCategories(rule: BiomeRule): RuleCategory[] {
  if (rule.group === 'a11y') return ['HTML/ARIA']
  if (hasToken(rule, ['graphql'])) return ['GraphQL']
  if (hasToken(rule, ['json'])) return ['JSON']
  if (isCssRule(rule)) return ['CSS']
  if (isGeneralRule(rule)) return ['General']
  return ['JavaScript']
}

export function filterRulesByCategories(rules: BiomeRule[], selectedCategories: RuleCategory[]) {
  if (selectedCategories.length === 0) return []
  const selectedCategorySet = new Set(selectedCategories)
  return rules.filter((rule) =>
    getRuleCategories(rule).some((category) => selectedCategorySet.has(category)),
  )
}

function isCssRule(rule: BiomeRule) {
  return hasToken(rule, [
    'css',
    'style',
    'styles',
    'class',
    'classes',
    'font',
    'gradient',
    'keyframe',
    'media',
    'selector',
  ])
}

function isGeneralRule(rule: BiomeRule) {
  return hasToken(rule, ['filename', 'file', 'folder', 'dependency', 'dependencies'])
}

function hasToken(rule: BiomeRule, tokens: string[]) {
  const haystack = `${rule.name} ${rule.summary}`.toLowerCase()
  return tokens.some((token) => haystack.includes(token))
}
