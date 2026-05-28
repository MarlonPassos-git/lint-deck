import type { ReviewSnapshot } from '../domain/types'

const STORE_KEY = 'biome-rule-swipe:v1'

export function loadReviewSnapshot(storage: Storage): ReviewSnapshot | null {
  const storedValue = storage.getItem(STORE_KEY)
  if (!storedValue) return null

  try {
    return JSON.parse(storedValue) as ReviewSnapshot
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
