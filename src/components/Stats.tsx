import { useState, useEffect, useRef } from 'react'

function useCountUp(target: number, suffix = '', duration = 2000) {
  const [display, setDisplay] = useState('0' + suffix)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const value = Math.round(eased * target)
            setDisplay(value.toLocaleString() + suffix)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return { ref, display }
}

export default function Stats() {
  const counter1 = useCountUp(150000, '+')

  return (
    <section className="relative py-24 section-frame overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3CVjpU5MqL28kt1M6PyOAXhNcyX/hf_20260418_090031_885160dc-6202-4e28-a61d-e167a459ce25.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/70 to-[#0a0a0f]/90" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <span className="section-label">[ By the numbers ]</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 text-white">
            Built for scale.
          </h2>
        </div>

        <div className="reveal stagger-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 glass-strong p-8 rounded-2xl" ref={counter1.ref}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-bold gradient-text">{counter1.display}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Assessments completed across 40+ countries
                </p>
              </div>
              <div className="text-white/[0.06]">
                <svg
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  fill="none"
                  className="opacity-50"
                >
                  {[
                    [20, 15], [25, 20], [30, 18], [35, 22], [40, 25],
                    [45, 20], [50, 18], [55, 22], [60, 15], [65, 20],
                    [70, 25], [75, 30], [80, 22], [85, 18], [90, 20],
                    [95, 25], [30, 30], [35, 35], [50, 35], [55, 40],
                    [70, 35], [75, 40], [80, 38], [60, 42], [65, 38],
                  ].map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="2"
                      fill="currentColor"
                      className={i % 3 === 0 ? 'text-orange-500/40' : 'text-white/10'}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Enterprise Ready */}
          <div className="glass-strong p-6 rounded-2xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-orange-400">
                <path d="M10 1L12.5 6.5L18.5 7.3L14.25 11.4L15.3 17.3L10 14.5L4.7 17.3L5.75 11.4L1.5 7.3L7.5 6.5L10 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Enterprise Ready</p>
              <p className="text-xs text-gray-400 mt-1">SOC 2 compliant, GDPR ready</p>
            </div>
          </div>

          {/* Instant Results */}
          <div className="glass-strong p-6 rounded-2xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-orange-400">
                <path d="M11 1L3 12H10L9 19L17 8H10L11 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Instant Results</p>
              <p className="text-xs text-gray-400 mt-1">Real-time AI-powered scoring</p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4 grid md:grid-cols-2 gap-4">
            <div className="glass-strong p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-orange-400">
                    <path d="M7 5L2 10L7 15M13 5L18 10L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Developer First</p>
                  <p className="text-xs text-gray-400 mt-1">API access, webhooks, integrations</p>
                </div>
              </div>
            </div>

            <div className="glass-strong p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-orange-400">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 5V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">99.9% Uptime</p>
                  <p className="text-xs text-gray-400 mt-1">Globally distributed infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
