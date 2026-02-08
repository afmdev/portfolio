import { createSignal, onMount, onCleanup, Show } from "solid-js";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = createSignal(false);
  const [isVisible, setIsVisible] = createSignal(false);
  const [isEnabled, setIsEnabled] = createSignal(false);

  onMount(() => {
    if ("ontouchstart" in globalThis || navigator.maxTouchPoints > 0) {
      return;
    }
    setIsEnabled(true);

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let currentMagneticEl: HTMLElement | null = null;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible()) setIsVisible(true);

      const element = (e.target as HTMLElement).closest("[data-magnetic]");
      const target = element as HTMLElement | null;

      if (target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const strength = Number.parseFloat(target.dataset.magneticStrength || "0.4");

        const moveX = (e.clientX - centerX) * strength;
        const moveY = (e.clientY - centerY) * strength;

        target.style.transform = `translate(${moveX}px, ${moveY}px)`;
        currentMagneticEl = target;

        if (!isHovering()) setIsHovering(true);
      } else if (currentMagneticEl) {
        currentMagneticEl.style.transform = "translate(0, 0)";
        currentMagneticEl = null;
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (currentMagneticEl) {
        currentMagneticEl.style.transform = "translate(0, 0)";
        currentMagneticEl = null;
        setIsHovering(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);

    const animate = () => {
      const diff = Math.abs(mouseX - cursorX) + Math.abs(mouseY - cursorY);

      if (diff > 0.1) {
        cursorX = lerp(cursorX, mouseX, 0.15);
        cursorY = lerp(cursorY, mouseY, 0.15);
        setPosition({ x: cursorX, y: cursorY });
      }

      animationId = requestAnimationFrame(animate);
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animate();

    onCleanup(() => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    });
  });

  return (
    <Show when={isEnabled()}>
      <div
        class={`${styles.cursor} ${isVisible() ? styles.cursorVisible : styles.cursorHidden}`}
        style={{ transform: `translate(${position().x}px, ${position().y}px)` }}
        aria-hidden="true"
      >
        <div class={`${styles.dot} ${isHovering() ? styles.dotHovering : styles.dotDefault}`} />
      </div>
    </Show>
  );
}
