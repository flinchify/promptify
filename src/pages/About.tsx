import { useState, useEffect, useRef } from 'react'

function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const numericMatch = value.match(/^([\d.]+)(.*)$/)
    if (!numericMatch) return

    const target = parseFloat(numericMatch[1])
    const suffix = numericMatch[2]
    const isFloat = value.includes('.')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setDisplay('0' + suffix)
          const start = performance.now()
          const duration = 2000
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * target
            setDisplay((isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="reveal">
      <p className="text-3xl font-bold gradient-text">{display}</p>
      <p className="text-sm text-white/30 mt-1">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="section-label">[ About ]</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 text-white">
            Measuring AI proficiency,{' '}
            <span className="gradient-text">accurately</span>
          </h1>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            InpromptiFy was built on a simple observation: as AI transforms every
            industry, there&apos;s no reliable way to measure how well people actually
            use these tools. We&apos;re changing that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-16">
          {[
            {
              title: 'Our Mission',
              text: 'To create the global standard for AI proficiency measurement. We believe that accurate assessment drives better learning, smarter hiring, and more effective teams.',
            },
            {
              title: 'Our Approach',
              text: 'We combine psychometric science with modern AI to build assessments that are adaptive, fair, and genuinely useful. No trivia questions — only real-world skill validation.',
            },
            {
              title: 'Our Team',
              text: "We're a team of assessment scientists, AI engineers, and product builders from companies like Google, Anthropic, and Duolingo. Based in San Francisco.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`reveal stagger-${i + 1} glass-strong p-6 rounded-2xl hover:border-orange-500/10 transition-all duration-300`}
            >
              <h3 className="text-base font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">
          <CountUpStat value="150K+" label="Assessments" />
          <CountUpStat value="40+" label="Countries" />
          <CountUpStat value="500+" label="Organizations" />
          <CountUpStat value="99.9%" label="Uptime" />
        </div>
      </div>
    </div>
  )
}
