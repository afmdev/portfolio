export function getTogglePosition(element?: HTMLElement): { x: number; y: number } {
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  if (element) {
    const rect = element.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  }

  return { x, y };
}
