import { ruleCategories } from '../../domain/ruleCategories'
import type { RuleCategory } from '../../domain/types'

type CategoryFilterProps = {
  selectedCategories: RuleCategory[]
  onCategoryToggle: (category: RuleCategory) => void
}

export function CategoryFilter(props: CategoryFilterProps) {
  return (
    <fieldset className="category-filter" aria-label="Rule categories">
      {ruleCategories.map((category) => (
        <CategoryOption
          category={category}
          isSelected={props.selectedCategories.includes(category)}
          key={category}
          onCategoryToggle={props.onCategoryToggle}
        />
      ))}
    </fieldset>
  )
}

function CategoryOption(props: {
  category: RuleCategory
  isSelected: boolean
  onCategoryToggle: (category: RuleCategory) => void
}) {
  const categoryInputId = getCategoryInputId(props.category)

  return (
    <label htmlFor={categoryInputId}>
      <input
        checked={props.isSelected}
        id={categoryInputId}
        name="rule-category"
        onChange={() => props.onCategoryToggle(props.category)}
        type="checkbox"
      />
      <span>{props.category}</span>
    </label>
  )
}

function getCategoryInputId(category: RuleCategory) {
  return `category-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-$/g, '')}`
}
