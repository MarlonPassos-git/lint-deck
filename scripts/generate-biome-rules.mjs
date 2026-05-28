import { writeFileSync } from 'node:fs'
import schema from '../node_modules/@biomejs/biome/configuration_schema.json' with {
  type: 'json',
}

const ruleGroups = [
  'a11y',
  'complexity',
  'correctness',
  'nursery',
  'performance',
  'security',
  'style',
  'suspicious',
]

const toTitle = (ruleName) =>
  ruleName.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())

const extractSummary = (description) => description.split('\n')[0].trim()

const extractUrl = (description) => {
  const match = description.match(/https:\/\/biomejs\.dev\/linter\/rules\/[\w-]+/)
  return match?.[0] ?? 'https://biomejs.dev/linter/rules/'
}

const ruleEntries = ruleGroups.flatMap((group) => {
  const groupDefinition = schema.$defs[group[0].toUpperCase() + group.slice(1)]
  return Object.entries(groupDefinition.properties)
    .filter(([ruleName]) => ruleName !== 'recommended')
    .map(([ruleName, ruleDefinition]) => ({
      group,
      name: ruleName,
      title: toTitle(ruleName),
      summary: extractSummary(ruleDefinition.description),
      url: extractUrl(ruleDefinition.description),
    }))
})

const source = `import type { BiomeRule } from './types'\n\nexport const biomeRules = ${JSON.stringify(
  ruleEntries,
  null,
  2,
)} satisfies BiomeRule[]\n`

writeFileSync(new URL('../src/domain/biomeRules.ts', import.meta.url), source)
