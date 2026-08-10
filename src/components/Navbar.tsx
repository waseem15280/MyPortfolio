import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(28,25,23,0.06)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-cream transition-transform group-hover:rotate-[-6deg]">
            <span className="font-display text-lg font-semibold leading-none">WA</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-900">Waseem Ahmad</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="ml-2 flex items-center gap-1 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ink-700"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={cn('block h-0.5 w-6 bg-ink-900 transition-transform', open && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-6 bg-ink-900 transition-opacity', open && 'opacity-0')} />
            <span className={cn('block h-0.5 w-6 bg-ink-900 transition-transform', open && '-translate-y-2 -rotate-45')} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-ink-100 bg-cream/95 backdrop-blur-md transition-all duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-3 py-3 text-left text-base font-medium text-ink-800 hover:bg-ink-900/5"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
