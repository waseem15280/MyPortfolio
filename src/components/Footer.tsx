import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/waseem-ahmad-b5612344/' },
  { label: 'GitHub', href: 'https://github.com/waseem15280/' },
  { label: 'Download.Resume', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold text-ink-900">
              Have a project in mind?
            </p>
            <a
              href="mailto:Waseem15280@outlook.com"
              className="mt-3 inline-flex items-center gap-1 text-lg font-medium text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
            >
              Waseem15280@outlook.com <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-ink-500">
              Alternatively visit <a href="https://www.altimindservices.com" className="text-ink-700 underline hover:text-ink-900">Altimind Services LLP website</a>. Based in New Delhi, working with clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-1 text-sm font-medium text-ink-600 hover:text-ink-900"
              >
                {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© 2026 Waseem Ahmad. Designed & built with care.</p>
          <p>Delhi NCR · Remote worldwide</p>
        </div>
      </div>
    </footer>
  )
}
