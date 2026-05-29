import './App.css'
import { ReviewWorkspace } from './components/layout/ReviewWorkspace'
import { ResetDialog } from './components/reset/ResetDialog'
import { ReviewHeader } from './components/review/ReviewHeader'
import { useRuleDocPrefetch } from './hooks/useRuleDocPrefetch'
import { useRuleReview } from './hooks/useRuleReview'

function App() {
  const review = useRuleReview()
  useRuleDocPrefetch(review.prefetchRuleUrls)

  return (
    <main className="app-shell">
      <ReviewHeader
        completedRules={review.completedRules}
        hasSelectedCategory={review.hasSelectedCategory}
        progress={review.progress}
        selectedCategories={review.selectedCategories}
        totalRules={review.filteredRules.length}
        onCategoryToggle={review.toggleCategory}
        onResetRequest={() => review.setIsResetDialogOpen(true)}
      />
      <ReviewWorkspace controller={review} />
      {review.isResetDialogOpen ? (
        <ResetDialog
          onCancel={() => review.setIsResetDialogOpen(false)}
          onConfirm={review.resetReview}
        />
      ) : null}
    </main>
  )
}

export default App
