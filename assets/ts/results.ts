import type { FormResult } from "./form"

export function hydrateResults(results: FormResult, container: Element) {
  const chance = container.querySelector(".chance")
  chance.innerHTML = results.chance.toFixed(2);
}