import { applyTheme } from "./applyTheme";

export function transitionTheme(isDark: boolean, position: { x: number; y: number }): void {
  if (!document.startViewTransition) {
    applyTheme(isDark);
    return;
  }

  const transition = document.startViewTransition(() => {
    applyTheme(isDark);
  });

  transition.ready.then(() => {
    document.documentElement.style.setProperty("--x", `${position.x}px`);
    document.documentElement.style.setProperty("--y", `${position.y}px`);
  }).catch(() => {});
}
