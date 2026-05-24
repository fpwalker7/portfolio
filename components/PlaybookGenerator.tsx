'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PLAYBOOK_SCENARIOS } from '@/lib/data'

type Timeline = '7 days' | '30 days' | '90 days'

export default function PlaybookGenerator() {
  const [scenario, setScenario] = useState('')
  const [context, setContext] = useState('')
  const [timeline, setTimeline] = useState<Timeline>('30 days')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  const systemPrompt = `You are a digital transformation strategist. Generate a concise, actionable playbook in response to the user's scenario. 
Format your response with clear sections: ## Goal, ## Architecture, ## Operating Rhythm, ## Success Metrics.
Keep it practical and specific. Use bullet points within sections. Limit to ~400 words.`

  const userPrompt = `Scenario: ${scenario}
Timeline: ${timeline}
Context: ${context || 'No additional context provided.'}

Generate a practical playbook for this scenario.`

  const generate = async () => {
    if (!scenario) return
    setLoading(true)
    setResult('')

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: 'user', content: userPrompt }],
        }),
      })
      const data = await res.json()
      const text = data.content?.map((c: { text?: string }) => c.text ?? '').join('') ?? 'No response.'
      setResult(text)
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Simple markdown-ish renderer
  const renderResult = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h3 key={i} className="mt-5 mb-2 text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider first:mt-0">
            {line.replace('## ', '')}
          </h3>
        )
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <li key={i} className="ml-4 list-disc text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {line.replace(/^[-•] /, '')}
          </li>
        )
      }
      if (line.trim() === '') return <br key={i} />
      return (
        <p key={i} className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          {line}
        </p>
      )
    })
  }

  return (
    <section id="ai-systems" className="relative py-16 md:py-20">
      <div className="glow-line mx-auto mb-16 w-full max-w-4xl md:mb-20" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
            Generate a <span className="shimmer-text">playbook</span> in 30 seconds
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
            Describe your goal. This demo shows the type of plan I deliver: architecture, operating rhythm, and success metrics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Input panel */}
          <div className="relative rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.5)] p-6 backdrop-blur-sm shimmer-border-hover">
            <div className="flex flex-col gap-5">

              {/* Scenario dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Scenario</label>
                <div className="relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-4 py-2.5 text-left text-sm transition-colors hover:border-[hsl(var(--accent)/0.5)]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className={scenario ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'}>
                      {scenario || 'Select a scenario...'}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-[hsl(var(--muted-foreground))] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full z-20 mt-1 w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] py-1 shadow-xl">
                      {PLAYBOOK_SCENARIOS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className="w-full px-4 py-2 text-left text-sm text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--secondary))]"
                          onClick={() => { setScenario(s); setDropdownOpen(false) }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Context */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Context (optional)</label>
                <textarea
                  placeholder="Industry, constraints, timeline, what success looks like."
                  rows={3}
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="resize-none rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-4 py-2.5 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent)/0.5)] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--accent)/0.5)]"
                />
              </div>

              {/* Timeline toggle */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[hsl(var(--foreground))]">Timeline</label>
                <div className="flex rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-1">
                  {(['7 days', '30 days', '90 days'] as Timeline[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                        timeline === t
                          ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]'
                          : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                      }`}
                      onClick={() => setTimeline(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={generate}
                  disabled={!scenario || loading}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[hsl(var(--primary))] px-4 text-sm font-medium text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary)/0.9)] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? 'Generating...' : 'Generate playbook'}
                </button>
                <button
                  type="button"
                  className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
                  onClick={() => setShowPrompt(!showPrompt)}
                >
                  {showPrompt ? 'Hide prompt' : 'Show prompt'}
                </button>
                {showPrompt && (
                  <pre className="rounded-lg bg-[hsl(var(--secondary))] p-3 text-xs text-[hsl(var(--muted-foreground))] overflow-auto max-h-40 whitespace-pre-wrap">
                    {userPrompt}
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Output panel */}
          <div className="rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.5)] p-6 backdrop-blur-sm shimmer-border-hover">
            {loading ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[hsl(var(--accent))] border-t-transparent" />
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Building your playbook...</p>
              </div>
            ) : result ? (
              <div className="prose-sm max-w-none">
                {renderResult(result)}
              </div>
            ) : (
              <div className="flex h-full min-h-[300px] items-center justify-center">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Choose a scenario to generate a plan.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[hsl(var(--muted-foreground)/0.6)]">
          AI-generated content. No data is stored.
        </p>
      </div>
    </section>
  )
}
