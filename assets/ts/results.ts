import type { FormResult } from "./form"

export function hydrateResults(results: FormResult, container: HTMLElement) {
  const chance = container.querySelector(".chance")
  chance.innerHTML = results.chance.toFixed(2);
}