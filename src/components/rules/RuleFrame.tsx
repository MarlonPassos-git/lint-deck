import type { BiomeRule, RuleChoice } from '../../domain/types'

type RuleFrameProps = {
  decision: RuleChoice['decision'] | null
  isActive: boolean
  rule: BiomeRule
  stackIndex: number
}

export function RuleFrame({ decision, isActive, rule, stackIndex }: RuleFrameProps) {
  return (
    <article
      className={getRuleFrameClassName(isActive, decision, stackIndex)}
      data-decision-label={decision ? getDecisionLabel(decision) : undefined}
    >
      <div className="rule-meta">
        <div>
          <span>{rule.group}</span>
          <strong>{rule.name}</strong>
        </div>
        <p>{rule.summary}</p>
      </div>
      <iframe
        className="docs-frame"
        title={`${rule.name} documentation`}
        src={rule.url}
        tabIndex={-1}
        loading="eager"
      />
    </article>
  )
}

function getRuleFrameClassName(
  isActive: boolean,
  decision: RuleChoice['decision'] | null,
  stackIndex: number,
) {
  return [
    'rule-frame',
    isActive ? 'is-active' : '',
    stackIndex === 1 ? 'is-queued-next' : '',
    stackIndex === 2 ? 'is-queued-after' : '',
    decision ? 'is-exiting' : '',
    decision ? `is-exiting-${decision}` : '',
  ]
    .filter(Boolean)
    .join(' ')
}

function getDecisionLabel(decision: RuleChoice['decision']) {
  return decision.toUpperCase()
}
