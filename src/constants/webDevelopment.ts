export interface Differentiator {
  title: string;
  description: string;
  outcome: string;
}

export interface ServiceOffer {
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
}

export interface TechStackItem {
  name: string;
  role: string;
  description: string;
  accent: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TrustSignal {
  title: string;
  description: string;
  detail: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  summary: string;
  result: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FinalCta {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export const WEB_DEV_DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Business-First Delivery Model',
    description:
      'Every build starts with your conversion targets, not with random templates. We connect product goals, analytics events, and user journeys before a single component ships.',
    outcome: 'KPI-aligned delivery from sprint one',
  },
  {
    title: 'Senior React and Next.js Execution',
    description:
      'You get architecture-level support from an experienced React developer and Next.js implementation partner who understands rendering strategy, app routing, and maintainable component systems for growth-stage products.',
    outcome: 'Faster releases with fewer regressions',
  },
  {
    title: 'Astro Framework SEO Performance',
    description:
      'With the Astro framework, we ship content-heavy pages that load quickly and rank cleanly. Islands architecture keeps interactivity where it matters and static output where it wins.',
    outcome: 'Higher visibility and lower bounce rate',
  },
  {
    title: 'TypeScript Development Quality Guardrails',
    description:
      'Our TypeScript development workflow enforces clear contracts, predictable APIs, and safer refactors so your codebase scales with confidence across teams.',
    outcome: 'Sustainable code quality at scale',
  },
];

export const WEB_DEV_SERVICES: ServiceOffer[] = [
  {
    title: 'React Application Development',
    subtitle: 'Product-focused React development',
    summary:
      'Build conversion-focused frontends, dashboards, and SaaS flows with robust component architecture and measurable performance budgets.',
    deliverables: [
      'Reusable design-system components',
      'State and data-fetching strategy',
      'Accessibility and interaction QA',
    ],
  },
  {
    title: 'Next.js Product Engineering',
    subtitle: 'Hybrid rendering with Next.js',
    summary:
      'Build scalable Next.js platforms that combine server rendering, static generation, and API integrations for high-conversion product experiences.',
    deliverables: [
      'Routing and data strategy with App Router',
      'SEO and metadata optimization patterns',
      'Typed API and backend integration workflows',
    ],
  },
  {
    title: 'Astro Website Engineering',
    subtitle: 'SEO-ready Astro framework sites',
    summary:
      'Launch blazing-fast marketing websites and documentation hubs with CMS integration and technical SEO baked in from day one.',
    deliverables: [
      'Static-first architecture setup',
      'Schema markup and metadata strategy',
      'Page-speed and Core Web Vitals optimization',
    ],
  },
  {
    title: 'TypeScript Architecture',
    subtitle: 'Reliable TypeScript development systems',
    summary:
      'Design resilient code foundations that support feature velocity, onboarding, and long-term maintenance without fragile rewrites.',
    deliverables: [
      'Domain-driven interface contracts',
      'Shared utility and validation layers',
      'Typed API and content models',
    ],
  },
  {
    title: 'SolidJS Performance Builds',
    subtitle: 'Reactive interfaces for speed-critical products',
    summary:
      'Implement SolidJS performance patterns for interfaces that stay responsive under real traffic and complex UI states.',
    deliverables: [
      'Fine-grained reactive rendering',
      'Hydration and bundle optimization',
      'Real-user monitoring integration',
    ],
  },
];

export const WEB_DEV_STACK: TechStackItem[] = [
  {
    name: 'React',
    role: 'Frontend Applications',
    description:
      'For complex interfaces, product dashboards, and scalable UI systems where a dedicated React developer mindset is essential.',
    accent: 'var(--color-primary-fixed)',
  },
  {
    name: 'Next.js',
    role: 'Full-Stack Web Products',
    description:
      'For hybrid rendering, API-driven experiences, and scalable product delivery where performance and flexibility must coexist.',
    accent: 'var(--color-icon-webdev)',
  },
  {
    name: 'Astro',
    role: 'SEO and Content Websites',
    description:
      'For projects that prioritize speed, content discoverability, and modern editorial workflows.',
    accent: 'var(--color-secondary-fixed)',
  },
  {
    name: 'TypeScript',
    role: 'Architecture and Stability',
    description:
      'For type-safe APIs, maintainable team collaboration, and predictable behavior across fast-moving releases.',
    accent: 'var(--color-tertiary-fixed)',
  },
  {
    name: 'SolidJS',
    role: 'Performance-Critical UIs',
    description:
      'For SolidJS performance gains in high-interaction experiences where reactivity and runtime efficiency matter.',
    accent: 'var(--color-icon-seo)',
  },
];

export const WEB_DEV_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery and Technical Audit',
    description:
      'We map your goals, audience intent, existing stack constraints, and SEO opportunities across your acquisition funnel.',
  },
  {
    step: '02',
    title: 'Architecture and Scope Blueprint',
    description:
      'We define framework choice, information architecture, TypeScript contracts, and milestones so every sprint has clear outcomes.',
  },
  {
    step: '03',
    title: 'Build and Iterate',
    description:
      'Implementation happens in transparent delivery cycles with weekly demos, QA checkpoints, and measurable performance targets.',
  },
  {
    step: '04',
    title: 'SEO and Performance Hardening',
    description:
      'Before launch, we validate metadata, structured data, accessibility, and Core Web Vitals to maximize discoverability and trust.',
  },
  {
    step: '05',
    title: 'Launch and Growth Support',
    description:
      'After go-live, we monitor results, refine UX bottlenecks, and support your roadmap with ongoing optimization.',
  },
];

