You are a senior Staff Software Engineer, Product Designer, and Personal Branding Consultant.

Your task is to build and maintain a world-class personal portfolio website for me.

---

## Owner

**Name:** Fathul Muiin
**Profession:** Full Stack Software Engineer
**Experience:** 7+ years
**Email:** fathulmuiin@gmail.com
**GitHub:** https://github.com/fmuiin
**LinkedIn:** https://linkedin.com/in/fmuiin
**Website:** https://fmuiin.github.io

**Primary Expertise:**

- PHP & Laravel
- PostgreSQL & MySQL
- AWS (EC2, RDS, S3, Lambda)
- Docker & CI/CD
- Redis & Caching
- Vue.js & React
- Next.js & TypeScript
- REST API & GraphQL
- AI Integration (OpenAI API)
- Software Architecture & System Design

---

## Mission

Create a portfolio that helps recruiters, founders, engineering managers, and clients immediately understand:

- Who I am
- What I build
- How I think
- My engineering experience
- My open-source contributions
- My career journey
- Why they should hire me

The website should feel like a modern engineering portfolio, not a resume.

---

## Design Principles

**Style:**

- Minimal, elegant, premium
- Fast and developer-focused
- Apple-level simplicity
- Linear.app inspired
- Vercel inspired
- GitHub inspired

**Color Palette:**

| Token      | Value   | Usage                  |
| ---------- | ------- | ---------------------- |
| Background | #0B1120 | Page background        |
| Surface    | #111827 | Cards, elevated areas  |
| Primary    | #2563EB | Links, CTAs, accents   |
| Accent     | #38BDF8 | Hover states, badges   |
| Success    | #22C55E | Success indicators     |
| Text       | #F8FAFC | Primary text           |
| Muted      | #94A3B8 | Secondary text         |
| Border     | #1E293B | Borders, separators    |

**Rules:**

- No unnecessary gradients
- No flashy animations (subtle Framer Motion only)
- Use whitespace generously
- Dark mode only
- Mobile-first responsive design

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 16 (App Router)             |
| Language    | TypeScript 5 (strict mode)          |
| React       | React 19                            |
| Styling     | Tailwind CSS 4                      |
| Animation   | Framer Motion 12                    |
| Icons       | Lucide React                        |
| Content     | MDX (next-mdx-remote 6, RSC)       |
| MDX Plugins | rehype-highlight, rehype-slug, remark-gfm |
| Cmd Palette | cmdk                                |
| Utilities   | clsx + tailwind-merge               |
| Deployment  | GitHub Pages (Static Export)        |
| CI/CD       | GitHub Actions                      |
| Linting     | ESLint 9 + Prettier                 |
| SEO         | Full metadata, OpenGraph, JSON-LD, RSS, Sitemap |
| Accessibility | WCAG AA compliant                 |

---

## Site Structure & Pages

```
/                    → Landing page (Hero, About, Projects, Open Source, Experience, Skills, Articles, Contact CTA)
/about               → Professional summary, philosophy, mindset, interests
/projects            → Project listing (all projects)
/projects/[slug]     → Individual project detail page
/blog                → Blog listing with tag filtering
/blog/[slug]         → Individual blog post (MDX, TOC, prev/next, reading time)
/experience          → Career timeline
/open-source         → GitHub repos (API-fetched) + stats
/resume              → Resume/CV page
/contact             → Contact form (Formspree) + social links
/uses                → Hardware, software, tools
/now                 → Current focus (nownownow.com inspired)
```

---

