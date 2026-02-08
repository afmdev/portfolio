import { createSignal, onMount } from "solid-js";
import { useLenis } from "~/stores/lenis";

export function useScrollDirection(threshold = 10) {
  const [isHidden, setIsHidden] = createSignal(false);
  const [isScrolled, setIsScrolled] = createSignal(false);

  const lenis = useLenis();

  onMount(() => {
    const lenisInstance = lenis?.();
    if (!lenisInstance) return;

    let lastScrollY = 0;

    const handleScroll = ({ scroll }: { scroll: number }) => {
      setIsScrolled(scroll > 50);

      if (Math.abs(scroll - lastScrollY) < threshold) {
        return;
      }

      setIsHidden(scroll > lastScrollY && scroll > 100);
      lastScrollY = Math.max(scroll, 0);
    };

    lenisInstance.on("scroll", handleScroll);

    return () => {
      lenisInstance.off("scroll", handleScroll);
    };
  });

  return { isHidden, isScrolled };
}
