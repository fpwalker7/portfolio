// ============================================================
//  PORTFOLIO CONTENT — Edit everything here
// ============================================================

export const SITE = {
  name: 'Fernanda Passos Walker',
  tagline: 'Web strategy and digital experience for enterprise growth.\nOwnership, governance, and execution across the full web lifecycle.',
  shortBio: 'Your role or title here',
  linkedin: 'https://www.linkedin.com/in/fernanda-passos-walker/',
  github: 'https://github.com/yourusername',
  website: 'https://yoursite.com',
  email: 'ferpwalker@gmail.com',
}

// ─── Hero Section ────────────────────────────────────────────
export const HERO = {
  badge: 'Open to networking and meaningful conversations',
  headline: ['Leading', 'modern web experiences', 'for', 'enterprise growth'],
  headlineShimmer: 'modern',
  subtext:
    'Web strategy and digital experience leader with 15+ years owning enterprise web ecosystems — setting governance, architecture, and roadmaps, and leading conversion optimization and experimentation with demand generation, SEO, product, and brand teams to improve buyer journeys and drive measurable growth.',
  roleLabel: 'Web Strategy | Digital Experience | Growth & Experimentation | CMS Governance | Accessibility | SEO | Localization | Marketing Technology',
  videoThumbnail: '/thumbnails/thumbnail.png', // replace with your image
  videoId: 'vbcfczd6v7', // Wistia or YouTube embed ID (leave blank to just show image)
  ctas: {
    primary: { label: 'View Work', href: '/#work' },
    secondary: { label: 'Book a conversation', href: '/#contact' },
  },
}

// ─── How I Work — Typewriter phrases ─────────────────────────
export const TYPEWRITER_PHRASES = [
  'modern development.',
  'scalable CMS systems.',
  'websites that perform.',
]

// ─── Partner Logos — add/remove as needed ────────────────────
// Each entry: { name, svgPath } — put SVG files in /public/logos/
// Or use inline SVG strings in the Nav/TrustedBy components
export const PARTNER_LOGOS: { name: string; src: string }[] = [
  { name: 'CyberArk', src: '/logos/cyberark.svg' },
  { name: 'athenahealth', src: '/logos/athenahealth.svg' },
  { name: 'Shorelight', src: '/logos/shorelight.svg' },
  // Add more...
]

// ─── About Section ───────────────────────────────────────────
export const ABOUT = {
  heading: 'The strategist who owns the',
  headingShimmer: 'platform',
  subheading: 'Web strategy. Digital experience. Systems that let teams move faster.',
  video: '/videos/about.mp4', // 9:16 portrait video
  name: 'Fernanda Passos Walker',
  role: 'Your Role & Specialty',
  paragraphs: [
    'I own the web layer end to end — strategy, architecture, governance, experimentation, and execution. My work sits at the intersection of demand generation, SEO, accessibility, localization, and marketing technology, so teams have a platform that performs and a system they can actually use.',
    'With 15+ years in enterprise web, I spent my last three years at CyberArk owning every web property across nine languages, including a homepage with 337,000+ visits and localized homepages drawing 67,000+ more. I led the web team in India, trained a UX designer who joined the team, managed our European localization vendor, turned a legal accessibility flag into a sitewide program that took Lighthouse accessibility from 46 to 95, and ran the A/B tests behind a Request Demo page that converted about 19% of its visitors.',
    'Today I work as an independent digital experience consultant, advising teams on information architecture, navigation, conversion paths, technical SEO, and accessibility, and testing how AI search engines surface and cite their content.',
    'I am most valuable when the website looks fine on the outside but the strategy, governance, or system behind it needs to be cleaner, faster, and ready for what\'s next.',
  ],
  pillars: [
    {
      icon: 'Crosshair',
      title: 'Web Strategy',
      description: 'Governance, architecture, and roadmap.',
    },
    {
      icon: 'Layers',
      title: 'Digital Experience',
      description: 'Fast, accessible, and measurable.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Platform Ownership',
      description: 'From intake to execution.',
    },
  ],
}