## Folder Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (fonts, metadata, global components)
│   ├── page.tsx                  # Home page (composes section components)
│   ├── globals.css               # Tailwind 4 config + custom theme + prose styles
│   ├── not-found.tsx             # Custom 404
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── now/page.tsx
│   ├── open-source/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── resume/page.tsx
│   └── uses/page.tsx
├── components/
│   ├── layout/                   # Navbar, Footer, PageWrapper
│   ├── sections/                 # Homepage section components
│   └── shared/                   # Reusable components (cards, forms, etc.)
├── content/
│   ├── blog/                     # MDX blog posts
│   └── data/                     # TypeScript data files (projects, experience, skills, etc.)
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities, constants, content helpers
│   ├── constants.ts              # Site config, navigation, social links
│   ├── github.ts                 # GitHub API integration
│   ├── mdx.ts                    # Blog post parsing & querying
│   ├── projects.ts               # Project data helpers
│   └── utils.ts                  # cn() helper, formatDate()
├── types/                        # TypeScript interfaces
├── scripts/                      # Build scripts (RSS, sitemap generation)
├── public/                       # Static assets (images, generated feed.xml, sitemap.xml)
└── .github/workflows/deploy.yml  # GitHub Actions deployment
```

---

## Home Page Sections

1. **Hero** — Headline, subheadline, 3 CTAs (View Projects, Download Resume, Contact Me)
2. **About Preview** — Short professional summary
3. **Featured Projects** — Top 6 projects with cards
4. **Open Source Preview** — GitHub repos and stats
5. **Experience Preview** — Career timeline summary
6. **Skills Section** — 5 categories, 25 skills
7. **Latest Articles** — Recent blog posts
8. **Contact CTA** — Call to action with links

---

## Key Features

### Command Palette (Cmd+K)

- Full site navigation
- Blog post search
- Quick actions (copy email, download resume, open GitHub/LinkedIn)
- Built with cmdk library

### Blog System

- MDX content with frontmatter (title, excerpt, date, tags)
- Syntax highlighting (rehype-highlight)
- GitHub Flavored Markdown (remark-gfm)
- Auto-generated heading IDs (rehype-slug)
- Table of contents (sticky sidebar on desktop)
- Reading time estimation
- Previous/next post navigation
- Tag filtering
- RSS feed (auto-generated at build time)

### GitHub Integration

- Fetches repos from GitHub API (1-hour revalidation)
- Displays stars, forks, language, description
- User stats (repos, stars, forks, followers)
- Fallback data for offline/rate-limited builds

### SEO & Discovery

- Full OpenGraph and Twitter Card metadata
- JSON-LD structured data (Person schema)
- Auto-generated sitemap.xml
- Auto-generated RSS feed (feed.xml)
- Robots configuration
- Canonical URLs

### Animations

- Subtle scroll-triggered fade/slide via Framer Motion
- AnimatedSection wrapper for reuse
- Hero staggered entrance
- Mobile menu transitions
- No flashy or distracting effects

### Accessibility

- Skip-to-content link
- Focus-visible styles
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigable

### Other Features

- Global scroll progress bar
- Reading progress indicator (blog posts)
- Visitor counter (hits.seeyoufarm.com)
- Contact form via Formspree
- Copy email to clipboard button
- Static export for GitHub Pages

---

## Content Data

### Projects (6 featured)

1. **W.Media Ticketing System** — Enterprise event ticketing, microservices, 10K+ concurrent users
2. **TrustEvolveAI** — AI-powered trust scoring, ML pipeline, OpenAI integration
3. **CareerLift** — Career platform, AI resume analysis, job matching
4. **GrowthPedia** — Knowledge management, experiment tracking, Elasticsearch
5. **Blips Life** — Social wellness platform, gamification, React Native
6. **Reinsurance Management System** — Enterprise insurance, complex business logic, DDD

### Experience (4 positions)

1. **W.Media** — Senior Full Stack Engineer (2022 - Present)
2. **TechCorp Solutions** — Full Stack Developer (2020 - 2022)
3. **StartupHub** — Backend Developer (2018 - 2020)
4. **Digital Agency Co** — Junior Developer (2016 - 2018)

### Skills (5 categories, 25 total)

- Languages: PHP, TypeScript, JavaScript, Python, SQL
- Frameworks: Laravel, Vue.js, React, Next.js, Tailwind CSS
- Databases: PostgreSQL, MySQL, Redis, Elasticsearch
- Cloud & DevOps: AWS, Docker, CI/CD, Nginx, Linux
- Tools: Git, REST API, GraphQL, AI Integration, Software Architecture

### Blog Posts (3 articles)

- AI Integration Patterns
- Building Scalable APIs with Laravel
- Docker Development Workflow

---

## Build & Development

```bash
# Development
npm run dev

# Build (includes prebuild RSS/sitemap generation)
npm run build

# Lint
npm run lint
npm run lint:fix

# Format
npm run format
```

### Build Pipeline

1. `prebuild`: Runs `scripts/generate-rss.mjs` → generates `public/feed.xml` + `public/sitemap.xml`
2. `build`: Next.js static export → outputs to `./out` directory
3. Deploy: GitHub Actions uploads `./out` to GitHub Pages

---

## Deployment

- **Platform:** GitHub Pages
- **Trigger:** Push to `main` branch or manual dispatch
- **Process:** GitHub Actions → Node 20 → `npm ci` → `npm run build` → Upload `./out` → Deploy
- **URL:** https://fmuiin.github.io

---

## Performance Targets

- Lighthouse Performance: > 95
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 95
- Lighthouse SEO: > 95
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## Code Quality Standards

- Strict TypeScript (no `any`)
- ESLint + Prettier enforced
- Consistent naming conventions
- Component composition over inheritance
- Server Components by default, Client Components only when needed
- Path aliases (`@/` → project root)
- Proper error handling with fallbacks

---

## Navigation

**Navbar items:**

- Home
- Projects
- Blog
- Experience
- Open Source
- Resume
- Contact

Sticky navbar with scroll-aware transparency. Mobile hamburger menu with Framer Motion animation.

---

## Footer

- Copyright notice
- Social links (GitHub, LinkedIn, Email)
- "Built with Next.js" credit
- Visitor counter
- Cmd+K shortcut hint

---

## Important Notes

- This is a **Next.js 16** project — APIs, conventions, and file structure may differ from older versions. Always check `node_modules/next/dist/docs/` for the latest guidance.
- Tailwind CSS 4 uses CSS-based configuration (`@theme inline` in `globals.css`), not `tailwind.config.js`.
- The site is **dark mode only** — no light mode toggle.
- All pages use **static generation** (no server-side runtime).
- GitHub API calls use `next: { revalidate: 3600 }` with fallback data for builds without API access.
- MDX rendering uses `next-mdx-remote/rsc` (React Server Components compatible).
