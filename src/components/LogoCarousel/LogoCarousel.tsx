import { onMount, onCleanup, For } from "solid-js";
import gsap from "gsap";
import { useLenis } from "~/stores/lenis";
import { techLogos } from "./logos";
import styles from "./LogoCarousel.module.css";

export default function LogoCarousel() {
  let trackRef: HTMLDivElement | undefined;
  let tweenRef: gsap.core.Tween | undefined;
  const lenis = useLenis();

  const BASE_SPEED = 0.3;
  const SCROLL_SPEED = 0.5;
  let currentDirection = 1;
  let scrollTimeout: ReturnType<typeof setTimeout>;

  onMount(() => {
    if (!trackRef) return;

    const logosWidth = trackRef.scrollWidth / 2;

    tweenRef = gsap.to(trackRef, {
      x: -logosWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return Number.parseFloat(x) % logosWidth;
        }),
      },
    });

    tweenRef.timeScale(BASE_SPEED);

    const lenisInstance = lenis?.();
    if (lenisInstance) {
      lenisInstance.on("scroll", handleScroll);
    }

    onCleanup(() => {
      if (tweenRef) tweenRef.kill();
      const lenisInstance = lenis?.();
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      }
      clearTimeout(scrollTimeout);
    });
  });

  const handleScroll = ({ direction }: { direction: number }) => {
    if (!tweenRef) return;

    clearTimeout(scrollTimeout);

    const newDirection = direction === 1 ? 1 : -1;

    if (newDirection !== currentDirection) {
      currentDirection = newDirection;
    }

    tweenRef.timeScale(SCROLL_SPEED * currentDirection);

    scrollTimeout = setTimeout(() => {
      if (tweenRef) {
        gsap.to(tweenRef, {
          timeScale: BASE_SPEED * currentDirection,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }, 150);
  };

  return (
    <section class={styles.section} aria-label="Technologies and tools">
      <div class={styles.header}>
        <h3 class={styles.title} id="tech-title">
          Technologies I work with
        </h3>
      </div>

      <div class={styles.wrapper}>
        <div class={styles.gradientLeft} aria-hidden="true" />
        <div class={styles.gradientRight} aria-hidden="true" />

        <div
          ref={trackRef}
          class={styles.track}
          role="list"
          aria-labelledby="tech-title"
        >
          <For each={techLogos}>
            {(logo) => (
              <div
                class={styles.logo}
                role="listitem"
                title={logo.name}
                innerHTML={logo.svg}
                aria-label={logo.name}
              />
            )}
          </For>
          <For each={techLogos}>
            {(logo) => (
              <div
                class={styles.logo}
                role="listitem"
                innerHTML={logo.svg}
                aria-hidden="true"
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