// ─── Impact Stats ─────────────────────────────────────────────
export const STATS = [
  {
    value: '12+',
    label: 'Years in Enterprise Web',
    description: 'CyberArk, Shorelight, and athenahealth experience across CMS, campaigns, accessibility, SEO, and web operations.',
  },
  {
    value: '19%',
    label: 'Request Demo Submit Rate',
    description: '1,200+ form submissions on CyberArk\'s Request Demo page, driven by A/B tests on calls to action, layouts, and forms.',
  },
  {
    value: '9',
    label: 'Languages Owned',
    description: 'Owned the website experience across nine languages, with localized homepages drawing 67,000+ visits.',
  },
  {
    value: '95',
    label: 'Lighthouse Accessibility, up from 46',
    description: 'Turned a legal accessibility flag into a sitewide program across Brand, Creative, and UX.',
  },
]

export const SKILLS_TAGS = [
  'Enterprise WordPress',
  'React & Next.js',
  'Reusable CMS Components',
  'Accessibility',
  'Technical SEO',
  'Performance',
  'Marketo & Salesforce',
  'GA4 & GTM',
  'Adobe Analytics',
  'Hotjar',
  'A/B Testing & CRO',
  'Localization',
  'Web Governance',
  'Digital Experience',
]

// ─── Capabilities ─────────────────────────────────────────────
export const CAPABILITIES = [
  {
    id: 'strategy',
    icon: 'ChartColumn',
    title: 'Digital Strategy & Growth',
    description:
      'High-performance platforms with governance, velocity, and resilience. Built to support scale and change.',
    video: '/videos/digital-strategy.mp4',
    bullets: [
      'Platform architecture, migration, and composable rebuild',
      'Performance engineering and Core Web Vitals optimization',
      'Multi-brand and multi-region governance models',
      'Growth strategy tied to pipeline and revenue outcomes',
    ],
  },
  {
    id: 'ai-ops',
    icon: 'Sparkles',
    title: 'AI-Driven Marketing Operations',
    description:
      'GenAI embedded into content workflows and decisioning. Practical, measurable acceleration.',
    bullets: [
      'AI content workflows with human review gates',
      'Prompt engineering for brand-safe outputs',
      'Measurement frameworks for AI-assisted content',
      'Governance and audit trails for regulated industries',
    ],
  },
  {
    id: 'journeys',
    icon: 'FlaskConical',
    title: 'Customer Journeys & Experimentation',
    description:
      'Intent-based experiences powered by clean architecture, testing culture, and accountable measurement.',
    bullets: [
      'Conversion-focused journey mapping and CRO',
      'A/B and multivariate testing frameworks',
      'Personalization at scale with ABM',
      'Analytics architecture and attribution modeling',
    ],
  },
  {
    id: 'discoverability',
    icon: 'Eye',
    title: 'Discoverability & Narrative Control',
    description:
      'Technical foundations and structured content that win in search, AI answers, and public narrative.',
    bullets: [
      'Technical SEO and site architecture',
      'Answer Engine Optimization (AEO/AIO)',
      'Structured data and entity optimization',
      'Content strategy tied to search intent',
    ],
  },
  {
    id: 'martech',
    icon: 'Database',
    title: 'MarTech, Data & Governance',
    description:
      'Unified stacks, clean data flows, and governance frameworks that scale without slowing teams down.',
    bullets: [
      'MarTech stack evaluation and consolidation',
      'CDP/data layer architecture',
      'Privacy-compliant tracking and consent management',
      'Vendor selection and contract negotiation',
    ],
  },
  {
    id: 'transformation',
    icon: 'Building2',
    title: 'Transformation, M&A & Operating Model',
    description:
      'Protect visibility, conversion paths, and momentum during integration, reorgs, and change.',
    bullets: [
      'M&A digital due diligence and integration planning',
      'Post-merger web consolidation roadmaps',
      'Org design and operating model setup',
      'Stakeholder alignment and executive communication',
    ],
  },
]

// ─── Playbook Generator Scenarios ────────────────────────────
export const PLAYBOOK_SCENARIOS = [
  'Launch a new product or feature',
  'Migrate to a headless CMS',
  'Improve organic search visibility',
  'Build an AI content workflow',
  'Post-M&A website integration',
  'Stand up an ABM program',
  'Reduce site technical debt',
  'Improve lead conversion rate',
]

