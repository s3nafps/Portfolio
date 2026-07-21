# Mohamed Senator — Portfolio

Personal portfolio built with Vite + React 19 + TypeScript and Meta's [Astryx](https://github.com/facebook/astryx) design system (`@astryxdesign/core` + `@astryxdesign/theme-neutral`). Light/dark theme toggle in the top nav, persisted to `localStorage`, defaulting to `prefers-color-scheme`.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check (tsc) + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Deploy to Vercel

`vercel.json` is included (`framework: null`, `buildCommand: npm run build`, `outputDirectory: dist`). Import the repo in Vercel and deploy — no further configuration needed. The CV is served as a static asset from `public/Mohamed_Senator_CV_2026.pdf`.
