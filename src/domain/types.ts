export type RuleSeverity = 'error' | 'info' | 'warn'

export type RuleDecision = RuleSeverity | 'off'

export type BiomeRule = {
  group: string
  name: string
  title: string
  summary: string
  url: string
}

export type RuleCategory = 'JavaScript' | 'CSS' | 'JSON' | 'GraphQL' | 'HTML/ARIA' | 'General'

export type RuleChoice = {
  ruleKey: string
  decision: RuleDecision
}

export type BiomeConfig = {
  $schema?: string
  linter?: {
    rules?: Record<string, unknown>
  }
  [key: string]: unknown
}

export type ReviewSnapshot = {
  baseConfigText: string
  choices: RuleChoice[]
  currentIndex: number
  panels?: {
    inputVisible: boolean
    outputVisible: boolean
  }
  filters?: {
    selectedCategories: RuleCategory[]
  }
}