// ─── Featured Work ────────────────────────────────────────────
export const WORK_ITEMS = [
  {
    slug: 'project-one',
    company: 'CyberArk — Enterprise web platform ownership',
    tag: 'Platform',
    tagline: '',
    description:
      'Owned every CyberArk web property across nine languages, including a homepage with 337,000+ visits — setting governance standards, leading the web team in India, raising Lighthouse accessibility from 46 to 95, and running A/B tests with demand generation and SEO that brought the Request Demo page 1,200+ submissions at a ~19% submit rate.',
    icon: '/logos/cyberark-icon.svg',
    href: 'https://www.cyberark.com',
  },
  {
    slug: 'project-two',
    company: 'Shorelight — Global campaign web experiences',
    tag: 'Campaigns',
    tagline: '',
    description:
      'Led web execution for international student acquisition campaigns — connecting Marketo, Salesforce, SEO, and front-end development across microsites, landing pages, and web applications.',
    icon: '/logos/shorelight-logo.png',
    href: 'https://www.shorelight.com',
  },
  {
    slug: 'project-three',
    company: 'athenahealth — Brand refresh and Sitecore development',
    tag: 'Digital Experience',
    tagline: '',
    description:
      'Led Sitecore web development through a major brand redesign that drove a 30% increase in site traffic, lead generation, and sales meetings.',
    icon: '/logos/athena-logo.png',
    href: 'https://www.athenahealth.com',
  },
]

// ─── Blog / Writing ───────────────────────────────────────────
// If using a headless CMS, replace these with API calls in your page component
export const BLOG_POSTS = [
  {
    slug: 'your-featured-post',
    title: 'Your Featured Post Title Here',
    excerpt: 'A short excerpt of the post that draws readers in...',
    date: 'Jan 15, 2026',
    readTime: '8 minute read',
    hasAudio: true,
    image: '/blog/featured.jpg',
    href: '/blog/your-featured-post',
    featured: true,
  },
  {
    slug: 'post-two',
    title: 'Second Post Title',
    excerpt: 'Short excerpt here...',
    date: 'Jan 5, 2026',
    readTime: '5 minute read',
    hasAudio: false,
    image: '/blog/post-two.jpg',
    href: '/blog/post-two',
  },
  {
    slug: 'post-three',
    title: 'Third Post Title',
    excerpt: 'Short excerpt here...',
    date: 'Dec 20, 2025',
    readTime: '4 minute read',
    hasAudio: true,
    image: '/blog/post-three.jpg',
    href: '/blog/post-three',
  },
  {
    slug: 'post-four',
    title: 'Fourth Post Title',
    excerpt: 'Short excerpt here...',
    date: 'Dec 10, 2025',
    readTime: '3 minute read',
    hasAudio: false,
    image: '/blog/post-four.jpg',
    href: '/blog/post-four',
  },
  {
    slug: 'post-five',
    title: 'Fifth Post Title',
    excerpt: 'Short excerpt here...',
    date: 'Nov 28, 2025',
    readTime: '6 minute read',
    hasAudio: true,
    image: '/blog/post-five.jpg',
    href: '/blog/post-five',
  },
]

