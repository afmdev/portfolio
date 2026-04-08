export const SERVICES_HEADING = 'ARCHITECTING\nDIGITAL\nEXPERIENCES';
export const SERVICES_SUBTITLE =
  'We specialize in designing and building high-performance websites in Berlin that are visually stunning, scalable, and engineered to grow your business. Combining expert web development with intuitive UI/UX, technical SEO, accessibility, and optimized performance, we deliver digital experiences that engage visitors and drive measurable results.';

export interface Service {
  icon: string;
  color: string;
  title: string;
  tagline: string;
  desc: string;
  href: string;
  cta: string;
}

export const SERVICES: Service[] = [
  {
    color: 'var(--color-icon-webdev)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 10L3 14L8 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 10L25 14L20 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 7L12 21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    title: 'Web Development',
    tagline: 'Scalable · Secure · High-Performance Websites',
    desc: 'We craft custom websites and web applications engineered for speed, reliability, and growth. From responsive layouts to modern frameworks, your website will perform flawlessly on every device.',
    href: '/services/web-development',
    cta: 'See Your Website Potential →',
  },
  {
    color: 'var(--color-icon-design)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="9" height="9" stroke="currentColor" stroke-width="2.5"/><rect x="16" y="3" width="9" height="9" stroke="currentColor" stroke-width="2.5"/><rect x="3" y="16" width="9" height="9" stroke="currentColor" stroke-width="2.5"/><rect x="16" y="16" width="9" height="9" stroke="currentColor" stroke-width="2.5"/></svg>`,
    title: 'UI/UX Design',
    tagline: 'Intuitive · Conversion-Driven · Accessible Interfaces',
    desc: 'Turn visitors into loyal customers with interfaces designed for clarity, usability, and accessibility. We focus on intuitive flows and engaging visuals that maximize conversions.',
    href: '/services/ui-ux-design',
    cta: 'Experience Better UX →',
  },
  {
    color: 'var(--color-icon-seo)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2.5"/><path d="M18 18L25 25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M12 8V12L15 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'SEO Optimization',
    tagline: 'Higher Rankings · Organic Traffic · Visibility Boost',
    desc: 'Boost your Google rankings and attract qualified traffic with comprehensive SEO strategies. From technical optimization to content strategy, we ensure your site gets found by the right audience.',
    href: '/services/seo-optimization',
    cta: 'Boost Your Rankings →',
  },
  {
    color: 'var(--color-icon-audit)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4" y="3" width="20" height="22" rx="1" stroke="currentColor" stroke-width="2.5"/><path d="M9 10H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9 14H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9 18H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    title: 'Accessibility Audit',
    tagline: 'Compliance · Inclusive UX · Legal Differentiator',
    desc: 'Meet European accessibility regulations and create a website that\u2019s inclusive for all users. Our audit helps you avoid legal risks while improving usability for every visitor.',
    href: '/services/accessibility-audit',
    cta: 'Secure Compliance →',
  },
  {
    color: 'var(--color-icon-performance)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 3L5 16H14L13 25L23 12H14L15 3Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
    title: 'Performance Optimization',
    tagline: 'Sub-2s Load · Core Web Vitals · Faster UX',
    desc: 'Speed up your site and keep visitors engaged. We optimize load times, Core Web Vitals, and rendering paths to ensure smooth, fast, and reliable performance.',
    href: '/services/performance',
    cta: 'Optimize Your Speed →',
  },
  {
    color: 'var(--color-icon-consulting)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 6C4 4.9 4.9 4 6 4H22C23.1 4 24 4.9 24 6V18C24 19.1 23.1 20 22 20H16L10 24V20H6C4.9 20 4 19.1 4 18V6Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
    title: 'Website Audit',
    tagline: 'Technical SEO · Core Web Vitals · UX Insights',
    desc: 'Uncover hidden issues that may be holding your website back. Our full audit covers performance, SEO, and UX, delivering actionable insights to boost growth and engagement.',
    href: '/services/website-audit',
    cta: 'Get Your Audit →',
  },
  {
    color: 'var(--color-icon-support)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 5C11 4.4 11.4 4 12 4H16C16.6 4 17 4.4 17 5V7H20C21.1 7 22 7.9 22 9V22C22 23.1 21.1 24 20 24H8C6.9 24 6 23.1 6 22V9C6 7.9 6.9 7 8 7H11V5Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 14L12 16L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Maintenance & Support',
    tagline: 'Updates · Security · Client Loyalty',
    desc: 'Keep your website secure, fast, and up-to-date while building recurring revenue. Our Maintenance & Support service ensures long-term client satisfaction and loyalty.',
    href: '/services/maintenance-support',
    cta: 'Start Support Plan →',
  },
  {
    color: 'var(--color-icon-digital)',
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 4C14 4 8 8 8 14C8 17.3 10.7 20 14 20C17.3 20 20 17.3 20 14C20 8 14 4 14 4Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M11 24H17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M14 20V24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    title: 'Digital Consulting',
    tagline: 'Strategy · Architecture · Scalable Growth',
    desc: 'Unlock your business potential with expert digital consulting. Roadmaps, tech stack advice, and hands-on guidance to launch scalable, high-performing products.',
    href: '/services/consulting',
    cta: 'Plan Your Growth →',
  },
];
