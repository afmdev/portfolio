import { setThemeCookie } from "./setThemeCookie";

export function applyTheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  setThemeCookie(isDark);
}
