import { AlertTriangle, Eye, EyeOff, FileText, RotateCcw, ShieldCheck, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import './App.css'
import { biomeRules } from './domain/biomeRules'
import {
  buildBiomeConfig,
  formatBiomeConfig,
  getReviewableRules,
  parseBiomeConfig,
} from './domain/configuration'
import {
  appendRuleChoice,
  getCompletedRuleCount,
  getProgressPercent,
  getVisibleRuleWindow,
} from './domain/reviewState'
import { filterRulesByCategories, ruleCategories } from './domain/ruleCategories'
import type {
  BiomeConfig,
  BiomeRule,
  ReviewSnapshot,
  RuleCategory,
  RuleChoice,
} from './domain/types'
import {
  clearReviewSnapshot,
  loadReviewSnapshot,
  saveReviewSnapshot,
} from './storage/localReviewStore'

const defaultInput = '{\n  "$schema": "https://biomejs.dev/schemas/2.4.16/schema.json"\n}\n'

function App() {
  const [snapshot, setSnapshot] = useState(() => loadInitialSnapshot())
  const [importText, setImportText] = useState(snapshot.baseConfigText)
  const [errorText, setErrorText] = useState('')
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false)
  const isInputVisible = snapshot.panels?.inputVisible ?? true
  const isOutputVisible = snapshot.panels?.outputVisible ?? true
  const selectedCategories = useMemo(
    () => snapshot.filters?.selectedCategories ?? [...ruleCategories],
    [snapshot.filters],
  )
  const baseConfig = useMemo(() => safeParseConfig(snapshot.baseConfigText), [snapshot])
  const filteredRules = useMemo(
    () => filterRulesByCategories(biomeRules, selectedCategories),
    [selectedCategories],
  )
  const pendingRules = useMemo(
    () => getReviewableRules(filteredRules, baseConfig, snapshot.choices),
    [baseConfig, filteredRules, snapshot.choices],
  )
  const activeRule = pendingRules[0]
  const outputText = formatBiomeConfig(buildBiomeConfig(baseConfig, snapshot.choices))
  const completedRules = getCompletedRuleCount(filteredRules.length, pendingRules.length, 0)
  const progress = getProgressPercent(filteredRules.length, completedRules)

  const startReview = () => {
    try {
      const config = parseBiomeConfig(importText)
      storeSnapshot({
        baseConfigText: formatBiomeConfig(config),
        choices: [],
        currentIndex: 0,
        panels: snapshot.panels,
        filters: snapshot.filters,
      })
      setErrorText('')
    } catch (error) {
      setErrorText(error instanceof Error ? error.message : 'Invalid config')
    }
  }

  const chooseRule = (decision: RuleChoice['decision']) => {
    if (!activeRule) return
    playClickTone(decision)
    storeSnapshot({
      ...snapshot,
      choices: appendRuleChoice(snapshot.choices, activeRule, decision),
      currentIndex: snapshot.currentIndex + 1,
    })
  }

  const resetReview = () => {
    clearReviewSnapshot(window.localStorage)
    setImportText(defaultInput)
    setErrorText('')
    setIsResetDialogOpen(false)
    setSnapshot(createInitialSnapshot())
  }

  const updatePanelVisibility = (
    visibilityPatch: Partial<NonNullable<ReviewSnapshot['panels']>>,
  ) => {
    storeSnapshot({
      ...snapshot,
      panels: {
        inputVisible: isInputVisible,
        outputVisible: isOutputVisible,
        ...visibilityPatch,
      },
    })
  }

  const toggleCategory = (category: RuleCategory) => {
    storeSnapshot({
      ...snapshot,
      currentIndex: 0,
      filters: {
        selectedCategories: getToggledCategories(selectedCategories, category),
      },
    })
  }

  const storeSnapshot = (nextSnapshot: ReviewSnapshot) => {
    saveReviewSnapshot(window.localStorage, nextSnapshot)
    setImportText(nextSnapshot.baseConfigText)
    setSnapshot(nextSnapshot)
  }

  return (
    <main className="app-shell">
      <ReviewHeader
        completedRules={completedRules}
        progress={progress}
        selectedCategories={selectedCategories}
        totalRules={filteredRules.length}
        onCategoryToggle={toggleCategory}
        onResetRequest={() => setIsResetDialogOpen(true)}
      />
      <section
        className={getWorkspaceClassName(isInputVisible, isOutputVisible)}
        aria-label="Rule review workspace"
      >
        {isInputVisible ? (
          <ImportPanel
            errorText={errorText}
            importText={importText}
            onChange={setImportText}
            onHide={() => updatePanelVisibility({ inputVisible: false })}
            onStart={startReview}
          />
        ) : (
          <button
            type="button"
            className="show-panel-button"
            onClick={() => updatePanelVisibility({ inputVisible: true })}
          >
            <Eye size={18} /> Show base file
          </button>
        )}
        <RuleStage
          activeRule={activeRule}
          rules={getVisibleRuleWindow(pendingRules, 0)}
          onChoose={chooseRule}
        />
        {isOutputVisible ? (
          <OutputPanel
            outputText={outputText}
            choices={snapshot.choices}
            onHide={() => updatePanelVisibility({ outputVisible: false })}
          />
        ) : (
          <button
            type="button"
            className="show-panel-button"
            onClick={() => updatePanelVisibility({ outputVisible: true })}
          >
            <Eye size={18} /> Show biome.json
          </button>
        )}
      </section>
      {isResetDialogOpen ? (
        <ResetDialog onCancel={() => setIsResetDialogOpen(false)} onConfirm={resetReview} />
      ) : null}
    </main>
  )
}

