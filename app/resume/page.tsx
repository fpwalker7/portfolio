import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Linkedin, MapPin, Award, Building2, GraduationCap, Code2, Heart, Languages, User } from 'lucide-react'
import { SITE } from '@/lib/data'
import PrintButton from '@/components/PrintButton'

const SKILL_CATEGORIES = [
  {
    category: 'Analytics & Growth Optimization',
    skills: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Conversion Rate Optimization', 'A/B Testing', 'Event Tracking', 'Web Form Optimization', 'Marketing Automation Integrations'],
  },
  {
    category: 'SEO & Site Performance',
    skills: ['Technical SEO', 'Generative Engine Optimization (GEO)', 'Answer Engine Optimization (AEO)', 'Google Search Console', 'Semrush', 'Screaming Frog', 'Structured Data', 'Page Speed Optimization', 'Asset Optimization'],
  },
  {
    category: 'CMS & Web Platform Architecture',
    skills: ['Enterprise WordPress', 'Sitecore', 'CMS Governance', 'Modular Component Systems', 'Multilingual Platforms', 'Localization Workflows', 'Global Content Architecture', 'WCAG Accessibility Standards'],
  },
  {
    category: 'Marketing & CRM Platforms',
    skills: ['Marketo', 'Salesforce', 'Knak', 'API Integrations'],
  },
  {
    category: 'Web Development & Front-End',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Responsive Design', 'SASS', 'REST APIs', 'JSON'],
  },
  {
    category: 'Collaboration & Workflow',
    skills: ['Backlog & Intake Management', 'Stakeholder Management', 'Vendor & Agency Management', 'JIRA', 'Wrike', 'Agile Development', 'Cross Functional Collaboration', 'Git', 'GitHub', 'Figma'],
  },
]

export const metadata = {
  title: 'Fernanda Passos Walker — Web Leader',
  description:
    'Senior web developer with 15+ years of experience building, owning, and optimizing high performing websites for enterprise teams.',
}

const EXPERIENCE = [
  {
    company: 'Independent Consultant',
    href: 'https://www.fpassos.com/',
    logo: null,
    location: 'U.S. – Remote',
    roles: [
      {
        title: 'Digital Experience Consultant',
        period: 'March 2026 – Present',
        bullets: [
          'Advise on corporate website strategy and performance: information architecture and navigation, conversion paths, technical SEO, accessibility, and page speed, using GA4, Search Console, and Semrush to prioritize what to fix first.',
          'Translate site performance data into recommendations and roadmaps for non-technical stakeholders, scoping work and defining success measures before anything gets built.',
          'Track how AI search and answer engines surface content, testing structured data and question-led content structure alongside traditional SEO signals.',
        ],
      },
    ],
  },
  {
    company: 'CyberArk',
    href: 'https://www.cyberark.com/',
    logo: '/logos/cyberark-icon.svg',
    location: 'Newton, MA – Hybrid',
    roles: [
      {
        title: 'Senior Web Developer',
        period: 'January 2023 – March 2026',
        description: 'CyberArk (NASDAQ: CYBR) is a global cybersecurity leader specializing in identity security and privileged access management. Acquired by Palo Alto Networks for $25B in February 2026.',
        bullets: [
          'Promoted to own strategy and execution across all CyberArk web properties in partnership with growth and demand generation teams; managed intake and backlog prioritization of website requests across stakeholders, balancing impact and effort across concurrent workstreams.',
          'Translated business and campaign goals into clear requirements and user stories for developers and designers, QA\'d completed work before launch, and defined success metrics to measure outcomes of shipped improvements.',
          'Identified friction points in forms and key conversion paths using Hotjar session recordings, heatmaps, and funnel analytics; partnered with demand operations to implement fixes, strengthening UTM tracking and campaign attribution across Salesforce and marketing automation platforms.',
          'Defined and enforced accessibility standards across global web properties, embedding WCAG best practices into enterprise WordPress platform governance.',
          'Set CMS architecture and governance standards, building a scalable design system of web templates and reusable components that kept experiences consistent and accelerated campaign launches across regions.',
          'Owned multilingual platform architecture and localization strategy across international markets, defining workflows and content standards and managing the European localization vendor (LanguageWire) across time zones against scope and delivery timelines.',
          'Led web execution and redirect strategy for acquisition integrations, including content consolidation, SEO preservation, CMS standardization, and localization, protecting traffic and rankings through high-risk migrations.',
          'Contributed to future-state planning for a WordPress-to-Contentful headless CMS migration, building React and Next.js knowledge to support a modern front-end stack.',
          'Aligned landing page strategy with campaign intent alongside SEO, paid media, and content teams, designing and executing A/B tests to improve engagement and conversion across inbound and paid traffic.',
        ],
      },
      {
        title: 'Web Developer',
        period: 'March 2020 – December 2022',
        bullets: [
          'Developed and optimized WordPress landing pages and campaign experiences for global acquisition initiatives, improving performance through custom templates and front-end enhancements.',
          'Managed multilingual content structures and localization workflows across international markets, establishing scalable global web governance.',
          'Improved front-end performance, technical SEO, and attribution through asset optimization, template enhancements, and marketing automation and analytics integrations.',
        ],
      },
    ],
  },
  {
    company: 'Shorelight Education',
    href: 'https://shorelight.com/',
    logo: '/logos/shorelight-logo.png',
    location: 'Boston, MA – Hybrid',
    roles: [
      {
        title: 'Web Developer',
        period: 'May 2017 – October 2019',
        description: 'Global education company helping universities grow international enrollment through digital admissions, recruitment, and student success programs.',
        bullets: [
          'Developed microsites, landing pages, and web applications supporting international marketing campaigns and student acquisition initiatives.',
          'Built scalable front end solutions using JavaScript, HTML5, and CSS3, translating business requirements into maintainable implementations under tight timelines.',
          'Implemented campaign experiences in Marketo and Salesforce integrations while partnering with SEO teams to optimize WordPress pages and improve search visibility and user experience.',
        ],
      },
    ],
  },
  {
    company: 'athenahealth',
    href: 'https://www.athenahealth.com/',
    logo: '/logos/athena-logo.png',
    location: 'Watertown, MA – On-site',
    roles: [
      {
        title: 'Web Developer & Designer',
        period: 'June 2014 – May 2017',
        description: 'Leading healthcare technology company providing cloud based solutions for electronic health records, billing, patient engagement, and practice operations.',
        bullets: [
          'Delivered the athenahealth.com redesign and brand refresh driving a 30% increase in site traffic, lead generation, and sales meetings.',
          'Developed and maintained Sitecore web experiences using GitHub version control and structured deployment workflows.',
          'Built responsive user interfaces using HTML5, CSS3, JavaScript, and Sitecore templating ensuring cross-browser compatibility and code quality.',
          'Delivered features and improvements through agile development cycles across staging and production environments.',
        ],
      },
    ],
  },
  {
    company: 'Approach International Student Center',
    href: 'https://approachisc.edu/',
    logo: '/logos/approach-logo.png',
    location: 'Boston, MA – On-site',
    roles: [
      {
        title: 'Junior Web Developer & Designer',
        period: 'January 2011 – June 2014',
        bullets: [
          'Led a full website redesign aligned with marketing and enrollment goals, improving site navigation and user flows.',
          'Developed digital enrollment forms that improved operational efficiency and reduced manual processing.',
        ],
      },
    ],
  },
]

