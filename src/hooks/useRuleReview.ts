import { useMemo, useState } from 'react'
import { biomeRules } from '../domain/biomeRules'
import {
  buildBiomeConfig,
  formatBiomeConfig,
  getReviewableRules,
  parseBiomeConfig,
} from '../domain/configuration'
import {
  appendRuleChoice,
  getCompletedRuleCount,
  getProgressPercent,
  getVisibleRuleWindow,
} from '../domain/reviewState'
import { filterRulesByCategories, ruleCategories } from '../domain/ruleCategories'
import type {
  BiomeConfig,
  BiomeRule,
  ReviewSnapshot,
  RuleCategory,
  RuleChoice,
} from '../domain/types'
import {
  clearReviewSnapshot,
  loadReviewSnapshot,
  saveReviewSnapshot,
} from '../storage/localReviewStore'

const defaultInput = '{\n  "$schema": "https://biomejs.dev/schemas/2.4.16/schema.json"\n}\n'
const ruleDocPrefetchLimit = 6
type StoreReviewSnapshot = (nextSnapshot: ReviewSnapshot, shouldSyncImportText?: boolean) => void

export function useRuleReview() {
  const [snapshot, setSnapshot] = useState(() => loadInitialSnapshot())
  const [importText, setImportText] = useState(snapshot.baseConfigText)
  const [errorText, setErrorText] = useState('')
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false)
  const [outgoingDecision, setOutgoingDecision] = useState<RuleChoice['decision'] | null>(null)
  const state = useReviewState(snapshot, importText, errorText, isResetDialogOpen, outgoingDecision)
  const actions = useReviewActions(
    state,
    setSnapshot,
    setImportText,
    setErrorText,
    setOutgoingDecision,
  )

  return {
    ...state,
    ...actions,
    resetReview: () => {
      actions.resetReview()
      setIsResetDialogOpen(false)
    },
    setImportText,
    setIsResetDialogOpen,
  }
}

function useReviewState(
  snapshot: ReviewSnapshot,
  importText: string,
  errorText: string,
  isResetDialogOpen: boolean,
  outgoingDecision: RuleChoice['decision'] | null,
) {
  const selectedCategories = useMemo(() => getSelectedCategories(snapshot), [snapshot])
  const baseConfig = useMemo(() => safeParseConfig(snapshot.baseConfigText), [snapshot])
  const filteredRules = useMemo(
    () => filterRulesByCategories(biomeRules, selectedCategories),
    [selectedCategories],
  )
  const pendingRules = useMemo(
    () => getReviewableRules(filteredRules, baseConfig, snapshot.choices),
    [baseConfig, filteredRules, snapshot.choices],
  )
  const completedRules = getCompletedRuleCount(filteredRules.length, pendingRules.length, 0)

  return buildReviewState(snapshot, importText, errorText, {
    completedRules,
    filteredRules,
    isResetDialogOpen,
    outgoingDecision,
    pendingRules,
    selectedCategories,
  })
}

function useReviewActions(
  state: ReturnType<typeof buildReviewState>,
  setSnapshot: (snapshot: ReviewSnapshot) => void,
  setImportText: (value: string) => void,
  setErrorText: (value: string) => void,
  setOutgoingDecision: (decision: RuleChoice['decision'] | null) => void,
) {
  const storeSnapshot = (nextSnapshot: ReviewSnapshot, shouldSyncImportText = false) => {
    saveReviewSnapshot(window.localStorage, nextSnapshot)
    if (shouldSyncImportText) setImportText(nextSnapshot.baseConfigText)
    setSnapshot(nextSnapshot)
  }

  return {
    ...createReviewActions(state, storeSnapshot, setErrorText, setOutgoingDecision),
    resetReview: () => resetReview(setSnapshot, setImportText, setErrorText),
  }
}

function createReviewActions(
  state: ReturnType<typeof buildReviewState>,
  storeSnapshot: StoreReviewSnapshot,
  setErrorText: (value: string) => void,
  setOutgoingDecision: (decision: RuleChoice['decision'] | null) => void,
) {
  return {
    chooseRule: (decision: RuleChoice['decision']) =>
      chooseRule(state, decision, storeSnapshot, setOutgoingDecision),
    startReview: () => startReview(state, storeSnapshot, setErrorText),
    toggleCategory: (category: RuleCategory) => toggleCategory(state, category, storeSnapshot),
    updatePanelVisibility: (patch: Partial<NonNullable<ReviewSnapshot['panels']>>) =>
      updatePanelVisibility(state, patch, storeSnapshot),
  }
}

function chooseRule(
  state: ReturnType<typeof buildReviewState>,
  decision: RuleChoice['decision'],
  storeSnapshot: StoreReviewSnapshot,
  setOutgoingDecision: (decision: RuleChoice['decision'] | null) => void,
) {
  if (!state.activeRule || state.outgoingDecision) return
  const chosenRule = state.activeRule
  playClickTone(decision)
  setOutgoingDecision(decision)
  window.setTimeout(() => {
    saveRuleDecision(state, chosenRule, decision, storeSnapshot)
    setOutgoingDecision(null)
  }, 280)
}

