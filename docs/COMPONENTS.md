# Components Documentation

This guide documents the components available in the portfolio project.

## Creating Components

All components should be created in the `src/components/` directory and follow these conventions:

```typescript
import { JSX } from 'solid-js';

interface ComponentProps {
  // Define props
}

export default function MyComponent(props: ComponentProps): JSX.Element {
  return (
    <div class="...">
      {/* Component content */}
    </div>
  );
}
```

## Component Guidelines

### Naming

- Use PascalCase for component names
- File name matches component name
- One component per file (unless internal sub-components)

### Props

- Define clear interfaces for component props
- Use TypeScript for type safety
- Document props with JSDoc comments

### Styling

- Use Tailwind CSS utility classes
- Keep component-specific styles in the component file when needed
- Use global CSS variables for design tokens

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Test with keyboard navigation
- Ensure sufficient color contrast

## Common Components

Create these commonly needed components:

### Header/Navigation

```typescript
// src/components/Header.tsx
interface HeaderProps {
  sticky?: boolean;
}

export default function Header(props: HeaderProps) {
  // Navigation component
}
```

### Footer

```typescript
// src/components/Footer.tsx
export default function Footer() {
  // Footer component
}
```

### Card

```typescript
// src/components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  children?: any;
}

export default function Card(props: CardProps) {
  // Reusable card component
}
```

### Button

```typescript
// src/components/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: any;
}

export default function Button(props: ButtonProps) {
  // Reusable button component
}
```

## Section Components

Create specialized section components for different portfolio sections:

### HeroSection

Landing section with introduction and call-to-action.

### ProjectsSection

Grid or list of portfolio projects.

### SkillsSection

Display of skills and expertise.

### ContactSection

Contact information and contact form.

## Animated Components

Components with GSAP animations:

```typescript
import gsap from 'gsap';
import { onMount } from 'solid-js';

export default function AnimatedComponent() {
  let element: HTMLDivElement;

  onMount(() => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: 0
    });
  });

  return <div ref={element} class="opacity-0 translate-y-4">Content</div>;
}
```

## Scroll-Triggered Animations

Use intersection observer or GSAP ScrollTrigger:

```typescript
import { onMount } from 'solid-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedComponent() {
  let element: HTMLDivElement;

  onMount(() => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      opacity: 1,
      y: 0
    });
  });

  return <div ref={element} class="opacity-0 translate-y-4">Content</div>;
}
```

## Component Composition

Combine components for complex layouts:

```typescript
export default function HomePage() {
  return (
    <>
      <Header sticky />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
```

## Managing Component State

Use SolidJS signals for component state:

```typescript
import { createSignal, JSX } from 'solid-js';

export default function TabComponent(): JSX.Element {
  const [activeTab, setActiveTab] = createSignal('overview');

  return (
    <div>
      <button onClick={() => setActiveTab('overview')}>Overview</button>
      <button onClick={() => setActiveTab('details')}>Details</button>

      <Show when={activeTab() === 'overview'}>
        {/* Overview content */}
      </Show>
      <Show when={activeTab() === 'details'}>
        {/* Details content */}
      </Show>
    </div>
  );
}
```

## Performance Tips

1. **Memoization**: Use `createMemo` for expensive computations
2. **Effects**: Use `createEffect` for side effects
3. **Lazy Evaluation**: Leverage SolidJS's signal reactivity
4. **Avoid Unnecessary Renders**: Components only re-render when their signals change
5. **Code Splitting**: Use dynamic imports for large components

```typescript
import { lazy } from "solid-js";

const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

## Testing Components

Create tests in a `__tests__` directory:

```typescript
// src/components/__tests__/Button.test.ts
import { render } from 'solid-testing-library';
import Button from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    const { getByText } = render(() => <Button>Click me</Button>);
    expect(getByText('Click me')).toBeDefined();
  });
});
```

## Component Library Structure

Organize components by feature:

```
components/
├── common/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Badge.tsx
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
└── animated/
    ├── FadeInOnScroll.tsx
    └── AnimatedText.tsx
```
