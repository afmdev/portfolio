# Architecture Guide

## Project Structure

```
src/
├── components/        # Reusable UI components
├── routes/           # Page routes and layouts
├── stores/           # Global state management
├── styles/           # Design system and stylesheets
├── types/            # TypeScript type definitions
├── utils/            # Utility functions and helpers
├── app.tsx           # Root component
├── app.css           # Main stylesheet (imports modular styles)
├── entry-client.tsx  # Client-side entry point
├── entry-server.tsx  # Server-side entry point
└── global.d.ts       # Global type declarations
```

## Directory Breakdown

### `/src/components/`

Contains reusable UI components used across the application.

**Example structure:**

```
components/
├── Header.tsx
├── Footer.tsx
├── Navigation.tsx
├── Card.tsx
└── sections/
    ├── HeroSection.tsx
    └── ProjectsSection.tsx
```

### `/src/routes/`

SolidStart's file-based routing system. Each file maps to a route.

**Example structure:**

```
routes/
├── index.tsx         # Home page (/)
├── projects.tsx      # Projects page (/projects)
├── about.tsx         # About page (/about)
└── api/
    └── hello.ts      # API endpoint (/api/hello)
```

### `/src/stores/`

Global state management using SolidJS stores.

**Example structure:**

```
stores/
├── theme.ts          # Theme state (dark/light mode)
├── navigation.ts     # Navigation state
└── user.ts           # User state
```

### `/src/types/`

TypeScript type definitions and interfaces.

**Example structure:**

```
types/
├── components.ts     # Component prop types
├── api.ts            # API response types
└── models.ts         # Domain model types
```

### `/src/utils/`

Utility functions and helper modules.

**Example structure:**

```
utils/
├── animations.ts     # GSAP animation utilities
├── scroll.ts         # Scroll utilities
├── formatting.ts     # String/number formatting
└── api.ts            # API client utilities
```

### `/src/styles/`

Design system and modular stylesheets providing a consistent visual language across the application.

**File organization:**

```
styles/
├── variables.css     # Spacing, shadows, z-index, breakpoints, transitions
├── colors.css        # Color palette (light & dark modes)
├── typography.css    # Font families, sizes, weights, line heights
├── animations.css    # Keyframe animations and animation utilities
├── global.css        # Global element styles and resets
└── README.css        # Documentation about the styles directory
```

**Features:**

- Comprehensive design tokens as CSS variables
- Light and dark mode color variants
- Semantic color naming (success, error, warning, etc.)
- Custom color scale (not available in Tailwind)
- Typography hierarchy with responsive scaling
- Pre-built animations (fade, slide, scale, bounce, etc.)
- Global element styling (buttons, forms, links, etc.)
- Accessibility-first approach

## Key Technologies

### SolidStart

- Meta-framework built on SolidJS
- File-based routing
- Server-side rendering (SSR) capable
- Built on Vite for fast builds

### SolidJS

- Lightweight reactive library
- Compiler-driven approach
- Signals for reactivity
- No virtual DOM

### Tailwind CSS v4

- Utility-first CSS framework
- Integrated via Vite plugin
- Automatic class purging

### GSAP (GreenSock Animation Platform)

- Advanced animation library
- Timeline and tween support
- Performance optimized

### Lenis

- Smooth scrolling library
- Hardware-accelerated
- Adds elegant scroll experience

## Styling Strategy

The project uses a **design-system-first approach** with modular, component-specific CSS alongside global styles and Tailwind CSS utilities.

### Style Organization

Styles are organized into separate modules in `/src/styles/`:

1. **variables.css** - Design tokens
   - Spacing scale (1-32 units plus custom sizes)
   - Border radius scale
   - Shadow definitions
   - Z-index stack
   - Breakpoints
   - Transition timings and easing functions

2. **colors.css** - Color system
   - Light mode palette
   - Dark mode palette
   - Semantic naming (accent, success, error, warning, info)
   - Complete accent color scale (50-900)
   - Border and menu colors

3. **typography.css** - Font system
   - Font family stacks
   - Font size scale (xs to 7xl)
   - Heading sizes (h1-h6)
   - Font weights
   - Line heights
   - Letter spacing
   - Responsive sizing utilities
   - Line clamping utilities

4. **animations.css** - Motion system
   - 15+ keyframe animations
   - Animation utility classes
   - View transition API configuration
   - Hardware-accelerated transforms

5. **global.css** - Global styles
   - Body and html element styles
   - Form element defaults
   - Link and button styling
   - Scrollbar customization
   - Accessibility utilities
   - Print styles

### Global Styles

- `src/app.css` imports all modular styles in correct order
- Tailwind utilities applied via Vite plugin
- Variables available everywhere via CSS custom properties

### Component Styles

- Primarily use Tailwind CSS utility classes
- Component-scoped CSS when needed
- Access to all design tokens via `var(--token-name)`

### Custom Colors

Since Tailwind doesn't include all custom colors, they're defined as CSS variables:

```css
/* Direct CSS variable */
background: var(--accent);

/* Or with Tailwind's arbitrary value support */
class="bg-[color:var(--accent)]"
```

## Animation Architecture

### GSAP Usage

Used for complex, timeline-based animations:

```typescript
// Example: Entry animation
gsap.to(element, {
  duration: 1,
  opacity: 1,
  y: 0,
});
```

### Lenis Integration

Manages smooth scrolling across the site with event callbacks for scroll-based animations.

## State Management

SolidJS stores are used for global state:

```typescript
import { createStore } from "solid-js/store";

export const [theme, setTheme] = createStore({
  isDark: false,
  toggleDark: () => setTheme("isDark", (isDark) => !isDark),
});
```

## Routing

File-based routing provided by SolidStart:

- `routes/index.tsx` → `/`
- `routes/about.tsx` → `/about`
- `routes/projects/[id].tsx` → `/projects/:id`
- `routes/api/submit.ts` → `/api/submit`

## Build and Deployment

### Development

- `npm run dev` starts Vite dev server with HMR
- Changes reflect instantly

### Production

- `npm run build` creates optimized bundle
- `npm start` runs production server
- Builds are SSG/SSR capable

## TypeScript

- Strict mode enabled
- Full type safety across the project
- Global types in `global.d.ts`
- Component-specific types co-located with components

## Performance Considerations

1. **Code Splitting**: Automatic with Vite
2. **Tree Shaking**: Enabled in production builds
3. **Lazy Loading**: Use `lazy` from SolidJS Router for route-based code splitting
4. **Image Optimization**: Place images in `public/` for static serving
5. **CSS Optimization**: Tailwind purges unused styles

## Best Practices

1. Keep components small and focused
2. Use TypeScript for type safety
3. Leverage SolidJS reactivity (signals, effects, memos)
4. Use Tailwind utilities first before writing custom CSS
5. Document complex animations and interactions
6. Keep store logic simple and well-organized
7. Use proper semantic HTML
