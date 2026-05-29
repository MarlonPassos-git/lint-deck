import { vi } from 'vitest'

export class QuietAudioContext {
  currentTime = 0

  createOscillator() {
    return {
      connect: vi.fn(),
      frequency: { value: 0 },
      start: vi.fn(),
      stop: vi.fn(),
    }
  }

  get destination() {
    return {}
  }
}
