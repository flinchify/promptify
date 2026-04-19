import { useState } from 'react'

const useCases = [
  {
    label: 'Hiring',
    title: 'Hire AI-ready talent with confidence',
    description:
      'Pre-screen candidates with validated AI proficiency assessments. Filter for real skills, not buzzwords. Reduce interview cycles and make data-driven hiring decisions.',
  },
  {
    label: 'Training',
    title: 'Measure training effectiveness in real-time',
    description:
      'Deploy pre- and post-training assessments to quantify learning outcomes. Track skill progression across your organization and optimize training investments.',
  },
  {
    label: 'Certification',
    title: 'Issue industry-recognized AI certifications',
    description:
      'Create certification programs that validate real-world AI skills. Our proctoring, anti-cheat, and verification systems ensure certificate integrity.',
  },
  {
    label: 'Education',
    title: 'Integrate AI assessments into your curriculum',
    description:
      'Universities and bootcamps use InpromptiFy to benchmark student AI literacy. LMS integrations, cohort analytics, and automated grading included.',
  },
]

function HiringMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-white/40">Candidate Pipeline</span>
        <span className="text-xs text-orange-400 font-mono">12 candidates</span>
      </div>
      {[
        { name: 'Sarah Chen', score: 94, status: 'Pass' },
        { name: 'James Wilson', score: 78, status: 'Pass' },
        { name: 'Maya Patel', score: 62, status: 'Review' },
        { name: 'Tom Baker', score: 45, status: 'Fail' },
      ].map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center text-[10px] font-mono text-white/50">
            {c.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="text-sm text-white/60 flex-1">{c.name}</span>
          <span className="text-xs font-mono text-white/40">{c.score}%</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded font-mono ${
              c.status === 'Pass'
                ? 'bg-emerald-500/10 text-emerald-400'
                : c.status === 'Review'
                ? 'bg-amber-500/10 text-amber-400'
                : 'bg-red-500/10 text-red-400'
            }`}
          >
            {c.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function TrainingMockup() {
  return (
    <div>
      <span className="text-xs font-mono text-white/40">Training Progress</span>
      <div className="mt-4 space-y-4">
        {[
          { label: 'Pre-training', score: 42, color: 'from-white/10 to-white/20' },
          { label: 'Post-training', score: 78, color: 'from-orange-500 to-amber-500' },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-white/50">{item.label}</span>
              <span className="text-xs font-mono text-white/40">{item.score}%</span>
            </div>
            <div className="h-3 bg-white/[0.04] rounded-full">
              <div
                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mt-2 px-3 py-2 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/10">
          <span className="text-xs text-emerald-400 font-mono">+85.7% improvement</span>
        </div>
      </div>
    </div>
  )
}

function CertificationMockup() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-56 rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="text-sm font-medium text-white/80">Certified AI Practitioner</p>
        <p className="text-[11px] text-white/30 mt-1">Level 3 — Advanced</p>
        <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-1">
          <p className="text-[10px] text-white/20 font-mono">ID: CERT-2026-A1B2C3</p>
          <p className="text-[10px] text-white/20 font-mono">Issued: Apr 2026</p>
        </div>
      </div>
    </div>
  )
}

function EducationMockup() {
  return (
    <div>
      <span className="text-xs font-mono text-white/40">Cohort Dashboard</span>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: 'Students', value: '248' },
          { label: 'Avg Score', value: '73%' },
          { label: 'Completion', value: '91%' },
          { label: 'Pass Rate', value: '82%' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
          >
            <p className="text-lg font-semibold gradient-text">{stat.value}</p>
            <p className="text-[10px] text-white/30 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockups = [HiringMockup, TrainingMockup, CertificationMockup, EducationMockup]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const uc = useCases[active]
  const Mockup = mockups[active]

  return (
    <section className="relative py-24 section-frame">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <span className="section-label">[ Use Cases ]</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 text-white">
            Use Cases
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            From individual skill checks to enterprise-wide proficiency programs
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal stagger-1 flex justify-center gap-1 mb-12">
          {useCases.map((uc, i) => (
            <button
              key={uc.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-sm rounded-lg transition-all ${
                i === active
                  ? 'text-white bg-orange-500/10 border border-orange-500/20'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/[0.03]'
              }`}
            >
              {uc.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="reveal stagger-2 grid lg:grid-cols-2 gap-12 items-center">
          <div key={active} className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-white">{uc.title}</h3>
            <p className="text-gray-400 leading-relaxed">{uc.description}</p>
          </div>
          <div className="glass-strong p-8 rounded-2xl min-h-[280px] flex flex-col justify-center">
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  )
}
