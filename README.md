# Thamod Shashin Dulanjana — Portfolio

A dark, glassmorphic ("liquid glass") portfolio built with React + Vite,
animated with Framer Motion. Built from the content in your CV.

## What's inside

- **React 19 + Vite 8** — fast dev server and build
- **Framer Motion** — the neon name reveal, scroll reveals, tilting project cards
- **Plain CSS** with a small design-token system (`src/index.css`) — no
  Tailwind, so every color/spacing value lives in one place and is easy to tweak
- All your content (name, projects, skills, education, contact links) lives in
  **one file**: `src/data/portfolio.js` — edit that file to update the site
  without touching any component

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with the finished static site. You can:

- Drag the `dist` folder into **[Netlify Drop](https://app.netlify.com/drop)**
- Deploy with **[Vercel](https://vercel.com)** (`vercel deploy`, framework: Vite)
- Push to GitHub and enable **GitHub Pages** (see below)

### Deploying to GitHub Pages

1. In `vite.config.js`, add `base: '/your-repo-name/'`
2. `npm run build`
3. Push the contents of `dist/` to a `gh-pages` branch (or use the
   `gh-pages` npm package / a GitHub Action)

## Editing content

Open `src/data/portfolio.js`:

- `profile` — name, tagline, summary, contact links, resume file
- `education` — your education timeline
- `projects` — each project's title, description, tech stack and GitHub link
- `skillGroups` — your technical skills, grouped and with icon keys
  (see the icon map in `src/components/Icon.jsx`)
- `aiTools`, `softSkills`, `languages` — the smaller tag lists

## Replacing the photo or CV

- Swap `src/assets/profile.jpg` with your own photo (same filename, or update
  the import in `src/components/Hero.jsx`)
- Replace `public/Thamod-Shashin-Dulanjana-CV.pdf` with an updated CV — the
  "CV" download button in the hero links straight to this file

## Notes

- A references section was intentionally left off the public site, since it
  lists other people's personal phone numbers and emails — keep that in the
  PDF version of your CV that you send directly to employers instead.
- Colors, fonts and spacing are defined as CSS variables at the top of
  `src/index.css` if you want to retheme the whole site quickly.
