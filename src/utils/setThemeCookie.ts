export function setThemeCookie(isDark: boolean): void {
  document.cookie = `theme=${isDark ? "dark" : "light"}; path=/; max-age=31536000; SameSite=Lax`;
}
