import { createSignal, onMount, For } from "solid-js";
import { setPageReady } from "~/stores/pageLoader";
import styles from "./Loader.module.css";

export default function Loader() {
  const [isLoaded, setIsLoaded] = createSignal(false);
  const chars = ["L", "O", "A", "D", "I", "N", "G", "•", "•", "•"];

  onMount(() => {
    const hide = () => {
      setTimeout(() => setIsLoaded(true), 500);
      setTimeout(() => setPageReady(true), 2000);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      globalThis.addEventListener("load", hide);
    }
  });

  return (
    <div
      class={`${styles.loader} ${isLoaded() ? styles.loaderLoaded : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div class={styles.wrap} aria-hidden="true">
        <For each={chars}>{(char) => <span class={styles.char}>{char}</span>}</For>
      </div>
      <span class={styles.srOnly}>Loading, please wait...</span>
    </div>
  );
}
