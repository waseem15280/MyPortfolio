import { useState } from 'react'
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Send,
  MapPin,
  Check,
} from 'lucide-react'
import { PROJECTS, SKILLS, EXPERIENCE, SERVICES } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const PORTRAIT = '/images/Filtered1.JPG'
const HERO_BG =
  'https://images.pexels.com/photos/8092461/pexels-photo-8092461.jpeg?auto=compress&cs=tinysrgb&w=1600'

const stats = [
  { value: '20', label: 'Years in practice' },
  { value: '40+', label: 'Projects completed' },
  { value: '6', label: 'Enterprise systems built' },
  
]

const marqueeWords = ['Full Stack Dev', 'Payment Systems', 'SaaS', 'Multitenancy', 'CI/CD', 'ERP', 'Business Intelligence', 'API Integration', 'Security Compliance']

export default function PortfolioPage() {
  const [sent, setSent] = useState(false)

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        <img src={HERO_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/55 to-cream" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24 sm:px-8">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.25em] text-brass-600">
            Software Architect | Data Analyst | Payment Integration | Security Compliance
          </p>
          <h1 className="animate-fade-up mt-5 max-w-4xl font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-ink-900 text-balance sm:text-6xl lg:text-7xl">
            I develop custom software products — and integrate them too.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Waseem Ahmad, an independent software architect in New Delhi. With over 20 years of experience in software engineering and enterprise product development, I help teams
            turn complex problems into solutions that bridge the gap between business and technology.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1.5 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink-700"
            >
              View selected work <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-ink-300 bg-cream/60 px-6 py-3 text-sm font-semibold text-ink-800 backdrop-blur-sm transition-colors hover:bg-cream"
            >
              Start a project
            </button>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-ink-500 sm:flex"
          aria-label="Scroll to work"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </section>

      {/* Marquee */}
      <div className="border-y border-ink-100 bg-ink-900 py-4">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="flex items-center gap-8 text-cream/80">
                <span className="font-display text-xl font-medium">{w}</span>
                <Sparkles className="h-4 w-4 text-brass-400" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={PORTRAIT} alt="Waseem Ahmad" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
              <MapPin className="h-4 w-4 text-brass-600" /> New Delhi, India
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">About</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink-900 text-balance sm:text-5xl">
              An architect who owns, and a developer who delivers.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                For nearly two decades I've contributed in leading the delivery of large-scale payment and banking solutions. Throughout my career, I have combined strong technical expertise with people collaboration, enabling me to manage complex projects and build high-performing software solutions.
              </p>
              <p>
                In my role as Senior Software Architect at FIS Global Business Solutions, I have worked with cross-functional teams including business stakeholders, QA engineers, and project leads.
              </p>
              <p>
              Now, I am excited to use my ability to provide engineering decisions to businesses and help to build an environment focused on quality and customer success.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-ink-900">{s.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">Selected work</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                Things I'm proud of
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                onClick={() => p.link && window.open(p.link, '_blank', 'noopener,noreferrer')}
                className={cn(
                  'group animate-fade-up overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all duration-300',
                  p.link && 'cursor-pointer hover:-translate-y-1 hover:shadow-xl',
                  i % 2 === 1 && 'md:translate-y-8',
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
                    {p.year}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brass-600">{p.category}</p>
                  <h3 className="mt-2 flex items-center gap-1.5 font-display text-2xl font-semibold text-ink-900">
                    {p.title}
                    <ArrowUpRight className="h-5 w-5 -translate-x-1 text-ink-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">Services</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          How I can help your team
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group bg-cream p-8 transition-colors hover:bg-white">
              <span className="font-display text-5xl font-semibold text-ink-200 transition-colors group-hover:text-brass-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-ink-900 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-400">Toolkit</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Skills & tools
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {SKILLS.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-lg font-semibold text-brass-300">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-cream/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream/10">
                        <Check className="h-3 w-3 text-brass-300" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">Experience</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          A short history
        </h2>

        <div className="mt-12 space-y-px">
          {EXPERIENCE.map((e) => (
            <div
              key={e.role + e.company}
              className="group grid gap-4 border-b border-ink-100 py-7 transition-colors hover:bg-ink-50/50 sm:grid-cols-[200px_1fr_140px] sm:gap-8"
            >
              <div>
                <p className="text-sm font-semibold text-ink-900">{e.period}</p>
                <p className="mt-0.5 text-sm text-ink-500">{e.location}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900">{e.role}</h3>
                <p className="text-sm font-medium text-brass-600">{e.company}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">{e.summary}</p>
              </div>
              <div className="hidden items-start justify-end sm:flex">
                <ArrowUpRight className="h-5 w-5 text-ink-300 transition-colors group-hover:text-ink-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl text-balance">
            Let's make something worth shipping.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-600">
            Tell me a little about your project, your timeline, and what you're hoping to achieve.
            I reply to every message within two business days.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {sent ? (
            <div className="rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-sm">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-cream">
                <Check className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">Message sent</h3>
              <p className="mt-2 text-ink-600">
                Thanks for reaching out — I'll be in touch within two business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(ev) => {
                ev.preventDefault()
                setSent(true)
              }}
              className="space-y-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="text-left">
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Name</label>
                  <input
                    required
                    placeholder="Your name"
                    className="h-11 w-full rounded-lg border border-input bg-cream/40 px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus-visible:border-ink-900 focus-visible:ring-2 focus-visible:ring-ink-900/20"
                  />
                </div>
                <div className="text-left">
                  <label className="mb-1.5 block text-sm font-medium text-ink-700">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-lg border border-input bg-cream/40 px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus-visible:border-ink-900 focus-visible:ring-2 focus-visible:ring-ink-900/20"
                  />
                </div>
              </div>
              <div className="text-left">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">Project type</label>
                <select
                  className="h-11 w-full rounded-lg border border-input bg-cream/40 px-3.5 text-sm text-ink-900 outline-none transition-colors focus-visible:border-ink-900 focus-visible:ring-2 focus-visible:ring-ink-900/20"
                  defaultValue=""
                >
                  <option value="" disabled>Select one…</option>
                  <option>Product design</option>
                  <option>Design system</option>
                  <option>Front-end build</option>
                  <option>Brand & art direction</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="text-left">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">Tell me about it</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What are you building, and what do you need help with?"
                  className="w-full rounded-lg border border-input bg-cream/40 px-3.5 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus-visible:border-ink-900 focus-visible:ring-2 focus-visible:ring-ink-900/20"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-700"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
