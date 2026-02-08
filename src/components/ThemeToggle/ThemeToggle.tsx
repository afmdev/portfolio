import { createSignal, onMount } from "solid-js";
import { isDarkActive } from "~/utils/isDarkActive";
import { getTogglePosition } from "~/utils/getTogglePosition";
import { transitionTheme } from "~/utils/transitionTheme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(false);
  let toggleRef: HTMLLabelElement | undefined;

  onMount(() => {
    setIsDark(isDarkActive());
  });

  const handleToggle = () => {
    const newValue = !isDark();
    const position = getTogglePosition(toggleRef);
    setIsDark(newValue);
    transitionTheme(newValue, position);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <label
      ref={toggleRef}
      class={styles.toggle}
      role="switch"
      aria-checked={isDark()}
      aria-label={isDark() ? "Switch to light mode" : "Switch to dark mode"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        checked={isDark()}
        onChange={handleToggle}
        tabIndex={-1}
        aria-hidden="true"
      />
      <div aria-hidden="true" />
    </label>
  );
}
