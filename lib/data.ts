// ============================================================
//  PORTFOLIO CONTENT — Edit everything here
// ============================================================

export const SITE = {
  name: 'Fernanda Passos Walker',
  tagline: 'Modern web platforms for enterprise growth.\nCMS, code, and execution, led by a hands on developer.',
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
    "I'm a senior web developer and digital experience lead with 15+ years of experience building accessible, high performing websites, scalable CMS systems, and marketing technology integrations that help teams launch faster and grow smarter.",
  roleLabel: 'React & Next.js | Enterprise WordPress | Reusable CMS Components | Accessibility | SEO | Marketing Tech',
  videoThumbnail: '/thumbnails/thumbnail.png', // replace with your image
  videoId: 'vbcfczd6v7', // Wistia or YouTube embed ID (leave blank to just show image)
  ctas: {
    primary: { label: 'View Work', href: '/#work' },
    secondary: { label: 'Book a conversation', href: '/#contact' },
    tertiary: { label: 'Latest Resume', href: '/resume' },
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
  heading: 'The developer behind the',
  headingShimmer: 'platform',
  subheading: 'Modern code. Scalable CMS systems. Web experiences teams can actually use.',
  video: '/videos/about.mp4', // 9:16 portrait video
  name: 'Fernanda Passos Walker',
  role: 'Your Role & Specialty',
  paragraphs: [
    'I build websites that are more than pages. My work sits at the center of development, CMS architecture, accessibility, SEO, analytics, and marketing technology, so teams can launch faster without creating more complexity.',
    'With 15+ years in web development, I have owned enterprise web platforms, built reusable CMS components, supported global websites, improved accessibility, and connected forms, tracking, and content workflows across marketing systems.',
    'I am most useful when a website looks fine on the outside, but the system behind it needs to be faster, cleaner, easier to manage, and ready to scale.',
  ],
  pillars: [
    {
      icon: 'Crosshair',
      title: 'CMS Systems',
      description: 'Build once. Reuse often.',
    },
    {
      icon: 'Layers',
      title: 'Performance',
      description: 'Fast. Accessible. Findable.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Marketing Tech',
      description: 'Forms. Tracking. Insights.',
    },
  ],
}

// ─── Impact Stats ─────────────────────────────────────────────
export const STATS = [
  {
    value: '15+',
    label: 'Years in Web Development',
    description: 'Building websites, CMS systems, and digital experiences across enterprise teams.',
  },
  {
    value: '9+',
    label: 'Years in Enterprise Web',
    description: 'CyberArk, Shorelight, and athenahealth experience across CMS, campaigns, accessibility, SEO, and web operations.',
  },
  {
    value: '9',
    label: 'Languages Supported',
    description: 'Managing global web localization workflows across multilingual enterprise websites.',
  },
  {
    value: '96',
    label: 'Accessibility Score Improved',
    description: 'Helping raise accessibility quality through reusable templates, audits, and design system improvements.',
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
      'Built and supported the CMS systems, reusable components, accessibility improvements, SEO foundations, and marketing integrations behind a global enterprise website.',
    icon: '/logos/cyberark-icon.svg',
    href: 'https://www.cyberark.com',
  },
  {
    slug: 'project-two',
    company: 'Shorelight — Global campaign web experiences',
    tag: 'Campaigns',
    tagline: '',
    description:
      'Built microsites, landing pages, and web applications that connected Marketo, Salesforce, SEO, and front end development for international student recruitment.',
    icon: '/logos/shorelight-logo.png',
    href: 'https://www.shorelight.com',
  },
  {
    slug: 'project-three',
    company: 'athenahealth — Brand refresh and Sitecore development',
    tag: 'Digital Experience',
    tagline: '',
    description:
      'Built responsive Sitecore experiences during a major website redesign and brand refresh, helping improve user engagement and support growth across traffic, leads, and sales meetings.',
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
export const TESTIMONIALS = [
  {
    quote:
      "Fernanda exemplifies everything you want in a coworker. She's driven, dedicated, talented, flexible, a true team player and just a real joy to be around. During our time working together on athenahealth.com, she showed tenacity and patience, and really kept her cool under a tremendous amount of pressure. I always felt reassured knowing Fernanda was on the job because, despite all the challenges of the project, I knew she'd deliver the best results and she'd do so on time, with a smile.",
    name: 'Jake Sargent',
    role: 'Staff Content Designer, Netflix',
    avatar: '/images/testimonials/jake-sargent.jpeg',
  },
  {
    quote:
      "Fernanda is a killer web developer who can seamlessly take UX/Design specs and translate them into web experiences. Fernanda not only heavily contributed to our ongoing front-end web experience (and a major redesign effort), but she also fully took on our global localization process. This was a new area for her to learn and she absolutely killed it. Plus, she did it with the grace and positivity you come to expect when working with her.",
    name: 'Sean Galliher',
    role: 'VP of Marketing at Second Front Systems',
    avatar: '/images/testimonials/sean-galliher.jpeg',
  },
  {
    quote:
      'Fernanda brings a strong combination of technical talent, hard work, and genuine kindness to her role as a Senior Web Developer. I always had complete confidence working with her, knowing the project would go smoothly and exceed expectations. She is a highly skilled developer and a fantastic teammate.',
    name: 'David Lawler',
    role: 'Director, Creative at Palo Alto Networks',
    avatar: '/images/testimonials/david-lawler.jpeg',
  },
  {
    quote:
      'Beyond her development expertise, Fernanda truly owns processes end-to-end bringing structure, clarity, and consistency that makes a real difference for our team\'s effectiveness. She is also a standout collaborator, seamlessly partnering across our Center of Excellence, Localization, Legal, UI/UX, Design and Demand Generation to ensure alignment and amplify results.',
    name: 'Jim Sabbia',
    role: 'Director, Web Strategy and Development at Barracuda',
    avatar: '/images/testimonials/jim-sabbia.jpeg',
  },
  {
    quote:
      "Fernanda's work was visually polished, well-structured, and always delivered on time. What stood out most was Fernanda's combination of creative skill and professional reliability. She took ownership of every project, came with solutions rather than problems, and communicated clearly throughout. You always knew where things stood and that the final result would be something to be proud of.",
    name: 'Carlos Condado',
    role: 'Sr. Product Marketing Manager for Red Hat AI',
    avatar: '/images/testimonials/carlos-condado.jpeg',
  },
  {
    quote:
      "Fernanda was someone the team could genuinely count on when it mattered. She had a quiet dedication that spoke volumes. When deadlines were tight, she often worked late into the evening to see a project through completion. She's a talented developer and an even better colleague. Any organization would be lucky to have Fernanda on their web team. She brings both technical depth and the drive to make it happen, as well as being a kind, caring human being.",
    name: 'Anna Walsh',
    role: 'VP Marketing',
    avatar: '/images/testimonials/anna-walsh.jpeg',
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
  heading: "Let's build better",
  headingShimmer: 'web systems',
  subtext:
    'If you are modernizing your platform, adopting AI, or navigating change, I can help you move faster with fewer surprises.',
  calLink: 'https://cal.com/yourname', // or Calendly link
  ctas: {
    primary: { label: 'Book a conversation', href: '#' },
    secondary: { label: 'View my work', href: '/#work' },
  },
}
