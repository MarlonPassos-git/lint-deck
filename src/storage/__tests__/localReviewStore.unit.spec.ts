import { describe, expect, it } from 'vitest'
import type { ReviewSnapshot } from '../../domain/types'
import { clearReviewSnapshot, loadReviewSnapshot, saveReviewSnapshot } from '../localReviewStore'

class MemoryReviewStorage implements Storage {
  private readonly values = new Map<string, string>()

  get length() {
    return this.values.size
  }

  clear() {
    this.values.clear()
  }

  getItem(key: string) {
    return this.values.get(key) ?? null
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null
  }

  removeItem(key: string) {
    this.values.delete(key)
  }

  setItem(key: string, value: string) {
    this.values.set(key, value)
  }
}

const snapshot: ReviewSnapshot = {
  baseConfigText: '{}',
  choices: [{ ruleKey: 'style/useConst', decision: 'warn' }],
  currentIndex: 1,
  panels: {
    inputVisible: false,
    outputVisible: true,
  },
  filters: {
    selectedCategories: ['CSS', 'JSON'],
  },
}

describe('loadReviewSnapshot', () => {
  it('returns null when no snapshot exists', () => {
    expect(loadReviewSnapshot(new MemoryReviewStorage())).toBeNull()
  })

  it('removes corrupted snapshots', () => {
    const storage = new MemoryReviewStorage()
    storage.setItem('biome-rule-swipe:v1', '{bad')

    expect(loadReviewSnapshot(storage)).toBeNull()
    expect(storage.length).toBe(0)
  })
})

describe('saveReviewSnapshot', () => {
  it('persists a review snapshot', () => {
    const storage = new MemoryReviewStorage()

    saveReviewSnapshot(storage, snapshot)

    expect(loadReviewSnapshot(storage)).toEqual(snapshot)
  })
})

describe('clearReviewSnapshot', () => {
  it('removes the saved review snapshot', () => {
    const storage = new MemoryReviewStorage()
    saveReviewSnapshot(storage, snapshot)

    clearReviewSnapshot(storage)

    expect(loadReviewSnapshot(storage)).toBeNull()
  })
})