export const WEB_DEV_TRUST_SIGNALS: TrustSignal[] = [
  {
    title: 'Transparent Weekly Delivery',
    description:
      'You get clear sprint goals, demo checkpoints, and progress updates so stakeholders always know what is shipping next.',
    detail: 'Predictable visibility from kickoff to launch',
  },
  {
    title: 'Performance and SEO Baseline',
    description:
      'Every project includes technical SEO, semantic structure, and performance checks before release to reduce avoidable regressions.',
    detail: 'Core Web Vitals and metadata validation included',
  },
  {
    title: 'Type-Safe Architecture',
    description:
      'TypeScript contracts and reusable patterns are applied from day one to keep your codebase maintainable as requirements evolve.',
    detail: 'Safer refactors and lower technical debt over time',
  },
  {
    title: 'Post-Launch Iteration Support',
    description:
      'After launch, we can continue with optimization cycles focused on conversion bottlenecks, speed improvements, and UX refinement.',
    detail: 'Roadmap continuity instead of one-off delivery',
  },
];


export const WEB_DEV_CASE_STUDIES: CaseStudy[] = [
  {
    title: 'SaaS Growth Site Rebuild',
    category: 'Astro Framework + TypeScript Development',
    summary:
      'Rebuilt a conversion path for a B2B SaaS brand with an Astro framework implementation and a typed content model for marketing velocity.',
    result: '+62% qualified demo requests in 90 days',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'Product team reviewing analytics dashboards during a website growth strategy session',
    href: '/contact',
  },
  {
    title: 'React Dashboard Modernization',
    category: 'React Developer Delivery',
    summary:
      'Refactored a legacy dashboard into a maintainable React architecture with clearer state boundaries and faster release cadence.',
    result: '-38% time to deliver new product features',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'Developer monitoring frontend metrics and feature deployment charts on multiple displays',
    href: '/contact',
  },
  {
    title: 'SolidJS Performance Overhaul',
    category: 'SolidJS Performance Engineering',
    summary:
      'Built a speed-critical interface in SolidJS with fine-grained reactivity and runtime profiling for heavy data interactions.',
    result: 'Sub-1.5s interaction readiness on mobile',
    imageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'Close-up of a high-performance workstation used for frontend optimization and profiling',
    href: '/contact',
  },
];

export const WEB_DEV_FAQS: FaqItem[] = [
  {
    question: 'What web development services do you offer for modern businesses?',
    answer:
      'We provide end-to-end web development services including strategy, UX architecture, frontend engineering, technical SEO, performance optimization, and launch support for business websites and digital products.',
  },
  {
    question: 'Can you join our team as a dedicated React developer?',
    answer:
      'Yes. We can work as your dedicated React developer partner for architecture planning, component system implementation, code reviews, and sprint delivery in close collaboration with your product team.',
  },
  {
    question: 'Why should we choose the Astro framework for marketing websites?',
    answer:
      'The Astro framework is ideal for fast, SEO-friendly websites because it ships minimal JavaScript by default, improves Core Web Vitals, and still supports interactive islands when needed.',
  },
  {
    question: 'When should we choose Next.js instead of Astro?',
    answer:
      'Choose Next.js when your project needs hybrid rendering, authenticated application flows, and tight API integration. For content-first websites with minimal client JavaScript, Astro is often the better fit.',
  },
  {
    question: 'How does your TypeScript development process reduce risk?',
    answer:
      'Our TypeScript development process introduces strict typing, shared interfaces, and validation patterns that reduce runtime errors, improve developer confidence, and make refactoring safer over time.',
  },
  {
    question: 'When is SolidJS performance a better choice than React?',
    answer:
      'SolidJS performance is especially valuable for highly interactive interfaces where fine-grained reactivity can reduce unnecessary rerenders and deliver a faster runtime experience.',
  },
  {
    question: 'Do you include SEO and structured data in delivery?',
    answer:
      'Yes. Every project includes technical SEO foundations, semantic HTML, metadata strategy, and structured data where relevant, including FAQ schema when search intent supports it.',
  },
];

export const WEB_DEV_FINAL_CTA: FinalCta = {
  title: 'Need a Website or App That Converts and Scales?',
  description:
    'Let us design and build your next React, Next.js, Astro, TypeScript, or SolidJS project with a clear roadmap and measurable outcomes.',
  primaryLabel: 'BOOK A DISCOVERY CALL',
  primaryHref: '/contact',
  secondaryLabel: 'VIEW ALL SERVICES',
  secondaryHref: '/services',
};
