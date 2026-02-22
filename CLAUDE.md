# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Astro)
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

## Architecture

Astro 5 portfolio/agency site with Tailwind CSS v4, MDX blog support, and sitemap generation.

### Key Structure

- **`src/pages/index.astro`** — Full-scroll-snap homepage with 6 service sections, projects, about, and contact. Contains inline WebGL2 gradient shader and Three.js wireframe animations per service.
- **`src/scripts/three-animations.js`** — Three.js animations for service canvases (loaded via CDN ESM import from `three@0.160.0`). Duplicates logic also exists inline in `index.astro` (guarded by `window.THREE`).
- **`src/layouts/Layout.astro`** — Standard page layout (Header commented out, Footer active). Used by subpages.
- **`src/layouts/BlogPost.astro`** — Blog post layout wrapping Layout.
- **`src/content/blog/`** — Blog posts as `.md`/`.mdx` files with frontmatter schema: `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`.
- **`src/consts.ts`** — Global site constants (`SITE_TITLE`, `SITE_DESCRIPTION`).
- **`src/styles/global.css`** — Base styles with CSS custom properties (`--accent`, `--black`, `--gray`, etc.) and Atkinson font-face declarations.

### Design System

- Dark theme on homepage: background `#0a0f0d`, accent emerald `#10b981` / `#00ff88`
- Light theme on subpages via `global.css` variables
- Headings use Satoshi font (loaded via Fontshare on homepage), body uses Atkinson
- Tailwind CSS v4 integrated via `@tailwindcss/vite` plugin (not PostCSS)

### Content

- Blog uses Astro Content Collections with glob loader (`src/content/blog/`)
- RSS feed at `/rss.xml`
- Pages: `/`, `/services`, `/projects`, `/blog`, `/contact`, `/about`
- Mixed language content (Spanish UI text on homepage, English service copy)
