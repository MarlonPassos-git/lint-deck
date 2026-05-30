import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'
import { biomeRules } from '../domain/biomeRules'
import { QuietAudioContext } from '../test/audioFakes'

describe('App review flow', () => {
  beforeEach(() => {
    vi.unstubAllGlobals()
    window.localStorage.clear()
  })

  it('renders the review deck with generated output', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Lint Forge' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Generated biome.json' })).toBeInTheDocument()
    expect(screen.getByText(`0/${biomeRules.length}`)).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Rule categories' })).toBeInTheDocument()
    expect(screen.getByTitle(`${biomeRules[0].name} documentation`)).toBeInTheDocument()
  })

  it('saves warn, info, and off decisions into generated config', async () => {
    vi.stubGlobal('AudioContext', QuietAudioContext)
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Warn' }))
    await waitFor(() => expect(screen.getByText(/"warn"/)).toBeInTheDocument())
    await userEvent.click(screen.getByRole('button', { name: 'Info' }))
    await waitFor(() => expect(screen.getByText(/"info"/)).toBeInTheDocument())
    await userEvent.click(screen.getByRole('button', { name: 'Off' }))

    expect(await screen.findByText(/"off"/)).toBeInTheDocument()
    expect(screen.getByText('3 decisions saved locally.')).toBeInTheDocument()
  })

  it('marks a pending error decision before persisting it', async () => {
    vi.stubGlobal('AudioContext', QuietAudioContext)
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Error' }))

    expect(screen.getByRole('button', { name: 'Error' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Error' })).toHaveClass('is-selected-decision')
    await waitFor(() => expect(screen.getByText(/"error"/)).toBeInTheDocument())
  })

  it('moves active documentation after a decision is saved', async () => {
    vi.stubGlobal('AudioContext', QuietAudioContext)
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Warn' }))

    await waitFor(() =>
      expect(screen.getByTitle(`${biomeRules[1].name} documentation`)).toBeVisible(),
    )
  })
})