function ReviewHeader({
  completedRules,
  progress,
  selectedCategories,
  totalRules,
  onCategoryToggle,
  onResetRequest,
}: {
  completedRules: number
  progress: number
  selectedCategories: RuleCategory[]
  totalRules: number
  onCategoryToggle: (category: RuleCategory) => void
  onResetRequest: () => void
}) {
  return (
    <header className="review-header">
      <div>
        <p className="eyebrow">Biome rule deck</p>
        <h1>Rule config deck</h1>
      </div>
      <CategoryFilter selectedCategories={selectedCategories} onCategoryToggle={onCategoryToggle} />
      <div className="progress-block">
        <span>{progress}%</span>
        <small>
          {completedRules}/{totalRules}
        </small>
        <div className="progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>
        <button
          type="button"
          className="icon-button"
          onClick={onResetRequest}
          aria-label="Reset review"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </header>
  )
}

function ResetDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="dialog-backdrop" role="presentation">
      <section
        className="reset-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-title"
      >
        <h2 id="reset-title">Reset review?</h2>
        <p>This clears imported config, decisions, progress, filters, and hidden panel state.</p>
        <div className="dialog-actions">
          <button type="button" className="danger-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="success-button" onClick={onConfirm}>
            Reset everything
          </button>
        </div>
      </section>
    </div>
  )
}

function CategoryFilter({
  selectedCategories,
  onCategoryToggle,
}: {
  selectedCategories: RuleCategory[]
  onCategoryToggle: (category: RuleCategory) => void
}) {
  return (
    <fieldset className="category-filter" aria-label="Rule categories">
      {ruleCategories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryToggle(category)}
          />
          <span>{category}</span>
        </label>
      ))}
    </fieldset>
  )
}

