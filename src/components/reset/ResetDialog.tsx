type ResetDialogProps = {
  onCancel: () => void
  onConfirm: () => void
}

export function ResetDialog({ onCancel, onConfirm }: ResetDialogProps) {
  return (
    <div className="dialog-backdrop" role="presentation">
      <section
        className="reset-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-title"
      >
        <h2 id="reset-title">Reset review?</h2>
        <p>This clears imported config, decisions, progress, filters, and hidden panel state.</p>
        <div className="dialog-actions">
          <button type="button" className="secondary-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="error-button" onClick={onConfirm}>
            Reset everything
          </button>
        </div>
      </section>
    </div>
  )
}
