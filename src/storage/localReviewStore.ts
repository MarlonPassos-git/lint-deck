import type { ReviewSnapshot } from '../domain/types'

const STORE_KEY = 'biome-rule-swipe:v1'

type StoredReviewSnapshot = Omit<ReviewSnapshot, 'choices'> & {
  choices: StoredRuleChoice[]
}

type StoredRuleChoice = Omit<ReviewSnapshot['choices'][number], 'decision'> & {
  decision: ReviewSnapshot['choices'][number]['decision'] | 'ignored'
}

export function loadReviewSnapshot(storage: Storage): ReviewSnapshot | null {
  const storedValue = storage.getItem(STORE_KEY)
  if (!storedValue) return null

  try {
    return migrateReviewSnapshot(JSON.parse(storedValue) as StoredReviewSnapshot)
  } catch {
    storage.removeItem(STORE_KEY)
    return null
  }
}

export function saveReviewSnapshot(storage: Storage, snapshot: ReviewSnapshot) {
  storage.setItem(STORE_KEY, JSON.stringify(snapshot))
}

export function clearReviewSnapshot(storage: Storage) {
  storage.removeItem(STORE_KEY)
}

function migrateReviewSnapshot(snapshot: StoredReviewSnapshot): ReviewSnapshot {
  return {
    ...snapshot,
    choices: snapshot.choices.map((choice) => ({
      ...choice,
      decision: choice.decision === 'ignored' ? 'off' : choice.decision,
    })),
  }
}