export const WRITING_SECTION = {
  agencyName: 'Your Agency / Studio Name',
  agencyUrl: 'https://youragency.com',
  agencyTagline:
    'Your agency blends AI-driven solutions with proven digital strategy to propel brands into the conversations that matter.',
  agencyDescription:
    'From technical SEO and AI visibility to full platform modernization, every engagement follows a three-phase process: deep discovery, custom strategy, and relentless refinement.',
}

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: { quote: string; name: string; role: string; avatar?: string }[] = [
  {
    quote:
      "Fernanda truly owned processes end-to-end bringing structure, clarity, and consistency that made a real difference for our team's effectiveness. She was also a standout collaborator, seamlessly partnering across our Center of Excellence, Localization, Legal, UI/UX, Design and Demand Generation to ensure alignment and amplify results.",
    name: "Jim Sabbia",
    role: "Director, Web Strategy and Development at Barracuda",
    avatar: "/images/testimonials/jim-sabbia.jpeg",
  },
  {
    quote:
      "What impressed me most about Fernanda was her resourcefulness and solution-oriented mindset. She never treated a challenge as a dead end. Instead, she'd dig in and come back with answers. Fernanda was someone the team could genuinely count on when it mattered.",
    name: "Anna Walsh",
    role: "VP Marketing",
    avatar: "/images/testimonials/anna-walsh.jpeg",
  },
  {
    quote:
      "I knew Fernanda was a star when I joined CyberArk and we had our first 1x1 regarding the website path and track. During the two years she worked in my organization, she maintained a fantastic attitude and strategically executed a # of projects from start to finish.",
    name: "Eric Mullins",
    role: "VP, Demand, Brand & Digital Marketing",
  },
  {
    quote:
      "Always the first to raise her hand, she is the definition of a true team player. … she also fully took on our global localization process. This was a new area for her to learn and she absolutely killed it.",
    name: "Sean Galliher",
    role: "VP of Marketing at Second Front Systems",
    avatar: "/images/testimonials/sean-galliher.jpeg",
  },
  {
    quote:
      "Fernanda is a team-oriented hard worker who is always willing to step outside the bounds of her job description to assist. … Fernanda truly seized the opportunity that transition presented to leverage her teaching abilities, training both technical and non-technical colleagues on how to use the Sitecore CMS.",
    name: "Stephanie Saia, PMP",
    role: "Web Strategy & Digital Product Management",
  },
  {
    quote:
      "What stood out most was her combination of creative skill and professional reliability. She took ownership of every project, came with solutions rather than problems, and communicated clearly throughout. You always knew where things stood and that the final result would be something to be proud of.",
    name: "Carlos Condado",
    role: "Sr. Product Marketing Manager for Red Hat AI",
    avatar: "/images/testimonials/carlos-condado.jpeg",
  },
  {
    quote:
      "Fernanda's ability to juggle multiple web projects was unlike any I have seen before and made a dramatic difference in the productivity level of our Marketing Operations team. Even under the tightest deadlines, Fernanda always met them and did it with a smile.",
    name: "Christina Ciampa",
    role: "Owner/Founder of All She Wrote Books",
  },
  {
    quote:
      "…she has been an incredible teammate and teacher. Fernanda took tremendous care in ensuring I got up to speed when I joined the team. She was patient in training me on our CMS and internal processes.",
    name: "Rachel Park-Fleming",
    role: "Project Management | Strategy and Operations",
  },
  {
    quote:
      "Fernanda exemplifies everything you want in a coworker. She's driven, dedicated, talented, flexible, a true team player and just a real joy to be around. During our time working together on athenahealth.com, she showed tenacity and patience, and really kept her cool under a tremendous amount of pressure.",
    name: "Jake Sargent",
    role: "Staff Content Designer, Netflix",
    avatar: "/images/testimonials/jake-sargent.jpeg",
  },
]

// ─── FAQ ──────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: 'What do you do as a [Your Role]?',
    answer:
      'Answer here. Keep it clear, specific, and focused on the value you deliver. Avoid jargon.',
  },
  {
    question: 'Who is the best fit to hire you?',
    answer:
      'Describe your ideal client or employer. Who benefits most from working with you?',
  },
  {
    question: 'What does a typical 30/60/90 day engagement look like?',
    answer:
      'Describe your onboarding and delivery process in concrete terms.',
  },
  {
    question: 'What does "high performance platform" mean in practice?',
    answer:
      'Answer here with specifics that demonstrate expertise.',
  },
  {
    question: 'How do you balance governance and speed without slowing teams down?',
    answer:
      'Your philosophy and approach here.',
  },
  {
    question: 'How do you apply AI in your work without creating risk?',
    answer:
      'Explain your approach to responsible AI use.',
  },
  {
    question: 'What is [your specialty term] and how is it different from [related term]?',
    answer:
      'A clear, expert explanation that demonstrates your knowledge.',
  },
  {
    question: 'How do you decide what to test first and measure impact?',
    answer:
      'Your testing and measurement philosophy.',
  },
  {
    question: 'How do you protect outcomes during transformation or M&A?',
    answer:
      'Your approach to managing risk during change.',
  },
  {
    question: 'Are you available for consulting or full-time roles?',
    answer:
      'Be clear about what you are open to.',
  },
]

// ─── Contact Section ──────────────────────────────────────────
export const CONTACT = {
  heading: "Let's talk about your",
  headingShimmer: 'web strategy',
  subtext:
    'If your web platform needs cleaner governance, stronger conversion, or a strategy that ties to growth — let\'s talk.',
  calLink: 'https://cal.com/yourname', // or Calendly link
  ctas: {
    primary: { label: 'Book a conversation', href: '#' },
    secondary: { label: 'View my work', href: '/#work' },
  },
}
