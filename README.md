# Your Portfolio — Next.js

A personal portfolio site built with Next.js 15, Tailwind CSS, and TypeScript.
Modeled after [andekian.com](https://www.andekian.com) with the same design system.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## How to Customize

### ✏️ All your content lives in one file

**`lib/data.ts`** — Edit everything here:

| Export | What it controls |
|---|---|
| `SITE` | Your name, tagline, social links, email |
| `HERO` | Headline, subtext, video thumbnail, CTAs |
| `TYPEWRITER_PHRASES` | Rotating phrases in the "How I Work" section |
| `PARTNER_LOGOS` | Company logos in the marquee |
| `ABOUT` | Bio paragraphs, video, three pillars |
| `STATS` | 4 impact numbers with labels |
| `SKILLS_TAGS` | Tag cloud of your skills |
| `CAPABILITIES` | 6 capability tabs with bullets |
| `PLAYBOOK_SCENARIOS` | Dropdown options for the AI generator |
| `WORK_ITEMS` | Featured work/case studies |
| `BLOG_POSTS` | Blog post cards |
| `WRITING_SECTION` | Agency/studio description |
| `TESTIMONIALS` | Scrolling quote cards |
| `FAQ_ITEMS` | Accordion Q&A |
| `CONTACT` | CTA section and booking link |

### 📁 Media files to replace

Put these in `/public/`:

```
/thumbnails/thumbnail.png      → Hero video thumbnail
/videos/about.mp4              → Portrait video (9:16)
/videos/digital-strategy.mp4  → Capabilities section video
/logos/company-*.svg           → Partner logos
/work/icons/company-*.svg      → Work item logos
/images/testimonials/*.jpeg    → Testimonial avatars
/blog/*.jpg                    → Blog post images
/social-share.jpg              → OG/Twitter card image
/favicon.ico                   → Favicon
```

### 🎨 Design tokens

Colors, fonts, and effects are in `app/globals.css`.
Change the accent color by editing the `--accent` and `--primary` HSL values:

```css
--primary: 185 72% 48%;   /* teal — change hue to your brand color */
--accent:  185 72% 48%;   /* same by default */
```

---

## AI Playbook Generator

The generator calls the Anthropic API directly from the browser.
The API key is handled by the Anthropic infrastructure when deployed via Claude — 
for local dev or your own deployment, add your key to the fetch headers in
`components/PlaybookGenerator.tsx`:

```ts
headers: {
  'Content-Type': 'application/json',
  'x-api-key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY ?? '',
  'anthropic-version': '2023-06-01',
}
```

And add to `.env.local`:
```
NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-...
```

---

## Deploy

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Other platforms

```bash
npm run build
npm start
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          ← Design tokens, effects, animations
│   ├── layout.tsx           ← Root layout, fonts, metadata
│   └── page.tsx             ← Homepage — assembles all sections
├── components/
│   ├── Nav.tsx
│   ├── HeroSection.tsx
│   ├── TrustedBySection.tsx ← Typewriter + logo marquee
│   ├── AboutSection.tsx
│   ├── PlaybookGenerator.tsx← AI-powered interactive tool
│   ├── ImpactSection.tsx    ← Animated stats + skill tags
│   ├── CapabilitiesSection.tsx
│   ├── FeaturedWorkSection.tsx
│   ├── WritingSection.tsx   ← Blog with sparkle effect
│   ├── SocialProofSection.tsx← Testimonials marquee
│   ├── FaqSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts              ← ⭐ ALL YOUR CONTENT LIVES HERE
├── public/
│   ├── thumbnails/
│   ├── videos/
│   ├── logos/
│   ├── work/icons/
│   ├── blog/
│   └── images/testimonials/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
