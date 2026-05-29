import type { ReviewSnapshot, RuleChoice } from '../../domain/types'
import { ImportPanel } from '../panels/ImportPanel'
import { OutputPanel } from '../panels/OutputPanel'
import { RuleStage } from '../rules/RuleStage'
import { PanelVisibilitySlot } from './PanelVisibilitySlot'

type ReviewWorkspaceProps = {
  controller: {
    choices: RuleChoice[]
    errorText: string
    hasSelectedCategory: boolean
    importText: string
    isInputVisible: boolean
    isOutputVisible: boolean
    outputText: string
    outgoingDecision: RuleChoice['decision'] | null
    activeRule?: Parameters<typeof RuleStage>[0]['activeRule']
    visibleRules: Parameters<typeof RuleStage>[0]['rules']
    chooseRule: Parameters<typeof RuleStage>[0]['onChoose']
    setImportText: (value: string) => void
    startReview: () => void
    updatePanelVisibility: (patch: Partial<NonNullable<ReviewSnapshot['panels']>>) => void
  }
}

export function ReviewWorkspace({ controller }: ReviewWorkspaceProps) {
  return (
    <section
      className={getWorkspaceClassName(controller.isInputVisible, controller.isOutputVisible)}
      aria-label="Rule review workspace"
    >
      <InputSlot controller={controller} />
      <RuleStage
        activeRule={controller.activeRule}
        hasSelectedCategory={controller.hasSelectedCategory}
        outgoingDecision={controller.outgoingDecision}
        rules={controller.visibleRules}
        onChoose={controller.chooseRule}
      />
      <OutputSlot controller={controller} />
    </section>
  )
}

function InputSlot({ controller }: ReviewWorkspaceProps) {
  return (
    <PanelVisibilitySlot
      isVisible={controller.isInputVisible}
      revealLabel="Show base file"
      side="input"
      onShow={() => controller.updatePanelVisibility({ inputVisible: true })}
    >
      <ImportPanel
        errorText={controller.errorText}
        importText={controller.importText}
        onChange={controller.setImportText}
        onHide={() => controller.updatePanelVisibility({ inputVisible: false })}
        onStart={controller.startReview}
      />
    </PanelVisibilitySlot>
  )
}

function OutputSlot({ controller }: ReviewWorkspaceProps) {
  return (
    <PanelVisibilitySlot
      isVisible={controller.isOutputVisible}
      revealLabel="Show biome.json"
      side="output"
      onShow={() => controller.updatePanelVisibility({ outputVisible: true })}
    >
      <OutputPanel
        choices={controller.choices}
        outputText={controller.outputText}
        onHide={() => controller.updatePanelVisibility({ outputVisible: false })}
      />
    </PanelVisibilitySlot>
  )
}

function getWorkspaceClassName(isInputVisible: boolean, isOutputVisible: boolean) {
  return [
    'workspace',
    isInputVisible ? '' : 'is-input-hidden',
    isOutputVisible ? '' : 'is-output-hidden',
  ]
    .filter(Boolean)
    .join(' ')
}
