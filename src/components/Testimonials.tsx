const testimonials = [
  {
    quote:
      'InpromptiFy completely transformed our hiring process. We went from guessing about AI skills to having quantifiable, comparable data on every candidate.',
    name: 'Rachel Torres',
    title: 'VP of Engineering',
    company: 'Nexus AI',
    initials: 'RT',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    quote:
      'The adaptive testing is genuinely impressive. It finds the exact boundary of what someone knows and gives us a precise skill map. Nothing else comes close.',
    name: 'David Kim',
    title: 'CTO',
    company: 'Synthwave Labs',
    initials: 'DK',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    quote:
      'We rolled out InpromptiFy across 2,000 employees in three weeks. The team analytics dashboard gave our L&D team exactly the insights they needed to prioritize training.',
    name: 'Priya Mehta',
    title: 'Chief People Officer',
    company: 'ScalePoint',
    initials: 'PM',
    gradient: 'from-orange-600 to-orange-400',
  },
  {
    quote:
      'Our certification program went from a manual nightmare to a fully automated pipeline. The verifiable digital badges have been a huge hit with our community.',
    name: 'Marcus Johnson',
    title: 'Director of Education',
    company: 'AI Academy',
    initials: 'MJ',
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 section-frame">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <span className="section-label">[ Testimonials ]</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 text-white">
            Trusted by teams worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal stagger-${i + 1} glass-strong p-6 rounded-2xl`}
            >
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{t.name}</p>
                  <p className="text-xs text-white/30">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
