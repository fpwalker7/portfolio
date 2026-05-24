import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Linkedin, MapPin, Award, Building2, GraduationCap, Code2, Heart, Languages, User } from 'lucide-react'
import { SITE } from '@/lib/data'
import PrintButton from '@/components/PrintButton'

const SKILL_CATEGORIES = [
  {
    category: 'Web Development & Front-End',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PHP', 'Responsive Design', 'SASS', 'APIs', 'JSON'],
  },
  {
    category: 'CMS & Web Platform Architecture',
    skills: ['Enterprise WordPress', 'Sitecore', 'CMS Governance', 'Custom Templates', 'Reusable Components', 'Multilingual Workflows'],
  },
  {
    category: 'Analytics & Growth Optimization',
    skills: ['GA4', 'Conversion Rate Optimization', 'Event Tracking', 'A/B Testing', 'Form Optimization', 'MarTech Integrations'],
  },
  {
    category: 'Performance, SEO & Accessibility',
    skills: ['Page Speed Optimization', 'Technical SEO', 'WCAG Accessibility', 'Accessibility Remediation', 'Asset Optimization', 'Template Efficiency', 'Cross-Browser QA'],
  },
  {
    category: 'Marketing & CRM Platforms',
    skills: ['Marketo', 'HubSpot', 'Salesforce', 'API Integrations'],
  },
  {
    category: 'Collaboration & Workflow',
    skills: ['Git', 'GitHub', 'npm', 'JIRA', 'Wrike', 'Agile Development', 'Cross Functional Collaboration', 'Figma', 'Vercel'],
  },
]

export const metadata = {
  title: 'Resume | Fernanda Passos Walker',
  description:
    'Resume of Fernanda Passos Walker — Senior Web Developer with 15+ years building high-performing websites, scalable CMS systems, and marketing technology integrations for enterprise teams.',
}

const EXPERIENCE = [
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
          'Owned and optimized enterprise WordPress web experiences supporting global marketing, demand generation, product marketing, and brand teams.',
          'Built responsive WordPress pages, templates, and reusable components for scalable, campaign-ready front-end experiences.',
          'Built and optimized web experiences for technical cybersecurity audiences, balancing performance, accessibility, security, and brand consistency.',
          'Partnered with UX, creative, growth, and marketing teams to improve user journeys, landing page performance, and conversion paths.',
          'Improved page speed, technical SEO, accessibility, and front-end quality through asset optimization, template efficiency, and cross-browser QA.',
          'Supported analytics tracking, event measurement, and A/B testing to help teams understand engagement, conversion, and campaign performance.',
          'Contributed to future-state planning for a headless CMS architecture using React, Next.js, and TypeScript as part of the proposed modern web platform direction.',
          'Supported developer-focused web experiences and technical content initiatives, supporting scalable front-end experiences for engineering and technical audiences.',
        ],
      },
      {
        title: 'Web Developer',
        period: 'March 2020 – December 2022',
        bullets: [
          'Developed and optimized WordPress landing pages and campaign experiences for global acquisition initiatives using custom templates and front-end enhancements.',
          'Managed multilingual content structures and localization workflows across international markets, supporting scalable global web governance.',
          'Improved front-end performance, SEO, and attribution through asset optimization, template enhancements, and integrations with marketing automation and analytics platforms.',
          'Led hands-on accessibility remediation across website pages and components, resolving critical WCAG issues and establishing a QA workflow to improve accessibility before launch.',
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
          'Developed microsites, landing pages, and web applications supporting international marketing campaigns, student acquisition initiatives, and program launches.',
          'Built scalable front end solutions using HTML5, CSS3, and JavaScript, translating business requirements into maintainable web implementations under tight timelines.',
          'Implemented campaign experiences through Marketo and Salesforce integrations, connecting web experiences to Shorelight\'s broader marketing ecosystem.',
          'Partnered with marketing, SEO, and product stakeholders to optimize WordPress based microsites, improving search visibility, usability, and overall user experience.',
          'Integrated third party platforms and marketing systems to expand website capabilities and accelerate campaign launches.',
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
          'Contributed to the athenahealth.com redesign and major brand refresh, supporting a 30% increase in annual site traffic, lead generation, and sales meetings.',
          'Designed and implemented responsive Sitecore web experiences using HTML5, CSS3, JavaScript, and CMS templating to support product marketing and user engagement.',
          'Collaborated with designers, marketers, and engineers to translate business and product requirements into scalable CMS driven web components.',
          'Developed and maintained Sitecore components within structured GitHub workflows, including branching, pull requests, staging, and production releases.',
          'Supported agile development cycles, CI/CD deployment workflows, automated testing, code quality, standards compliance, and cross browser compatibility.',
        ],
      },
    ],
  },
  {
    company: 'Cliir',
    href: 'https://www.cliir.com/',
    logo: '/logos/cliir-logo.png',
    location: 'Boston, MA – Remote',
    roles: [
      {
        title: 'Web Developer & Designer',
        period: 'December 2013 – June 2014',
        bullets: [
          'Designed and implemented partner facing pages within Cliir\'s eCommerce platform, collaborating with management to align deliverables, timelines, and business needs.',
          'Maintained and enhanced website content and functionality to ensure a consistent user experience and reliable site performance.',
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
  },
  {
    title: '30% Increase in Traffic, Leads & Sales Meetings',
    description: 'Contributed to the athenahealth.com redesign and brand refresh that drove a 30% increase in annual site traffic, lead generation, and sales meetings booked.',
  },
  {
    title: 'Scaled Global Localization Across 9 Languages',
    description: 'Owned and scaled multilingual content workflows at CyberArk supporting 9 languages across North America, Europe, and APAC, enabling consistent global web governance.',
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
              Senior Web Developer &amp; Digital Experience Lead
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
              Senior web developer with 15+ years of experience building, owning, and optimizing high
              performing websites for enterprise teams. My background spans front end development, CMS
              architecture, accessibility, performance, technical SEO, analytics tracking, and marketing
              technology integrations. I partner with UX, creative, growth, marketing, and digital teams
              to build scalable web experiences that support campaigns, product launches, and global
              digital operations.
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
              <div key={i} className="rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.6)] p-5 shimmer-border-hover">
                <p className="shimmer-text text-sm font-bold">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{item.description}</p>
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
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Volunteer Web Developer &amp; Designer</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">January 2015 – January 2025</p>
              </div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {[
                  "Designed and developed the school's website to improve communication and community engagement.",
                  'Built and optimized fundraising and event landing pages to support school initiatives and increase participation.',
                  'Designed and refined web forms and user flows to improve user experience and streamline registrations and donations.',
                  'Implemented accessibility best practices to support inclusive, standards-compliant digital experiences.',
                  'Maintain site content, information architecture, and brand consistency to ensure a clear and reliable digital presence.',
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
