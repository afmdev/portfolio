import { createEffect, on } from "solid-js";
import { gsap } from "gsap";
import { isPageReady } from "~/stores/pageLoader";
import styles from "./Hero.module.css";

export default function Hero() {
  let greetingRef!: HTMLSpanElement;
  let titleRef!: HTMLHeadingElement;
  let descriptionRef!: HTMLParagraphElement;
  let ctaRef!: HTMLDivElement;

  createEffect(
    on(isPageReady, (ready) => {
      if (!ready) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(greetingRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(titleRef, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.4")
        .fromTo(descriptionRef, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .fromTo(ctaRef, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    })
  );

  return (
    <section class={styles.section} aria-labelledby="hero-title">
      <div class={styles.content}>
        <span ref={greetingRef} class={styles.greeting}>
          Webdesign Berlin
        </span>

        <h1 ref={titleRef} id="hero-title" class={styles.title}>
          Creative <span class={styles.titleAccent}>Developer</span>
          <br />& Designer
        </h1>

        <p ref={descriptionRef} class={styles.description}>
          I build fast, scalable websites in Berlin and digital platforms using advanced WordPress,
          React, Next.js, Astro, and headless CMS solutions with Payload, optimized for SEO,
          performance, and long-term growth.
        </p>

        <div ref={ctaRef} class={styles.cta} role="group" aria-label="Call to action buttons">
          <a
            href="/projects"
            data-magnetic
            class={styles.btnPrimary}
            aria-label="View my portfolio projects"
          >
            View My Work
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/contact"
            data-magnetic
            class={styles.btnSecondary}
            aria-label="Contact me for a project"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
