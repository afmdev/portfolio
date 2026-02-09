import { createSignal, onMount, createEffect, For } from "solid-js";
import gsap from "gsap";
import styles from "./ServicesCarousel.module.css";

const services = [
  {
    id: 1,
    category: "SEO",
    title: "Website Audit & Technical SEO Review",
    items: [
      "In-depth website audit for SEO, performance & usability",
      "Clear, prioritized recommendations to improve rankings",
      "Technical stability & speed optimization",
    ],
    icon: "🔍",
    color: "#3b82f6",
  },
  {
    id: 2,
    category: "Performance",
    title: "Website Performance & Page Speed Optimization",
    items: [
      "Fix slow websites & improve Core Web Vitals",
      "Optimize loading times, assets & architecture",
      "Deliver faster, SEO-friendly websites",
    ],
    icon: "⚡",
    color: "#f59e0b",
  },
  {
    id: 3,
    category: "Email",
    title: "Email Marketing Strategy & Campaign Management",
    items: [
      "Custom email marketing strategies for better engagement",
      "Automation & campaign optimization",
      "Turn subscribers into long-term customers",
    ],
    icon: "📧",
    color: "#8b5cf6",
  },
  {
    id: 4,
    category: "Maintenance",
    title: "Ongoing Website Maintenance & Security",
    items: [
      "Keep your site fast, secure & up to date",
      "Reliable technical support & monitoring",
      "Proactive security updates & backups",
    ],
    icon: "🛡️",
    color: "#10b981",
  },
];

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  let containerRef: HTMLDivElement | undefined;
  const cardRefs: (HTMLDivElement | undefined)[] = [];

  const updateCards = () => {
    const active = activeIndex();
    const totalCards = services.length;

    cardRefs.forEach((card, index) => {
      if (!card) return;

      let offset = index - active;

      if (offset > totalCards / 2) {
        offset -= totalCards;
      } else if (offset < -totalCards / 2) {
        offset += totalCards;
      }

      const absOffset = Math.abs(offset);

      let x: number;
      let scale: number;
      let opacity: number;
      let zIndex: number;
      let rotateY = 0;

      if (absOffset === 0) {
        scale = 1;
        opacity = 1;
        zIndex = 30;
        x = offset * 300;
      } else if (absOffset === 1) {
        scale = 0.85;
        opacity = 0.7;
        zIndex = 20;
        rotateY = offset > 0 ? -15 : 15;
        x = offset * 290;
      } else {
        scale = 0.7;
        opacity = 0.4;
        zIndex = 10;
        rotateY = offset > 0 ? -25 : 25;
        x = offset * 280;
      }

      gsap.to(card, {
        x,
        scale,
        opacity,
        rotateY,
        zIndex,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const newIndex = activeIndex() > 0 ? activeIndex() - 1 : services.length - 1;
    goToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex() + 1) % services.length;
    goToSlide(newIndex);
  };

  createEffect(() => {
    activeIndex();
    updateCards();
  });

  onMount(() => {
    if (containerRef) {
      gsap.from(containerRef, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    setTimeout(() => updateCards(), 100);
  });

  return (
    <section class={styles.section} ref={containerRef}>
      <div class={styles.container}>
        <div class={styles.header}>
          <h2 class={styles.title}>What I Do</h2>
          <p class={styles.subtitle}>Select a service to learn more</p>
        </div>

        <div class={styles.categoryButtons}>
          <For each={services}>
            {(service, index) => (
              <button
                onClick={() => goToSlide(index())}
                class={`${styles.categoryBtn} ${activeIndex() === index() ? styles.active : ""}`}
                style={{
                  background: activeIndex() === index() ? service.color : "var(--bg-secondary)",
                  color: activeIndex() === index() ? "#ffffff" : "var(--text-secondary)",
                  border: `2px solid ${
                    activeIndex() === index() ? service.color : "var(--border)"
                  }`,
                  transform: activeIndex() === index() ? "scale(1.05)" : "scale(1)",
                }}
              >
                {service.icon} {service.category}
              </button>
            )}
          </For>
        </div>

        <div class={styles.carouselWrapper}>
          <button
            onClick={handlePrev}
            class={styles.navBtn + " " + styles.navBtnPrev}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            class={styles.navBtn + " " + styles.navBtnNext}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div class={styles.perspectiveContainer}>
            <For each={services}>
              {(service, index) => (
                <div
                  ref={(el) => (cardRefs[index()] = el)}
                  class={`${styles.card} ${styles.cardInner}`}
                  onClick={() => goToSlide(index())}
                >
                  <div class={styles.cardContent}>
                    <div class={styles.cardHeader}>
                      <div class={styles.cardIcon}>{service.icon}</div>
                      <div class={styles.cardTitleWrapper}>
                        <h3 class={styles.cardTitle}>{service.title}</h3>
                        <p class={styles.cardCategory} style={{ color: service.color }}>
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <ul class={styles.cardItems}>
                      <For each={service.items}>
                        {(item) => (
                          <li class={styles.cardItem}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              class={styles.cardItemIcon}
                            >
                              <circle cx="12" cy="12" r="10" fill={service.color} opacity="0.2" />
                              <path
                                d="M9 12l2 2 4-4"
                                stroke={service.color}
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span class={styles.cardItemText}>{item}</span>
                          </li>
                        )}
                      </For>
                    </ul>

                    <button
                      class={styles.cardCta}
                      style={{
                        background: service.color,
                        "pointer-events": activeIndex() === index() ? "auto" : "none",
                      }}
                      disabled={activeIndex() !== index()}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </For>
          </div>

          <div class={styles.indicators}>
            <For each={services}>
              {(service, index) => (
                <button
                  onClick={() => goToSlide(index())}
                  class={`${styles.indicator} ${activeIndex() === index() ? styles.active : ""}`}
                  aria-label={`Go to slide ${index() + 1}`}
                  style={{
                    background: activeIndex() === index() ? service.color : "var(--border)",
                    width: activeIndex() === index() ? "32px" : "8px",
                    opacity: activeIndex() === index() ? 1 : 0.5,
                  }}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}