const ACCOMPLISHMENTS = [
  {
    title: 'Accessibility Score Raised to 96+',
    description: 'Led hands-on accessibility remediation across CyberArk\'s enterprise website, resolving critical WCAG issues and raising the site-wide accessibility score to 96+ through audits, ARIA improvements, and a pre-launch QA workflow.',
    href: '/resume/accessibility',
  },
  {
    title: '30% Increase in Traffic, Leads & Sales Meetings',
    description: 'Contributed to the athenahealth.com redesign and brand refresh that drove a 30% increase in annual site traffic, lead generation, and sales meetings booked.',
  },
  {
    title: 'Scaled Global Localization Across 9 Languages',
    description: 'Owned and scaled multilingual content workflows at CyberArk supporting 9 languages across North America, Europe, and APAC, enabling consistent global web governance.',
    href: '/resume/localization',
  },
  {
    title: 'Reusable CMS Component Library',
    description: 'Built a scalable WordPress component library that reduced page build time, enabled non-technical teams to self-serve content updates, and improved consistency across the enterprise site.',
  },
]

const EDUCATION = [
  {
    institution: 'University of Massachusetts Boston',
    degree: 'Information Technology coursework',
    period: 'May 2014',
    thesis: null,
  },
  {
    institution: 'University of Technology FATEC — São Paulo, Brazil',
    degree: 'B.S. Data Processing',
    period: 'December 2009',
    thesis: 'The CRM as a Tool for the Relationship between the Client and Satisfaction Guarantees',
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">

      {/* Back nav */}
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[hsl(var(--accent)/0.4)] to-[hsl(var(--primary)/0.2)] blur-md" />
            <div className="relative h-36 w-36 overflow-hidden rounded-xl border border-[hsl(var(--border))]">
              <Image
                src="/images/fernanda-profile.JPG.jpeg"
                alt="Fernanda Passos Walker"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/fernanda-logo.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden
                style={{ filter: 'url(#logo-teal-filter)' }}
              />
              <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
                Fernanda <span className="shimmer-text">Passos</span>{' '}
                Walker
              </h1>
            </div>
            <p className="mt-1 text-base text-[hsl(var(--muted-foreground))] md:text-lg">
              Web Strategy, Digital Experience &amp; Development Leader
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-1.5"
              >
                <Mail className="h-3.5 w-3.5 shimmer-icon" aria-hidden="true" />
                <span className="shimmer-text">{SITE.email}</span>
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <Linkedin className="h-3.5 w-3.5 shimmer-icon" aria-hidden="true" />
                <span className="shimmer-text">LinkedIn</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shimmer-icon" aria-hidden="true" />
                <span className="shimmer-text">Boston, MA (Remote-friendly)</span>
              </span>
            </div>

            <PrintButton />
          </div>
        </div>

        <div className="glow-line mx-auto mt-10 w-full" />

        {/* ── Summary ──────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <User className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Summary
          </h2>
          <div className="rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] p-6 shimmer-border-hover">
            <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Web strategy and digital experience leader with 15+ years owning and optimizing enterprise
              web ecosystems, including six years owning the full set of web properties at CyberArk in B2B
              cybersecurity, from a nine-language flagship site to developer and open-source destinations.
              Manage intake and backlog prioritization of website work across demand generation, SEO, product,
              and brand stakeholders; use analytics, session recordings, heatmaps, and A/B testing to improve
              buyer journeys and conversion for prospects, customers, partners, and developers. Set standards
              for CMS governance, design systems, localization, accessibility, and performance, with measurable
              gains in conversion and search visibility.
            </p>
          </div>
        </section>

        {/* ── Accomplishments ──────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <Award className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Key Accomplishments
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ACCOMPLISHMENTS.map((item, i) => (
              <div key={i} className={`rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] p-5 shimmer-border-hover${item.href ? ' cursor-pointer' : ''}`}>
                {item.href ? (
                  <Link href={item.href}>
                    <p className="shimmer-text text-sm font-bold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{item.description}</p>
                  </Link>
                ) : (
                  <>
                    <p className="shimmer-text text-sm font-bold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section className="mt-10 print:break-before-page">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <Building2 className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Professional Experience
          </h2>

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative flex gap-5">
                {/* Logo / timeline */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--secondary))]">
                    {job.logo ? (
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-[hsl(var(--accent))]">
                        {job.company.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  {i < EXPERIENCE.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[hsl(var(--accent)/0.3)] to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Company + location */}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-[hsl(var(--foreground))]">
                      <a href={job.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[hsl(var(--accent))]">
                        {job.company}
                      </a>
                    </h3>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">{job.location}</p>
                  </div>

                  {/* Roles */}
                  {job.roles.map((role, r) => (
                    <div key={r} className={r > 0 ? 'mt-5' : 'mt-0.5'}>
                      {/* Title + period */}
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">{role.title}</p>
                        <p className="text-xs text-[hsl(var(--muted-foreground))]">{role.period}</p>
                      </div>

                      {role.description && (
                        <p className="mt-1.5 text-xs italic text-[hsl(var(--muted-foreground))]">{role.description}</p>
                      )}

                      {/* Bullets */}
                      <ul className="mt-2 flex flex-col gap-1.5">
                        {role.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent)/0.6)]" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="glow-line mx-auto mt-10 w-full" />

        {/* ── Education ────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <GraduationCap className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] px-5 py-4 shimmer-border-hover">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      {edu.degree}
                    </p>
                    <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs text-[hsl(var(--muted-foreground))]">{edu.period}</p>
                </div>
                {edu.thesis && (
                  <p className="mt-2 text-xs italic text-[hsl(var(--muted-foreground))]">
                    Thesis: &ldquo;{edu.thesis}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="glow-line mx-auto mt-10 w-full" />

        {/* ── Skills ───────────────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <Code2 className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES.flatMap((cat) => cat.skills).map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--secondary))] px-3 py-1 text-xs font-medium text-[hsl(var(--foreground))]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="glow-line mx-auto mt-10 w-full" />

        {/* ── Community Experience ──────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <Heart className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Community Experience
          </h2>

          <div className="flex gap-5">
            <div className="relative flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--secondary))]">
                <Image src="/logos/fenway-logo.png" alt="Fenway High School" width={28} height={28} className="object-contain" />
              </div>
            </div>

            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-sm font-bold text-[hsl(var(--foreground))]">
                  <a href="https://www.fenwayhs.org/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[hsl(var(--accent))]">
                    Fenway High School
                  </a>
                </h3>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">Boston, MA</p>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 mt-0.5">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Volunteer Website Manager</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">January 2015 – January 2025</p>
              </div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {[
                  'Designed and maintained the school website to improve communication with students, families, staff, and the broader BPS community.',
                  'Built fundraising, event, registration, and donation pages that improved access to information and supported school initiatives.',
                  'Refined web forms, user flows, and information architecture to streamline registrations, donations, and family-facing updates.',
                  'Implemented accessibility and usability improvements to support inclusive, standards-compliant digital experiences.',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--accent)/0.6)]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="glow-line mx-auto mt-10 w-full" />

        {/* ── Language Skills ───────────────────────────────────── */}
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[hsl(var(--foreground))]">
            <Languages className="h-5 w-5 shimmer-icon" aria-hidden="true" />
            Languages
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Fluent in English, Portuguese, and Spanish.
          </p>
        </section>

      </main>
    </div>
  )
}
