import { useState } from 'react'

const codeTabs = [
  {
    label: 'Python',
    code: `from inpromptify import InpromptiFy

client = InpromptiFy()

assessment = client.assessments.create(
    title="AI Fundamentals",
    difficulty="adaptive"
)`,
  },
  {
    label: 'TypeScript',
    code: `import { InpromptiFy } from 'inpromptify';

const client = new InpromptiFy();

const assessment = await client.assessments.create({
  title: 'AI Fundamentals',
  difficulty: 'adaptive',
});`,
  },
  {
    label: 'cURL',
    code: `curl -X POST https://api.inpromptify.com/v1/assessments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "AI Fundamentals",
    "difficulty": "adaptive"
  }'`,
  },
]

export default function CTASection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative py-24 section-frame">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get started in seconds
          </h2>
          <p className="text-gray-400 mt-3">
            Create your first assessment in minutes
          </p>
          <button className="glow-btn px-8 py-3.5 text-base mt-6">
            Start for free
          </button>
        </div>

        {/* Code block */}
        <div className="reveal stagger-1 glass-strong rounded-2xl overflow-hidden max-w-2xl mx-auto">
          {/* Tab bar */}
          <div className="flex items-center gap-0 border-b border-white/[0.06]">
            {codeTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-xs font-mono transition-colors ${
                  i === activeTab
                    ? 'text-white bg-white/[0.04] border-b-2 border-orange-500'
                    : 'text-white/30 hover:text-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="p-5">
            <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-gray-300">
                {codeTabs[activeTab].code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
