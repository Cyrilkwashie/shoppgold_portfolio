import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <h1 className="font-cormorant font-light text-5xl text-ink">
        404 — This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="font-jost text-[11px] uppercase tracking-widest text-gold mt-8 border-b border-gold pb-1 hover:opacity-70 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  )
}
