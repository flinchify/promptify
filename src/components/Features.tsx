import { useState } from 'react'

const tabs = [
  {
    label: 'Adaptive Testing',
    description:
      'Our AI engine adjusts question difficulty in real-time based on your responses. No more wasting time on questions that are too easy or too hard — every assessment is calibrated to your exact skill level.',
    features: [
      'Dynamic difficulty adjustment',
      'Response pattern analysis',
      'Confidence-weighted scoring',
      'Branching question paths',
    ],
  },
  {
    label: 'Skill Mapping',
    description:
      'Visualize proficiency across dimensions with interactive radar charts. Identify gaps, track growth over time, and get personalized recommendations for improvement.',
    features: [
      'Multi-dimensional radar charts',
      'Gap analysis reports',
      'Growth tracking over time',
      'Personalized learning paths',
    ],
  },
  {
    label: 'Real-time Scoring',
    description:
      'Get instant results the moment you finish. Our AI scoring engine provides detailed breakdowns, comparative analysis, and actionable insights in seconds — not days.',
    features: [
      'Instant score computation',
      'Detailed section breakdowns',
      'Percentile comparisons',
      'Actionable improvement tips',
    ],
  },
  {
    label: 'Custom Assessments',
    description:
      'Build assessments for any AI tool, framework, or methodology. Use our question bank or create your own with our intuitive editor and AI-assisted question generation.',
    features: [
      'Drag-and-drop builder',
      'AI question generation',
      '10,000+ question bank',
      'Custom branding options',
    ],
  },
  {
    label: 'Team Analytics',
    description:
      'Organization-wide proficiency dashboards give you full visibility into team capabilities. Track training ROI, identify skill gaps, and make data-driven hiring decisions.',
    features: [
      'Team proficiency heatmaps',
      'Department comparisons',
      'Training ROI metrics',
      'Export-ready reports',
    ],
  },
  {
    label: 'Certifications',
    description:
      'Issue verifiable digital certificates and badges. Each certificate includes a unique verification URL, blockchain-backed validation, and integrations with LinkedIn and other platforms.',
    features: [
      'Verifiable digital badges',
      'Unique certificate URLs',
      'LinkedIn integration',
      'Custom certificate templates',
    ],
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="relative py-24 overflow-hidden section-frame">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <span className="section-label">[ What we offer ]</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 text-white">
            Not just another quiz platform.
            <br />
            <span className="gradient-text">A complete assessment engine.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal stagger-1 flex flex-wrap justify-center gap-1 mb-12">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`relative px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                i === active
                  ? 'text-white bg-orange-500/10 border border-orange-500/20'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/[0.03]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="reveal stagger-2 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Details */}
          <div key={active} className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-white">{tab.label}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {tab.description}
            </p>
            <ul className="space-y-3">
              {tab.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-orange-500/10 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-orange-400"
                    >
                      <path
                        d="M10 3L4.5 8.5 2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Illustration mockup */}
          <div className="glass-strong p-8 rounded-2xl min-h-[340px] flex flex-col justify-center">
            <FeatureIllustration index={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureIllustration({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <AdaptiveTestingViz />
    case 1:
      return <SkillMapViz />
    case 2:
      return <RealTimeScoringViz />
    case 3:
      return <CustomAssessmentsViz />
    case 4:
      return <TeamAnalyticsViz />
    case 5:
      return <CertificationsViz />
    default:
      return null
  }
}

function AdaptiveTestingViz() {
  const levels = [
    { label: 'Q1', difficulty: 40 },
    { label: 'Q2', difficulty: 55 },
    { label: 'Q3', difficulty: 45 },
    { label: 'Q4', difficulty: 70 },
    { label: 'Q5', difficulty: 65 },
    { label: 'Q6', difficulty: 80 },
    { label: 'Q7', difficulty: 75 },
    { label: 'Q8', difficulty: 90 },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-white/40">Difficulty Curve</span>
        <span className="text-xs font-mono text-orange-400">Adaptive Mode</span>
      </div>
      <div className="flex items-end gap-2 h-40">
        {levels.map((l) => (
          <div key={l.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t bg-gradient-to-t from-orange-600/40 to-orange-400/60 transition-all"
              style={{ height: `${l.difficulty}%` }}
            />
            <span className="text-[10px] text-white/30 font-mono">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillMapViz() {
  const skills = ['Prompting', 'Fine-tuning', 'RAG', 'Agents', 'Evaluation', 'Safety']
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs font-mono text-white/40 mb-6">Skill Radar</span>
      <div className="relative w-48 h-48">
        {[1, 0.66, 0.33].map((s) => (
          <div
            key={s}
            className="absolute inset-0 border border-white/[0.06] rounded-full"
            style={{
              transform: `scale(${s})`,
              top: `${(1 - s) * 50}%`,
              left: `${(1 - s) * 50}%`,
              width: `${s * 100}%`,
              height: `${s * 100}%`,
            }}
          />
        ))}
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 360 - 90
          const rad = (angle * Math.PI) / 180
          const x = 50 + 56 * Math.cos(rad)
          const y = 50 + 56 * Math.sin(rad)
          return (
            <span
              key={skill}
              className="absolute text-[10px] text-white/40 font-mono -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {skill}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function RealTimeScoringViz() {
  const sections = [
    { label: 'Fundamentals', score: 92 },
    { label: 'Prompting', score: 87 },
    { label: 'Architecture', score: 74 },
    { label: 'Deployment', score: 81 },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-white/40">Score Breakdown</span>
        <span className="text-2xl font-bold gradient-text">84%</span>
      </div>
      <div className="space-y-3">
        {sections.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-white/50">{s.label}</span>
              <span className="text-xs text-white/60 font-mono">{s.score}%</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                style={{ width: `${s.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomAssessmentsViz() {
  return (
    <div className="space-y-3">
      <span className="text-xs font-mono text-white/40">Assessment Builder</span>
      {['Multiple Choice', 'Code Challenge', 'Free Response', 'Scenario Based'].map(
        (type, i) => (
          <div
            key={type}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
          >
            <span className="w-8 h-8 rounded-md bg-orange-500/10 flex items-center justify-center text-xs text-orange-400 font-mono">
              {i + 1}
            </span>
            <span className="text-sm text-white/60">{type}</span>
            <span className="ml-auto text-[10px] text-white/20 font-mono">drag</span>
          </div>
        )
      )}
    </div>
  )
}

function TeamAnalyticsViz() {
  const teams = [
    { name: 'Engineering', score: 88 },
    { name: 'Product', score: 72 },
    { name: 'Design', score: 65 },
    { name: 'Marketing', score: 58 },
  ]
  return (
    <div>
      <span className="text-xs font-mono text-white/40">Team Proficiency</span>
      <div className="mt-4 space-y-3">
        {teams.map((t) => (
          <div key={t.name} className="flex items-center gap-4">
            <span className="text-xs text-white/50 w-20">{t.name}</span>
            <div className="flex-1 h-2 bg-white/[0.06] rounded-full">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                style={{ width: `${t.score}%` }}
              />
            </div>
            <span className="text-xs text-white/40 font-mono w-8 text-right">
              {t.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CertificationsViz() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-48 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 mb-4">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.5L10 13.77l-4.94 2.34.94-5.5-4-3.9 5.61-.87L10 1z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-xs font-medium text-white/70">AI Fundamentals</p>
        <p className="text-[10px] text-white/30 mt-1">Certified Proficient</p>
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-[9px] text-white/20 font-mono">
            verify.inpromptify.com/c/a1b2c3
          </p>
        </div>
      </div>
      <span className="text-xs text-white/40">Verifiable digital certificate</span>
    </div>
  )
}
