import { onMount, onCleanup, Accessor } from "solid-js";
import { useLenis } from "~/stores/lenis";

interface ScrollSkewOptions {
  maxSkew?: number;
  intensity?: number;
}

export function useScrollSkew(
  elementRef: Accessor<HTMLElement | undefined>,
  options: ScrollSkewOptions = {}
) {
  const { maxSkew = 5, intensity = 0.1 } = options;
  const lenis = useLenis();

  onMount(() => {
    const element = elementRef();
    if (!element) return;

    let skew = 0;
    let lastScroll = 0;
    let animationId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      const velocity = scroll - lastScroll;
      lastScroll = scroll;

      const targetSkew = Math.min(Math.max(velocity * intensity, -maxSkew), maxSkew);
      skew = lerp(skew, targetSkew, 0.1);

      if (Math.abs(skew) > 0.01) {
        element.style.transform = `skewY(${skew}deg)`;
      } else {
        element.style.transform = "skewY(0deg)";
      }
    };

    const lenisInstance = lenis?.();
    if (lenisInstance) {
      lenisInstance.on("scroll", handleScroll);
    }

    // Fallback for native scroll
    const nativeScrollHandler = () => {
      const scroll = window.scrollY;
      const velocity = scroll - lastScroll;
      lastScroll = scroll;

      const targetSkew = Math.min(Math.max(velocity * intensity, -maxSkew), maxSkew);
      skew = lerp(skew, targetSkew, 0.1);

      if (Math.abs(skew) > 0.01) {
        element.style.transform = `skewY(${skew}deg)`;
      } else {
        element.style.transform = "skewY(0deg)";
      }

      animationId = requestAnimationFrame(nativeScrollHandler);
    };

    if (!lenisInstance) {
      animationId = requestAnimationFrame(nativeScrollHandler);
    }

    onCleanup(() => {
      const lenisInstance = lenis?.();
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (element) {
        element.style.transform = "";
      }
    });
  });
}
