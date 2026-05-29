import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { BiomeRule } from '../../../domain/types'
import { RuleStage } from '../RuleStage'

const visibleRules: BiomeRule[] = [
  {
    group: 'a11y',
    name: 'noAriaHiddenOnFocusable',
    summary: 'Disallow aria-hidden on focusable elements.',
    title: 'No Aria Hidden On Focusable',
    url: 'https://biomejs.dev/linter/rules/no-aria-hidden-on-focusable',
  },
  {
    group: 'style',
    name: 'useConst',
    summary: 'Require const declarations.',
    title: 'Use Const',
    url: 'https://biomejs.dev/linter/rules/use-const',
  },
  {
    group: 'correctness',
    name: 'noUnusedVariables',
    summary: 'Disallow unused variables.',
    title: 'No Unused Variables',
    url: 'https://biomejs.dev/linter/rules/no-unused-variables',
  },
]

describe('RuleStage', () => {
  it('keeps three documentation frames mounted and outside tab order', () => {
    render(
      <RuleStage
        activeRule={visibleRules[0]}
        hasSelectedCategory={true}
        outgoingDecision={null}
        rules={visibleRules}
        onChoose={vi.fn()}
      />,
    )

    expect(screen.getAllByTitle(/documentation/)).toHaveLength(3)
    for (const frame of screen.getAllByTitle(/documentation/)) {
      expect(frame).toHaveAttribute('tabindex', '-1')
    }
  })

  it('reports the chosen decision and disables actions during pending choice', async () => {
    const onChoose = vi.fn()
    const { rerender } = render(
      <RuleStage
        activeRule={visibleRules[0]}
        hasSelectedCategory={true}
        outgoingDecision={null}
        rules={visibleRules}
        onChoose={onChoose}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Warn' }))

    expect(onChoose).toHaveBeenCalledWith('warn')

    rerender(
      <RuleStage
        activeRule={visibleRules[0]}
        hasSelectedCategory={true}
        outgoingDecision="warn"
        rules={visibleRules}
        onChoose={onChoose}
      />,
    )

    expect(screen.getByRole('button', { name: 'Warn' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Warn' })).toHaveClass('is-selected-decision')
  })

  it('shows the matching empty stage for filtered and finished decks', () => {
    const { rerender } = render(
      <RuleStage
        activeRule={undefined}
        hasSelectedCategory={false}
        outgoingDecision={null}
        rules={[]}
        onChoose={vi.fn()}
      />,
    )

    expect(screen.getByRole('heading', { name: 'No categories selected.' })).toBeInTheDocument()

    rerender(
      <RuleStage
        activeRule={undefined}
        hasSelectedCategory={true}
        outgoingDecision={null}
        rules={[]}
        onChoose={vi.fn()}
      />,
    )

    expect(screen.getByRole('heading', { name: 'All rules reviewed.' })).toBeInTheDocument()
  })
})
