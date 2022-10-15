export function alternateVisibility(toggle: HTMLElement, show: HTMLElement) {
  toggle.classList.add("hidden");
  show.classList.remove("hidden");
}