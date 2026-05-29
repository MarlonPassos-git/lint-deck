import { EyeOff } from 'lucide-react'
import type { RuleChoice } from '../../domain/types'

type OutputPanelProps = {
  choices: RuleChoice[]
  onHide: () => void
  outputText: string
}

export function OutputPanel(props: OutputPanelProps) {
  return (
    <div className="output-panel">
      <div className="panel-title-row">
        <h2>Generated biome.json</h2>
        <button
          type="button"
          className="small-icon-button"
          onClick={props.onHide}
          aria-label="Hide output"
        >
          <EyeOff size={17} />
        </button>
      </div>
      <p>{props.choices.length} decisions saved locally.</p>
      <pre>{props.outputText}</pre>
    </div>
  )
}
