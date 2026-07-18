# Mohamed Senator — Portfolio

Personal portfolio for **Mohamed Senator**, Cloud & DevOps Support Engineer
based in Algiers, Algeria.

Live: **https://mohamedsenator.vercel.app**

## What's inside

Single-page site covering:

- **Profile** — background, certification (Google Cloud ACE, Feb 2026), education
- **Selected work** — public infrastructure and automation projects
- **Working set** — support operations, systems & network, cloud & DevOps, automation
- **Security research** — authorized bug bounty methodology and platform profiles
- **Experience** — AGCE, Agrofilm Packaging, Samsung, IRIS Electronics / Brandt
- **Contact** — email, LinkedIn, GitHub, HackerOne, plus CV download

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (custom design tokens in `src/index.css`)
- Typography: Fraunces, Inter, JetBrains Mono (Google Fonts)
- No component library, no analytics, no trackers

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to dist/
```

Deploys on Vercel as a Vite project (build command `npm run build`,
output directory `dist`).

## Content

All copy lives in `src/lib/data.ts` — edit there to update projects,
experience, links, and focus areas.

© 2026 Mohamed Senator
