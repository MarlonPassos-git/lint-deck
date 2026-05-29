import type { BiomeRule, RuleChoice } from '../../domain/types'
import { FinishedStage, NoCategoriesStage } from './EmptyStages'
import { RuleActions } from './RuleActions'
import { RuleFrame } from './RuleFrame'

type RuleStageProps = {
  activeRule?: BiomeRule
  hasSelectedCategory: boolean
  outgoingDecision: RuleChoice['decision'] | null
  rules: BiomeRule[]
  onChoose: (decision: RuleChoice['decision']) => void
}

export function RuleStage(props: RuleStageProps) {
  if (!props.hasSelectedCategory) return <NoCategoriesStage />
  if (!props.activeRule) return <FinishedStage />

  return (
    <section className="rule-stage" aria-live="polite">
      <div className="iframe-stack">
        {props.rules.map((rule, index) => (
          <RuleFrame
            key={`${rule.group}/${rule.name}`}
            decision={index === 0 ? props.outgoingDecision : null}
            isActive={index === 0}
            rule={rule}
            stackIndex={index}
          />
        ))}
        <RuleActions outgoingDecision={props.outgoingDecision} onChoose={props.onChoose} />
      </div>
    </section>
  )
}
