# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server at `localhost:4321`
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `npm run astro` — Run Astro CLI (e.g., `npm run astro add [integration]`)

## Architecture

Astro 5 portfolio/agency site implementing brutalist design with thick borders, offset shadows, and flat colors. Uses Tailwind CSS v4 (Vite plugin), MDX blog support, and sitemap generation.

### Key Structure

- **`src/pages/index.astro`** — Full-page homepage with sections: Hero (tilted image, large title), animated marquee (CSS keyframes), value propositions (2-column grid), 6-service cards, CTA banner, 3-card testimonials, blog preview, final CTA section, and floating action button (FAB). All styling inline with responsive breakpoints.
- **`src/layouts/Layout.astro`** — Standard page layout with Header and Footer. Used for subpages (`/services`, `/blog`, `/contact`, etc.).
- **`src/layouts/BlogPost.astro`** — Blog post layout wrapping Layout.
- **`src/components/Header.astro`** — Sticky header with logo, navigation, GitHub icon link, and CTA button. Mobile hamburger menu toggles nav on screens ≤768px.
- **`src/components/Footer.astro`** — Dark navy footer with 3-column grid: brand + social buttons, navigation links, and network links. Responsive: 2-column at 768px, 1-column at 480px.
- **`src/content/blog/`** — Blog posts as `.md`/`.mdx` files with frontmatter schema: `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`.
- **`src/consts.ts`** — Global site constants.
- **`src/styles/global.css`** — Tailwind v4 integration via `@import "tailwindcss"`, Google Fonts imports (Space Grotesk, Manrope, Work Sans), `.prose` styles for blog, and marquee animation keyframes.

### Design System

- **Colors**: Light cream background `#fcf8ff`, dark text `#1a1a2e`, accent green `#3f6355`, navy footer `#1a1a2e`, secondary tints (`#e8deff` purple, `#c4ebd9` mint, `#ffb99c` salmon)
- **Typography**: Space Grotesk (headings, nav, uppercase labels), Manrope (body text), Work Sans (auxiliary)
- **Spacing**: Rem-based with `clamp()` for fluid scaling across breakpoints
- **Effects**: 4px solid borders, 8px offset shadows (`box-shadow: 8px 8px 0 0 #191c1c`), hover states with transform and shadow changes
- **Tailwind CSS v4** — Integrated via `@tailwindcss/vite` plugin; `@theme` block defines custom fonts

### Dependencies & CDN Resources

- **Google Fonts** — Space Grotesk, Manrope, Work Sans (preconnect + stylesheet imports)
- **Tailwind CSS v4** — Vite plugin integration, no PostCSS config
- **Astro Integrations**: MDX (for blog), RSS, and Sitemap
- No external animation libraries (CSS animations only)

### Responsive Design

- **Mobile-first approach** with breakpoints at 480px, 768px, and 1024px
- **Fluid typography** using `clamp()` for scaling between breakpoints (e.g., `clamp(1.5rem, 5vw, 3.5rem)`)
- **Grid layouts** adapt: 1-column (mobile) → 2-column (tablet) → 3-column+ (desktop)
- **Fixed elements**: Header sticky top, FAB fixed bottom-right; spacing adjusted per breakpoint
- **Mobile hamburger**: Nav hidden on ≤768px, toggled via JavaScript

### Configuration Notes

- **`astro.config.mjs`** — `site` is currently set to `https://example.com`; update to actual domain for sitemap/RSS/canonical URLs
- No linting or testing tools configured
- TypeScript in strict mode (`extends: astro/tsconfigs/strict`)

### Content

- Blog uses Astro Content Collections with glob loader (`src/content/blog/`)
- RSS feed at `/rss.xml` and sitemap at `/sitemap-index.xml`
- Pages: `/`, `/services`, `/blog`, `/contact`, and other subpages
- English content throughout
