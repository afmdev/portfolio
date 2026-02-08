# Styling Guide

## Overview

The portfolio uses a modular, design-system-first approach to styling. All styles are organized into specific files and imported into the main `app.css` for better maintainability and scalability.

## Style Architecture

```
src/styles/
├── variables.css    # Spacing, shadows, z-index, breakpoints, transitions
├── colors.css       # Color palette (light & dark modes)
├── typography.css   # Font sizes, weights, line heights
├── animations.css   # Keyframes and animation utilities
└── global.css       # Global element styles and resets
```

And in the root:
```
src/app.css          # Main stylesheet that imports everything
```

## Design Tokens

### Colors

Color tokens are defined in `styles/colors.css` and follow a semantic naming approach:

**Primary Colors:**
- `--bg-primary`: Main background
- `--bg-secondary`: Secondary background
- `--bg-tertiary`: Tertiary background

**Text Colors:**
- `--text-primary`: Main text
- `--text-secondary`: Secondary text
- `--text-tertiary`: Tertiary/hint text

**Accent Colors:**
- `--accent`: Primary accent (purple)
- `--accent-light`: Light variant
- `--accent-dark`: Dark variant
- `--accent-50` through `--accent-900`: Full color scale

**Semantic Colors:**
- `--success`: Success/positive actions
- `--warning`: Warning states
- `--error`: Error/danger states
- `--info`: Information states
- `--secondary`: Secondary accent (orange)

**Usage:**
```css
button {
  background-color: var(--accent);
  color: white;
}
```

### Typography

Typography tokens are in `styles/typography.css`:

**Font Families:**
- `--font-sans`: Default sans-serif stack
- `--font-mono`: Monospace for code
- `--font-serif`: Serif alternative

**Font Sizes:**
```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
/* ... up to --text-7xl */

--heading-h1: 3.75rem;
--heading-h2: 3rem;
/* ... down to --heading-h6 */
```

**Font Weights:**
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

**Line Heights:**
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Usage:**
```html
<h1 style="font-size: var(--heading-h1); font-weight: var(--font-bold);">
  Title
</h1>

<p style="font-size: var(--text-base); line-height: var(--leading-relaxed);">
  Content
</p>
```

### Spacing

Spacing tokens in `styles/variables.css`:

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-4: 1rem;      /* 16px */
--spacing-8: 2rem;      /* 32px */
--spacing-16: 4rem;     /* 64px */
/* ... and more */
```

**Usage with Tailwind:**
```html
<div class="p-4 gap-8 mb-16">
  Content
</div>
```

Or with CSS variables:
```css
margin: var(--spacing-4);
padding: var(--spacing-8);
gap: var(--spacing-6);
```

### Shadows

Shadows in `styles/variables.css`:

```css
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

**Usage:**
```css
box-shadow: var(--shadow-lg);
```

### Animations

Animations are defined in `styles/animations.css` and include:

**Keyframes Available:**
- `fade-in`, `fade-out`
- `slide-in-top`, `slide-in-bottom`, `slide-in-left`, `slide-in-right`
- `scale-up`, `scale-down`
- `pulse`, `bounce`, `spin`, `wiggle`
- `float`, `glow`, `shimmer`

**Usage with Classes:**
```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-in-bottom">Slides in from bottom</div>
<div class="animate-float">Floats continuously</div>
```

**Custom Animation with GSAP:**
```typescript
import gsap from 'gsap';

gsap.to(element, {
  duration: 1,
  opacity: 1,
  y: 0,
  ease: 'power3.out'
});
```

### Border & Radius

```css
--radius-0: 0;
--radius-4: 0.5rem;
--radius-8: 1rem;
--radius-full: 9999px;
```

## Using Custom Colors

Since Tailwind doesn't include all custom colors, use CSS variables directly:

```css
/* For a custom color defined in colors.css */
button {
  background-color: var(--accent);
}

/* Or use Tailwind + variables */
<div class="bg-[color:var(--accent)]">Custom colored div</div>
```

## Dark Mode

Dark mode colors are automatically handled by CSS custom properties in the `html.dark` selector:

```html
<!-- Dark mode class is applied to html element -->
<html class="dark">
  <!-- Styles automatically use dark mode tokens -->
</html>
```

No need to use Tailwind's `dark:` prefix for CSS variables - they're already semantic.

## Responsive Design

Use Tailwind breakpoints:

```html
<div class="text-sm md:text-base lg:text-lg">
  Text size changes responsively
</div>
```

CSS variables also adjust for mobile:

```css
@media (max-width: 640px) {
  :root {
    --heading-h1: 2.25rem;  /* Smaller on mobile */
  }
}
```

## Global Styles

`styles/global.css` includes:
- Body and root element styles
- Link and button defaults
- Form element styling
- Scrollbar customization
- Selection styling
- Print styles

These are applied automatically to all elements.

## Adding New Design Tokens

1. **For colors**: Add to `styles/colors.css` in both light and dark mode sections
2. **For typography**: Add to `styles/typography.css`
3. **For spacing/shadows**: Add to `styles/variables.css`
4. **For animations**: Add keyframes and utility classes to `styles/animations.css`

Then import and test in your components.

## Performance Considerations

- CSS variables have minimal performance impact
- All animations use GPU-accelerated properties (transform, opacity)
- Tailwind purges unused utilities in production
- Semantic naming makes styles predictable and reusable

## Troubleshooting

**Colors not applying:**
- Check if you're using `var(--color-name)` correctly
- Verify the color is defined in the appropriate light/dark section
- Ensure dark mode class is on `<html>` element

**Animations not working:**
- Use animation utility classes: `animate-fade-in`
- For complex animations, use GSAP (already imported)
- Check for `prefers-reduced-motion` media query

**Custom breakpoints needed:**
- Add to `styles/variables.css`
- Define in Tailwind's `tailwind.config.js` if using Tailwind classes

## Resources

- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [GSAP Animation Library](https://greensock.com/gsap)
- [Tailwind CSS Grid](https://tailwindcss.com/docs)
- [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
