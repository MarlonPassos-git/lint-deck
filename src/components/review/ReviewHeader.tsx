import { RotateCcw } from 'lucide-react'
import type { RuleCategory } from '../../domain/types'
import { CategoryFilter } from './CategoryFilter'

type ReviewHeaderProps = {
  completedRules: number
  hasSelectedCategory: boolean
  progress: number
  selectedCategories: RuleCategory[]
  totalRules: number
  onCategoryToggle: (category: RuleCategory) => void
  onResetRequest: () => void
}

export function ReviewHeader(props: ReviewHeaderProps) {
  return (
    <header className="review-header">
      <div>
        <p className="eyebrow">Biome rule deck</p>
        <h1>Rule config deck</h1>
        <p className="project-note">
          For Biome configs. Independent project, not an official Biome tool.
        </p>
      </div>
      <CategoryFilter
        selectedCategories={props.selectedCategories}
        onCategoryToggle={props.onCategoryToggle}
      />
      <ProgressActions {...props} />
    </header>
  )
}

function ProgressActions(props: ReviewHeaderProps) {
  return (
    <div className="progress-block">
      <span className="progress-value">
        {props.hasSelectedCategory ? `${props.progress}%` : 'No categories'}
      </span>
      <small className="progress-count">
        {props.completedRules}/{props.totalRules}
      </small>
      <ProgressTrack progress={props.progress} />
      <ResetButton onResetRequest={props.onResetRequest} />
    </div>
  )
}

function ProgressTrack({ progress }: { progress: number }) {
  return (
    <div className="progress-track">
      <div style={{ width: `${progress}%` }} />
    </div>
  )
}

function ResetButton({ onResetRequest }: { onResetRequest: () => void }) {
  return (
    <button
      type="button"
      className="icon-button"
      onClick={onResetRequest}
      aria-label="Reset review"
    >
      <RotateCcw size={18} />
    </button>
  )
}