function buildReviewState(
  snapshot: ReviewSnapshot,
  importText: string,
  errorText: string,
  derived: {
    completedRules: number
    filteredRules: BiomeRule[]
    isResetDialogOpen: boolean
    outgoingDecision: RuleChoice['decision'] | null
    pendingRules: BiomeRule[]
    selectedCategories: RuleCategory[]
  },
) {
  const isInputVisible = snapshot.panels?.inputVisible ?? true
  const isOutputVisible = snapshot.panels?.outputVisible ?? true
  return {
    activeRule: derived.pendingRules[0],
    choices: snapshot.choices,
    completedRules: derived.completedRules,
    errorText,
    filteredRules: derived.filteredRules,
    hasSelectedCategory: derived.selectedCategories.length > 0,
    importText,
    isInputVisible,
    isOutputVisible,
    isResetDialogOpen: derived.isResetDialogOpen,
    outputText: formatBiomeConfig(
      buildBiomeConfig(safeParseConfig(snapshot.baseConfigText), snapshot.choices),
    ),
    outgoingDecision: derived.outgoingDecision,
    prefetchRuleUrls: getRuleDocPrefetchUrls(derived.pendingRules),
    progress: getProgressPercent(derived.filteredRules.length, derived.completedRules),
    selectedCategories: derived.selectedCategories,
    snapshot,
    visibleRules: getVisibleRuleWindow(derived.pendingRules, 0),
  }
}

function startReview(
  state: ReturnType<typeof buildReviewState>,
  storeSnapshot: StoreReviewSnapshot,
  setErrorText: (value: string) => void,
) {
  try {
    const config = parseBiomeConfig(state.importText)
    storeSnapshot(createImportedSnapshot(state.snapshot, config), true)
    setErrorText('')
  } catch (error) {
    setErrorText(error instanceof Error ? error.message : 'Invalid config')
  }
}

function resetReview(
  setSnapshot: (snapshot: ReviewSnapshot) => void,
  setImportText: (value: string) => void,
  setErrorText: (value: string) => void,
) {
  clearReviewSnapshot(window.localStorage)
  setImportText(defaultInput)
  setErrorText('')
  setSnapshot(createInitialSnapshot())
}

function toggleCategory(
  state: ReturnType<typeof buildReviewState>,
  category: RuleCategory,
  storeSnapshot: StoreReviewSnapshot,
) {
  storeSnapshot({
    ...state.snapshot,
    currentIndex: 0,
    filters: { selectedCategories: getToggledCategories(state.selectedCategories, category) },
  })
}

function updatePanelVisibility(
  state: ReturnType<typeof buildReviewState>,
  visibilityPatch: Partial<NonNullable<ReviewSnapshot['panels']>>,
  storeSnapshot: StoreReviewSnapshot,
) {
  storeSnapshot({
    ...state.snapshot,
    panels: {
      inputVisible: state.isInputVisible,
      outputVisible: state.isOutputVisible,
      ...visibilityPatch,
    },
  })
}

function saveRuleDecision(
  state: ReturnType<typeof buildReviewState>,
  rule: BiomeRule,
  decision: RuleChoice['decision'],
  storeSnapshot: StoreReviewSnapshot,
) {
  storeSnapshot({
    ...state.snapshot,
    choices: appendRuleChoice(state.snapshot.choices, rule, decision),
    currentIndex: state.snapshot.currentIndex + 1,
  })
}

function playClickTone(decision: RuleChoice['decision']) {
  const audioContext = new AudioContext()
  const oscillator = audioContext.createOscillator()
  const frequencies = { error: 620, info: 360, off: 240, warn: 460 }
  oscillator.frequency.value = frequencies[decision]
  oscillator.connect(audioContext.destination)
  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.045)
}

function createImportedSnapshot(snapshot: ReviewSnapshot, config: BiomeConfig): ReviewSnapshot {
  return {
    baseConfigText: formatBiomeConfig(config),
    choices: [],
    currentIndex: 0,
    filters: snapshot.filters,
    panels: snapshot.panels,
  }
}

function safeParseConfig(inputText: string): BiomeConfig {
  try {
    return parseBiomeConfig(inputText)
  } catch {
    return {}
  }
}

function getRuleDocPrefetchUrls(pendingRules: BiomeRule[]) {
  return pendingRules.slice(0, ruleDocPrefetchLimit).map((rule) => rule.url)
}

function loadInitialSnapshot(): ReviewSnapshot {
  return loadReviewSnapshot(window.localStorage) ?? createInitialSnapshot()
}

function createInitialSnapshot(): ReviewSnapshot {
  return {
    baseConfigText: defaultInput,
    choices: [],
    currentIndex: 0,
    filters: { selectedCategories: [...ruleCategories] },
    panels: { inputVisible: true, outputVisible: true },
  }
}

function getSelectedCategories(snapshot: ReviewSnapshot) {
  return snapshot.filters?.selectedCategories ?? [...ruleCategories]
}

function getToggledCategories(selectedCategories: RuleCategory[], category: RuleCategory) {
  if (selectedCategories.includes(category)) {
    return selectedCategories.filter((selectedCategory) => selectedCategory !== category)
  }
  return [...selectedCategories, category]
}
