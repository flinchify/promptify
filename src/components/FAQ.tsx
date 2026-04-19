import { useState } from 'react'

const faqs = [
  {
    q: 'What is InpromptiFy?',
    a: 'InpromptiFy is an AI-powered proficiency assessment platform that measures, validates, and certifies AI skills. It uses adaptive testing, real-time scoring, and comprehensive skill mapping to provide accurate assessments for individuals and organizations.',
  },
  {
    q: 'How does adaptive testing work?',
    a: 'Our AI engine analyzes your responses in real-time and adjusts the difficulty of subsequent questions. If you answer correctly, questions get harder. If you struggle, they get easier. This zeros in on your exact proficiency level much faster than traditional fixed-difficulty tests.',
  },
  {
    q: 'What AI skills and tools can be assessed?',
    a: 'InpromptiFy covers a wide range of AI topics including prompt engineering, model fine-tuning, RAG architectures, AI agents, evaluation methodologies, AI safety, and specific tools like ChatGPT, Claude, Midjourney, and more. You can also create custom assessments for any topic.',
  },
  {
    q: 'How long does an assessment take?',
    a: 'Most assessments take 15-30 minutes thanks to adaptive testing, which eliminates questions that are too easy or too hard for you. Traditional assessments covering the same material would typically take 60-90 minutes.',
  },
  {
    q: 'Can I integrate InpromptiFy with my existing tools?',
    a: 'Yes. We offer a REST API, webhooks, and native integrations with popular HR platforms, LMS systems, and ATS tools. Our developer documentation covers everything you need to get started.',
  },
  {
    q: 'Are the certifications verifiable?',
    a: 'Absolutely. Each certificate includes a unique verification URL that anyone can use to confirm authenticity. Certificates also integrate with LinkedIn and can be added to digital portfolios.',
  },
  {
    q: 'Is there a free tier?',
    a: 'Yes. You can create an account and take assessments for free with our Starter plan. Paid plans unlock custom assessments, team analytics, certifications, API access, and priority support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 section-frame">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <span className="section-label">[ FAQ ]</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Frequently asked questions.
          </h2>
        </div>

        <div className="reveal stagger-1 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/[0.06] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium text-white/80">
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`flex-shrink-0 ml-4 text-white/30 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content ${openIndex === i ? 'open' : ''}`}
              >
                <div>
                  <p className="px-6 pb-4 text-sm text-white/40 leading-relaxed">
                    {faq.a}
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
