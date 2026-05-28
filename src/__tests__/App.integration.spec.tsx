import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'
import { biomeRules } from '../domain/biomeRules'

class QuietAudioContext {
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

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the deck and generated output', () => {
    render(<App />)

    expect(screen.getByText('Rule config deck')).toBeInTheDocument()
    expect(screen.getByText('Generated biome.json')).toBeInTheDocument()
    expect(screen.getByText(`0/${biomeRules.length}`)).toBeInTheDocument()
    expect(screen.getByLabelText('Rule categories')).toBeInTheDocument()
    expect(document.querySelector('.docs-frame-crop .docs-frame')).toBeInTheDocument()
  })

  it('saves a warn decision into the generated config', async () => {
    vi.stubGlobal('AudioContext', QuietAudioContext)
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: /warn/i }))

    expect(screen.getByText(/"warn"/)).toBeInTheDocument()
    vi.unstubAllGlobals()
  })

  it('hides and restores the generated output panel', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Hide output' }))

    expect(screen.queryByText('Generated biome.json')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show biome.json' })).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Show biome.json' }))

    expect(screen.getByText('Generated biome.json')).toBeInTheDocument()
  })

  it('hides and restores the base file panel', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Hide base file' }))

    expect(screen.queryByText('Base file')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show base file' })).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Show base file' }))

    expect(screen.getByText('Base file')).toBeInTheDocument()
  })

  it('marks the workspace when both side panels are hidden', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Hide base file' }))
    await userEvent.click(screen.getByRole('button', { name: 'Hide output' }))

    expect(screen.getByLabelText('Rule review workspace')).toHaveClass(
      'is-input-hidden',
      'is-output-hidden',
    )
  })

  it('restores hidden side panels from local storage', async () => {
    window.localStorage.setItem(
      'biome-rule-swipe:v1',
      JSON.stringify({
        baseConfigText: '{}',
        choices: [],
        currentIndex: 0,
        panels: { inputVisible: false, outputVisible: false },
      }),
    )

    render(<App />)

    expect(screen.getByRole('button', { name: 'Show base file' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show biome.json' })).toBeInTheDocument()
  })

  it('filters the review deck by selected categories', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('checkbox', { name: 'JavaScript' }))

    expect(screen.getByRole('checkbox', { name: 'JavaScript' })).not.toBeChecked()
  })
})
