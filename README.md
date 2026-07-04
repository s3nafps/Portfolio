# Mohamed Senator Portfolio

A playful, modern personal portfolio for Mohamed Senator: a Cloud / DevOps Support Engineer focused on Linux VPS operations, Docker deployments, monitoring, backups, troubleshooting, infrastructure automation, and AI-assisted development.

The redesign presents the site as a personal operating system for support-ready infrastructure work: large expressive headings, floating navigation, animated project architecture cards, a lab control panel, light and dark themes, and CV-backed professional content.

Current featured project:

- [CloudOps Rescue Kit](https://github.com/s3nafps/cloudops-rescue-kit) - VPS/Docker diagnostics, health checks, monitoring, backup/restore proof, incident reports, and client handover notes.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 App Router | Server rendering, metadata, sitemap, routes |
| TypeScript | Strict typing across data and UI |
| Tailwind CSS v4 | Global theme tokens and responsive styling |
| Framer Motion | Section reveal, modal, and card motion |
| Lucide React | Accessible interface icons |
| GitHub public API | Server-side repository loading |

## Component Structure

```text
src/app/
  layout.tsx       Metadata and root theme default
  page.tsx         Server page that loads GitHub projects
  sitemap.ts       Sitemap metadata route
  robots.ts        Robots metadata route
  globals.css      Light/dark theme, layout, motion, responsive styles

src/components/
  PortfolioClient.tsx
    Floating navigation, hero visual, project cards, modal, skills,
    experience, lab, contact, and structured data

src/lib/
  portfolio-data.ts
    Identity, featured project narratives, fallback projects, CV-backed
    experience, skills, lab, certification, and education content

  github-projects.ts
    Server-side GitHub repository loader with fallback data
```

## GitHub Project Loading

Projects are loaded on the server from:

```text
https://api.github.com/users/s3nafps/repos?per_page=100&sort=updated
```

Behavior:

- Uses Next.js `fetch` caching with `revalidate: 3600`
- Works without credentials for public repositories
- Supports an optional server-only `GITHUB_TOKEN`
- Excludes forks unless explicitly featured
- Marks archived repositories as archived
- Sorts featured projects first, then remaining repositories by activity
- Falls back to local featured project data if GitHub is unavailable
- Never fails the whole page because GitHub is down or rate-limited

Optional environment variable:

```bash
GITHUB_TOKEN=github_pat_or_token_here
```

Do not expose this token with a `NEXT_PUBLIC_` prefix.

## CV

The latest CV is published at:

```text
public/Mohamed_Senator_CV_2026.pdf
```

The legacy filename is also refreshed for compatibility:

```text
public/Mohamed_Senator_CV.pdf
```

Editable source lives in:

```text
cv/generate_cv_pdf.py
cv/README.md
```

Regenerate the public PDFs with:

```powershell
C:\Users\s3nafps\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe .\cv\generate_cv_pdf.py
```

## Local Development

```bash
npm install
npm run dev
```

The existing `next.config.ts` keeps the local base path as `/portfolio` when not running on Vercel. Local preview URL:

```text
http://localhost:3000/portfolio
```

## Validation

```bash
npx tsc --noEmit
npm run lint
npm run build
```

There are no test files in this repository yet, so no test suite runs by default.

## Vercel Deployment

Push the repository to GitHub and connect it to Vercel. On Vercel, the base path is `/` and server-side GitHub project revalidation works normally.

Recommended optional setting:

```text
GITHUB_TOKEN
```

This raises API reliability for GitHub project loading but is not required.

## Accessibility And Motion

- Semantic sections, buttons, links, headings, and dialog roles
- Keyboard-accessible project details modal
- Visible focus states
- Copy-email button with text feedback
- Hover-only effects are decorative; key information is always visible
- Touch devices avoid cursor tilt behavior
- `prefers-reduced-motion` disables or simplifies animations
- Light theme is default, with a fully designed dark theme toggle

## Animation Behavior

Animations are implemented with SVG, CSS, and Framer Motion:

- Hero infrastructure control center
- Section reveal transitions
- Project cards with project-specific architecture flows
- Modal open and close transitions
- Expandable experience timeline
- Lab easter egg triggered from the AI workflow tile

Animations are intentionally lightweight and avoid video, audio, and heavy 3D scenes.

## Content Notes

The site describes vibe coding professionally:

> I use AI coding agents to accelerate research, prototyping, and implementation while remaining responsible for architecture, security decisions, testing, infrastructure, and deployment.

The portfolio intentionally does not display Mohamed's phone number, private infrastructure details, credentials, private IP addresses, fake metrics, testimonials, client logos, or invented screenshots.

## License

Copyright 2026 Mohamed Senator. All rights reserved.
