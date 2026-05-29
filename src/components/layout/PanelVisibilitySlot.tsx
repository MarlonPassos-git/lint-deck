import { Eye } from 'lucide-react'
import type { ReactNode } from 'react'

type PanelVisibilitySlotProps = {
  children: ReactNode
  isVisible: boolean
  onShow: () => void
  revealLabel: string
  side: 'input' | 'output'
}

export function PanelVisibilitySlot(props: PanelVisibilitySlotProps) {
  return (
    <aside className={getPanelVisibilitySlotClassName(props.side, props.isVisible)}>
      <div className="panel-visibility-content" hidden={!props.isVisible}>
        {props.children}
      </div>
      <button
        type="button"
        className="show-panel-button"
        hidden={props.isVisible}
        onClick={props.onShow}
      >
        <Eye size={18} /> {props.revealLabel}
      </button>
    </aside>
  )
}

function getPanelVisibilitySlotClassName(side: 'input' | 'output', isVisible: boolean) {
  return [
    'panel-visibility-slot',
    `is-${side}-slot`,
    isVisible ? 'is-panel-visible' : 'is-panel-hidden',
  ]
    .filter(Boolean)
    .join(' ')
}
