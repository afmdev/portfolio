import { onMount, onCleanup, For } from "solid-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks like React, Next.js, and SolidJS. Fast, accessible, and SEO-optimized.",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. From wireframes to high-fidelity prototypes in Figma.",
    icon: "design",
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Scalable online stores with headless CMS, payment integration, and inventory management.",
    icon: "cart",
  },
  {
    id: 4,
    title: "Performance",
    description:
      "Core Web Vitals optimization, lighthouse audits, and speed improvements for existing sites.",
    icon: "speed",
  },
  {
    id: 5,
    title: "CMS Integration",
    description:
      "Headless CMS setup with Contentful, Storyblok, or Payload for easy content management.",
    icon: "cms",
  },
  {
    id: 6,
    title: "Consulting",
    description:
      "Technical consulting, code reviews, and architecture planning for your digital projects.",
    icon: "consult",
  },
];

const icons: Record<string, string> = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  cms: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  consult: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
};

export default function Services() {
  let sectionRef: HTMLElement | undefined;
  let titleRef: HTMLHeadingElement | undefined;
  let subtitleRef: HTMLParagraphElement | undefined;
  let cardsRef: HTMLDivElement | undefined;

  onMount(() => {
    const ctx = gsap.context(() => {
      if (titleRef) gsap.set(titleRef, { opacity: 0, y: 100 });
      if (subtitleRef) gsap.set(subtitleRef, { opacity: 0, y: 50 });

      const cards = cardsRef?.querySelectorAll("[data-service-card]");
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 60 });
      }

      if (titleRef) {
        gsap.to(titleRef, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (subtitleRef) {
        gsap.to(subtitleRef, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef,
            start: "top 85%",
            once: true,
          },
        });
      }

      if (cards && cardsRef) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef,
            start: "top 75%",
            once: true,
          },
        });
      }
    }, sectionRef);

    onCleanup(() => {
      ctx.revert();
    });
  });

  return (
    <section ref={sectionRef} class={styles.section} aria-labelledby="services-title">
      <div class={styles.content}>
        <div class={styles.header}>
          <h2 ref={titleRef} id="services-title" class={styles.title}>
            What I <span class={styles.titleAccent}>Offer</span>
          </h2>
          <p ref={subtitleRef} class={styles.subtitle}>
            From concept to deployment, I provide end-to-end solutions tailored to your unique
            needs.
          </p>
        </div>

        <div ref={cardsRef} class={styles.grid} role="list" aria-label="Services offered">
          <For each={services}>
            {(service) => (
              <article
                data-service-card
                class={styles.card}
                role="listitem"
                aria-labelledby={`service-${service.id}-title`}
              >
                <div class={styles.icon} innerHTML={icons[service.icon]} aria-hidden="true" />

                <h3 id={`service-${service.id}-title`} class={styles.cardTitle}>
                  {service.title}
                </h3>
                <p class={styles.cardDescription}>{service.description}</p>

                <a
                  href={`/services#${service.icon}`}
                  class={styles.cardLink}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn more</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
