'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <h1 className="font-cormorant font-light text-4xl text-ink">
        Something went wrong.
      </h1>
      <p className="font-jost font-light text-sm text-ink-muted mt-4">
        Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 bg-ink text-white font-jost text-[11px] uppercase tracking-[0.2em] px-12 py-4 hover:bg-gold transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}
