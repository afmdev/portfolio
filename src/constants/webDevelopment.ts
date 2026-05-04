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
    title: 'You talk directly to the person building your site',
    description:
      `When you work with me, I'm the one answering your messages, joining the calls, and writing the code. No account managers, no juniors executing what we agreed — just a direct line to the work.`,
    outcome: 'Clear communication from day one',
  },
  {
    title: 'Proven tech, not the framework of the week',
    description:
      `I work with React, Next.js, and Astro because they're mature, well-supported, and easy to maintain long-term. Your site won't need a full rewrite in two years because I chased a trend.`,
    outcome: 'Technology that grows with your business',
  },
  {
    title: 'Fast sites that show up on Google',
    description:
      'I use Astro for business websites and landing pages. The result loads quickly on any device and gives Google exactly what it needs to rank your pages.',
    outcome: 'More organic traffic, less paid advertising',
  },
  {
    title: `Code that doesn't break when you add something new`,
    description:
      `I use TypeScript on every project to catch errors before they reach your visitors. Adding a new feature shouldn't break something that was already working.`,
    outcome: 'Fewer bugs, safer updates',
  },
];

export const WEB_DEV_SERVICES: ServiceOffer[] = [
  {
    title: 'Interactive interfaces with React',
    subtitle: 'Custom, interactive web interfaces',
    summary:
      'If your site needs a complex interactive section — a configurator, a client area, a booking flow — I build it in React so it stays fast, reliable, and easy to extend.',
    deliverables: [
      'Interactive tools and user flows',
      'Dashboards and private member areas',
      'Clean, maintainable component structure',
    ],
  },
  {
    title: 'Full sites with Next.js',
    subtitle: 'Complete web with server-side logic',
    summary:
      'Next.js lets me build your site and the logic behind it in one project. Ideal when you need contact forms, dynamic content, protected pages, or connections to external APIs.',
    deliverables: [
      'Dynamic pages and protected routes',
      'Forms, integrations, and APIs',
      'SEO and performance built in from the start',
    ],
  },
  {
    title: 'Business websites with Astro',
    subtitle: 'Fast, rankable marketing sites',
    summary:
      'For company sites, landing pages, and blogs. Astro loads instantly, makes content easy to update, and gives your site the best possible head start in search.',
    deliverables: [
      'Very fast page load times',
      'CMS integration and easy content editing',
      'Correct SEO structure from day one',
    ],
  },
  {
    title: 'Solid code with TypeScript',
    subtitle: 'Foundations that hold up over time',
    summary:
      'I write every project in TypeScript so errors show up during development, not in front of your users. Your code stays understandable as it grows.',
    deliverables: [
      'Type-safe data models and interfaces',
      'Safer refactors and feature additions',
      'Code any developer can pick up later',
    ],
  },
  {
    title: 'High-speed interfaces with SolidJS',
    subtitle: 'When performance is critical',
    summary:
      'When your interface does a lot — real-time data, complex filters, continuous updates — SolidJS keeps it responsive without the overhead of larger frameworks.',
    deliverables: [
      'Fine-grained reactivity for data-heavy UIs',
      'Minimal bundle, maximum responsiveness',
      'Performance profiling and optimization',
    ],
  },
];

export const WEB_DEV_STACK: TechStackItem[] = [
  {
    name: 'React',
    role: 'Interactive Interfaces',
    description:
      `For sites with lots of interaction: client portals, dashboards, custom tools. When there's a lot happening on screen.`,
    accent: 'var(--color-primary-fixed)',
  },
  {
    name: 'Next.js',
    role: 'Full-Stack Web',
    description:
      'For sites that also need server-side logic — forms, registered users, dynamic content, or API connections.',
    accent: 'var(--color-icon-webdev)',
  },
  {
    name: 'Astro',
    role: 'Business Sites and SEO',
    description:
      'For company websites, landing pages, and blogs. Loads very fast and ranks well on Google.',
    accent: 'var(--color-secondary-fixed)',
  },
  {
    name: 'TypeScript',
    role: 'Stable, Maintainable Code',
    description:
      'For catching errors before launch and keeping the codebase easy to change and extend over time.',
    accent: 'var(--color-tertiary-fixed)',
  },
  {
    name: 'SolidJS',
    role: 'Maximum Performance',
    description:
      'For interfaces with real-time data, complex filters, or continuous updates where every millisecond counts.',
    accent: 'var(--color-icon-seo)',
  },
];

