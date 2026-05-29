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
    expect(document.querySelector('.docs-frame')).toBeInTheDocument()
  })

  it('removes documentation iframes from the tab sequence', () => {
    render(<App />)

    for (const frame of document.querySelectorAll('.docs-frame')) {
      expect(frame).toHaveAttribute('tabindex', '-1')
    }
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

  it('shows a distinct state when every category filter is disabled', async () => {
    render(<App />)

    for (const checkbox of screen.getAllByRole('checkbox')) {
      await userEvent.click(checkbox)
    }

    expect(screen.getByText('No categories')).toBeInTheDocument()
    expect(screen.getByText('No categories selected.')).toBeInTheDocument()
    expect(screen.queryByText('All rules reviewed.')).not.toBeInTheDocument()
  })

  it('announces invalid imported config errors', async () => {
    render(<App />)

    await userEvent.clear(screen.getByLabelText('Biome config input'))
    await userEvent.click(screen.getByLabelText('Biome config input'))
    await userEvent.paste('{ invalid json')
    await userEvent.click(screen.getByRole('button', { name: 'Start from this config' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Invalid biome config')
  })

  it('requires modal confirmation before resetting review state', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Reset review' }))

    expect(screen.getByRole('dialog', { name: 'Reset review?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reset everything' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })

  it('uses semantic decision classes from the design system', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Ignore' })).toHaveClass('ignore-button')
    expect(screen.getByRole('button', { name: 'Warn' })).toHaveClass('warn-button')
    expect(screen.getByRole('button', { name: 'Error' })).toHaveClass('error-button')
  })

  it('names category controls for browser form diagnostics', () => {
    render(<App />)

    expect(screen.getByRole('checkbox', { name: 'HTML/ARIA' })).toHaveAttribute(
      'id',
      'category-html-aria',
    )
    for (const checkbox of screen.getAllByRole('checkbox')) {
      expect(checkbox).toHaveAttribute('name', 'rule-category')
    }
  })

  it('renders custom square category checkbox controls', () => {
    render(<App />)

    expect(document.querySelector('.category-check')).not.toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(6)
  })
})
