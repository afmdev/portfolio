import { onMount, onCleanup, For } from "solid-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ServicesV2.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Website Audit & Technical SEO Review Services",
    description:
      "Our website audit and technical SEO review services identify SEO, performance, and usability issues that limit business growth. You receive clear, prioritized audit insights to improve rankings, speed, and technical stability.",
    questions: [
      "Why is my website not ranking on Google despite good content?",
      "How to identify technical SEO issues on a business website?",
      "How do I know if my website has SEO or performance problems?",
      "Why does my website traffic keep dropping over time?",
    ],
    cta: "Get Your Free Audit Report",
    icon: "audit",
  },
  {
    id: 2,
    title: "Website Performance & Page Speed Optimization Services",
    description:
      "Our website performance and page speed optimization services help businesses fix slow websites and improve Core Web Vitals. We optimize loading times, assets, and architecture to deliver faster, SEO-friendly websites.",
    questions: [
      "Why is my website loading so slowly on mobile devices?",
      "How to fix poor Core Web Vitals scores?",
      "Why does my website feel slow even with good hosting?",
      "How to improve page speed without rebuilding my website?",
    ],
    cta: "Fix My Page Speed",
    icon: "speed",
  },
  {
    id: 3,
    title: "Website Maintenance & Security Services",
    description:
      "Our website maintenance and security services keep your site fast, secure, and up to date. Ideal for businesses that need reliable, ongoing technical support, not ad-hoc fixes.",
    questions: [
      "Who maintains my website after it goes live?",
      "How to keep a business website secure and updated?",
      "Why does my website break after software updates?",
      "What happens if my website gets hacked or goes down?",
    ],
    cta: "Secure My Website",
    icon: "security",
  },
  {
    id: 4,
    title: "Fast & Scalable Web Hosting Services",
    description:
      "Our fast and scalable web hosting services provide the foundation for high-performance business websites. Built for speed, uptime, and growth, our hosting supports SEO and security from day one.",
    questions: [
      "Why does my website crash during traffic spikes?",
      "Is my web hosting affecting SEO and page speed?",
      "What hosting is best for growing business websites?",
      "How to move to better hosting without downtime?",
    ],
    cta: "Get a Hosting Quote",
    icon: "hosting",
  },
  {
    id: 5,
    title: "SEO Content Creation & Copywriting Services",
    description:
      "Our SEO content creation and copywriting services help business websites attract qualified traffic and convert visitors. From blogs to service pages, we create content that ranks and sells.",
    questions: [
      "Why is my content not bringing qualified traffic?",
      "How to write content that ranks and converts?",
      "What content does a business website actually need?",
      "Why are visitors leaving my website without taking action?",
    ],
    cta: "Improve My Website Content",
    icon: "content",
  },
  {
    id: 6,
    title: "Conversion Rate Optimization (CRO) Services",
    description:
      "Our conversion rate optimization services help businesses turn traffic into leads and sales. Through UX improvements, A/B testing, and data-driven insights, every page performs better.",
    questions: [
      "Why does my website get traffic but no leads?",
      "How to increase website conversions without more ads?",
      "What is stopping users from contacting or buying?",
      "How to test and improve website conversion rates?",
    ],
    cta: "Increase My Conversions",
    icon: "cro",
  },
  {
    id: 7,
    title: "Executive Presentation & Pitch Deck Design Services",
    description:
      "Our executive presentation and pitch deck design services help businesses communicate clearly and convincingly. Perfect for investor decks, sales pitches, and internal presentations.",
    questions: [
      "Why does my pitch deck fail to convince investors?",
      "How to explain my business clearly in a presentation?",
      "What makes a professional pitch deck stand out?",
      "Why do people lose interest during presentations?",
    ],
    cta: "Design My Pitch Deck",
    icon: "presentation",
  },
];

const icons: Record<string, string> = {
  audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  hosting: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  content: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
  cro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  presentation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
};

export default function ServicesV2() {
  let sectionRef: HTMLElement | undefined;
  let servicesContainerRef: HTMLDivElement | undefined;

  onMount(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const rows = servicesContainerRef?.querySelectorAll("[data-service-row]");
      if (!rows) return;

      rows.forEach((row, index) => {
        const isEven = index % 2 === 0;
        const visual = row.querySelector("[data-visual]");
        const text = row.querySelector("[data-text]");

        // Initial states
        gsap.set(text, { opacity: 0, x: isEven ? -60 : 60 });
        gsap.set(visual, { opacity: 0, x: isEven ? 60 : -60 });

        // Content reveal animation
        gsap.to([text, visual], {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            once: true,
          },
        });
      });

      // Desktop: Scale effect
      mm.add("(min-width: 768px)", () => {
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            {
              scale: 0.92,
              borderRadius: "1.5rem",
            },
            {
              scale: 1,
              borderRadius: "0rem",
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "top 35%",
                scrub: 1,
              },
            }
          );
        });
      });
    }, sectionRef);

    onCleanup(() => {
      ctx.revert();
      mm.revert();
    });
  });

  return (
    <section ref={sectionRef} class={styles.section} aria-labelledby="services-v2-title">
      <div ref={servicesContainerRef} class={styles.servicesContainer}>
        <For each={services}>
          {(service, index) => (
            <div
              data-service-row
              class={`${styles.row} ${index() % 2 === 0 ? styles.rowLeft : styles.rowRight}`}
            >
              {/* Text Column - 60% */}
              <div data-text class={styles.textColumn}>
                <span class={styles.serviceNumber}>
                  {String(service.id).padStart(2, "0")}
                </span>
                <h3 class={styles.serviceTitle}>{service.title}</h3>
                <p class={styles.serviceDescription}>{service.description}</p>
                <div class={styles.questions}>
                  <span class={styles.questionsLabel}>
                    Common searches / problems users have:
                  </span>
                  <ul class={styles.questionsList}>
                    <For each={service.questions}>
                      {(question) => (
                        <li class={styles.questionItem}>{question}</li>
                      )}
                    </For>
                  </ul>
                </div>
                <button type="button" class={styles.ctaButton}>
                  {service.cta}
                </button>
              </div>

              {/* Visual Column - 40% */}
              <div data-visual class={styles.visualColumn}>
                <div class={styles.iconContainer}>
                  <div class={styles.iconGlow} aria-hidden="true" />
                  <div
                    class={styles.icon}
                    innerHTML={icons[service.icon]}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