export const WEB_DEV_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery call',
    description:
      `We talk about your business, your goals, and what's not working with your current site. No forms, no jargon — just a straightforward conversation.`,
  },
  {
    step: '02',
    title: 'Clear plan and quote',
    description:
      `I send you in writing exactly what we're building, what tools we'll use, the timeline, and the price. No surprises halfway through.`,
  },
  {
    step: '03',
    title: 'Build in stages',
    description:
      `I build in phases and show you the work as it progresses. You give feedback, I adjust. You'll see progress at every step.`,
  },
  {
    step: '04',
    title: 'Review and launch',
    description:
      'Before going live, we check that the site loads fast, looks right on all devices, and is correctly set up for Google.',
  },
  {
    step: '05',
    title: 'Available after launch',
    description:
      `I'm available after launch for fixes, updates, and improvements. You don't get left on your own once it's live.`,
  },
];

export const WEB_DEV_TRUST_SIGNALS: TrustSignal[] = [
  {
    title: `You'll always know what's happening`,
    description:
      `I send weekly updates with what I've built, what's coming next, and what I need from you. No radio silence.`,
    detail: 'Weekly updates, no need to chase',
  },
  {
    title: 'Fast and rankable from the start',
    description:
      'Performance and basic SEO are included in every project — not extras you pay for separately.',
    detail: 'Speed and SEO included, not add-ons',
  },
  {
    title: 'Code anyone can pick up',
    description:
      `I write clean, well-structured TypeScript. If you work with another developer later, they won't have to start from scratch.`,
    detail: 'No messy code that locks you in forever',
  },
  {
    title: 'Still here after launch',
    description:
      `A text change, a new section, an unexpected bug. I'm available after the project for whatever you need.`,
    detail: `Support that doesn't end on launch day`,
  },
];


export const WEB_DEV_CASE_STUDIES: CaseStudy[] = [
  {
    title: 'B2B Software Growth Site Rebuild',
    category: 'Astro + TypeScript',
    summary:
      'Rebuilt the marketing site for a B2B software company. New structure, faster load times, and content the team can update without touching code.',
    result: '+62% demo requests in 90 days',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'Team reviewing website metrics during a growth strategy session',
    href: '/contact',
  },
  {
    title: 'Product Team Dashboard Modernization',
    category: 'React',
    summary:
      'Turned a slow, hard-to-maintain dashboard into a clean React app with clear structure and shorter release cycles.',
    result: '-38% time to ship new features',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'Developer monitoring frontend metrics and deployment charts on multiple displays',
    href: '/contact',
  },
  {
    title: 'High-Speed Interface for a Data-Heavy Tool',
    category: 'SolidJS',
    summary:
      'Built a data-intensive interface in SolidJS that stays responsive even with complex filters and real-time updates.',
    result: 'Under 1.5s to interactive on mobile',
    imageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=700&fit=crop&q=80',
    imageAlt:
      'High-performance workstation used for frontend optimization and profiling',
    href: '/contact',
  },
];

export const WEB_DEV_FAQS: FaqItem[] = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      `I work with small businesses, startups, and product teams that need a reliable web developer. That could be a new site, a redesign, a dashboard, an internal tool, or ongoing support. If you're not sure whether your project is a fit, just write me — I'll give you an honest answer.`,
  },
  {
    question: 'Will I work directly with you or with a team?',
    answer:
      `Always with me. I'm the one answering your messages, joining the calls, and writing the code. I don't delegate or subcontract the work.`,
  },
  {
    question: 'Why do you use Astro for some sites and Next.js for others?',
    answer:
      `Astro is ideal for business websites, landing pages, and blogs — it loads very fast and ranks well in Google. Next.js works better when the site also needs server-side logic: user accounts, forms, dynamic content, or API connections. I'll recommend whichever fits your project best.`,
  },
  {
    question: 'How do you decide which technology to use?',
    answer:
      'I ask what your site needs to do, who will use it, and what you want to add in the future. Then I pick the right tool — not whatever is trending. I explain the recommendation in plain terms before we start.',
  },
  {
    question: 'Can I make changes once the project is done?',
    answer:
      `Absolutely. I'm available for updates, new sections, fixes, and improvements after launch. We can handle it with a support agreement or case by case, depending on what you need.`,
  },
  {
    question: 'What does TypeScript mean for my project?',
    answer:
      `TypeScript is a way of writing code that catches errors during development, before they reach your visitors. It's invisible to your users, but it means fewer bugs, safer updates, and code that's easier to maintain over time.`,
  },
  {
    question: 'Do you handle SEO?',
    answer:
      `Yes — the technical SEO basics are included in every project: fast load times, correct HTML structure, metadata, and pages Google can index properly. I don't manage ongoing SEO campaigns, but your site will be set up to be found.`,
  },
];

export const WEB_DEV_FINAL_CTA: FinalCta = {
  title: 'Got a project in mind?',
  description:
    `Tell me what you need. I'll get back to you within one business day with honest feedback and clear next steps.`,
  primaryLabel: 'GET IN TOUCH',
  primaryHref: '/contact',
  secondaryLabel: 'VIEW ALL SERVICES',
  secondaryHref: '/services',
};