function ImportPanel(props: {
  errorText: string
  importText: string
  onChange: (value: string) => void
  onHide: () => void
  onStart: () => void
}) {
  return (
    <aside className="control-panel">
      <div className="panel-title-row">
        <div>
          <FileText size={22} />
          <h2>Base file</h2>
        </div>
        <button
          type="button"
          className="small-icon-button"
          onClick={props.onHide}
          aria-label="Hide base file"
        >
          <EyeOff size={17} />
        </button>
      </div>
      <textarea
        aria-label="Biome config input"
        value={props.importText}
        onChange={(event) => props.onChange(event.target.value)}
        spellCheck={false}
      />
      {props.errorText ? <p className="error-text">{props.errorText}</p> : null}
      <button type="button" className="primary-button" onClick={props.onStart}>
        Start from this config
      </button>
    </aside>
  )
}

function RuleStage(props: {
  activeRule?: BiomeRule
  rules: BiomeRule[]
  onChoose: (decision: RuleChoice['decision']) => void
}) {
  if (!props.activeRule) return <FinishedStage />

  return (
    <section className="rule-stage" aria-live="polite">
      <div className="iframe-stack">
        {props.rules.map((rule, index) => (
          <RuleFrame key={`${rule.group}/${rule.name}`} isActive={index === 0} rule={rule} />
        ))}
        <RuleActions onChoose={props.onChoose} />
      </div>
    </section>
  )
}

function RuleFrame({ isActive, rule }: { isActive: boolean; rule: BiomeRule }) {
  return (
    <article className={`rule-frame ${isActive ? 'is-active' : ''}`}>
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
        loading="eager"
      />
    </article>
  )
}

function RuleActions({ onChoose }: { onChoose: (decision: RuleChoice['decision']) => void }) {
  return (
    <nav className="decision-bar" aria-label="Rule decisions">
      <button type="button" className="danger-button" onClick={() => onChoose('ignored')}>
        <X size={20} /> Ignore
      </button>
      <button type="button" className="warn-button" onClick={() => onChoose('warn')}>
        <AlertTriangle size={20} /> Warn
      </button>
      <button type="button" className="success-button" onClick={() => onChoose('error')}>
        <ShieldCheck size={20} /> Error
      </button>
    </nav>
  )
}

function OutputPanel({
  choices,
  onHide,
  outputText,
}: {
  choices: RuleChoice[]
  onHide: () => void
  outputText: string
}) {
  return (
    <aside className="output-panel">
      <div className="panel-title-row">
        <h2>Generated biome.json</h2>
        <button
          type="button"
          className="small-icon-button"
          onClick={onHide}
          aria-label="Hide output"
        >
          <EyeOff size={17} />
        </button>
      </div>
      <p>{choices.length} decisions saved locally.</p>
      <pre>{outputText}</pre>
    </aside>
  )
}

function FinishedStage() {
  return (
    <section className="finished-stage">
      <ShieldCheck size={44} />
      <h2>All rules reviewed.</h2>
      <p>Generated config is ready in the right panel.</p>
    </section>
  )
}

function loadInitialSnapshot(): ReviewSnapshot {
  return loadReviewSnapshot(window.localStorage) ?? createInitialSnapshot()
}

function playClickTone(decision: RuleChoice['decision']) {
  const audioContext = new AudioContext()
  const oscillator = audioContext.createOscillator()
  oscillator.frequency.value = decision === 'error' ? 620 : decision === 'warn' ? 460 : 240
  oscillator.connect(audioContext.destination)
  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.045)
}

function safeParseConfig(inputText: string): BiomeConfig {
  try {
    return parseBiomeConfig(inputText)
  } catch {
    return {}
  }
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

function createInitialSnapshot(): ReviewSnapshot {
  return {
    baseConfigText: defaultInput,
    choices: [],
    currentIndex: 0,
    panels: {
      inputVisible: true,
      outputVisible: true,
    },
    filters: {
      selectedCategories: [...ruleCategories],
    },
  }
}

function getToggledCategories(selectedCategories: RuleCategory[], category: RuleCategory) {
  if (selectedCategories.includes(category)) {
    return selectedCategories.filter((selectedCategory) => selectedCategory !== category)
  }
  return [...selectedCategories, category]
}

export default App
