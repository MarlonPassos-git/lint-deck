import type { BiomeConfig, BiomeRule, RuleChoice } from './types'

const BIOME_SCHEMA_URL = 'https://biomejs.dev/schemas/2.4.16/schema.json'

export function parseBiomeConfig(inputText: string): BiomeConfig {
  if (inputText.trim() === '') return {}

  try {
    return JSON.parse(inputText) as BiomeConfig
  } catch {
    throw new Error(`Invalid biome config: "${inputText.slice(0, 80)}"; expected JSON object`)
  }
}

export function extractConfiguredRuleKeys(config: BiomeConfig): Set<string> {
  const groups = config.linter?.rules ?? {}
  const configuredKeys = Object.entries(groups).flatMap(([group, rules]) =>
    extractGroupRuleKeys(group, rules),
  )
  return new Set(configuredKeys)
}

export function buildBiomeConfig(config: BiomeConfig, choices: RuleChoice[]) {
  const nextConfig = structuredClone(config)
  nextConfig.$schema =
    typeof nextConfig.$schema === 'string' ? nextConfig.$schema : BIOME_SCHEMA_URL
  nextConfig.linter = { ...(nextConfig.linter ?? {}) }
  nextConfig.linter.rules = { ...(nextConfig.linter.rules ?? {}) }

  for (const choice of choices) {
    if (choice.decision === 'ignored') continue
    const [group, ruleName] = splitRuleKey(choice.ruleKey)
    const groupRules = getGroupRules(nextConfig, group)
    groupRules[ruleName] = choice.decision
  }

  return nextConfig
}

export function formatBiomeConfig(config: BiomeConfig): string {
  return `${JSON.stringify(config, null, 2)}\n`
}

export function getMissingRules(rules: BiomeRule[], config: BiomeConfig) {
  const configuredKeys = extractConfiguredRuleKeys(config)
  return rules.filter((rule) => !configuredKeys.has(toRuleKey(rule)))
}

export function getReviewableRules(rules: BiomeRule[], config: BiomeConfig, choices: RuleChoice[]) {
  const configuredKeys = extractConfiguredRuleKeys(config)
  const decidedKeys = new Set(choices.map((choice) => choice.ruleKey))
  return rules.filter((rule) => {
    const ruleKey = toRuleKey(rule)
    return !configuredKeys.has(ruleKey) && !decidedKeys.has(ruleKey)
  })
}

export function splitRuleKey(ruleKey: string) {
  const [group, ruleName] = ruleKey.split('/')
  if (!group || !ruleName) {
    throw new Error(`Invalid rule key: "${ruleKey}"; expected "group/ruleName"`)
  }
  return [group, ruleName] as const
}

export function toRuleKey(rule: Pick<BiomeRule, 'group' | 'name'>) {
  return `${rule.group}/${rule.name}`
}

function extractGroupRuleKeys(group: string, rules: unknown) {
  if (!isRecord(rules)) return []
  return Object.keys(rules)
    .filter((ruleName) => ruleName !== 'recommended')
    .map((ruleName) => `${group}/${ruleName}`)
}

function getGroupRules(config: BiomeConfig, group: string) {
  const rules = config.linter?.rules
  const existingGroup = rules?.[group]
  if (isRecord(existingGroup)) return existingGroup

  const nextGroup: Record<string, unknown> = {}
  if (rules) rules[group] = nextGroup
  return nextGroup
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
