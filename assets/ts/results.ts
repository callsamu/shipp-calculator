import type { FormResult } from "./form"

export function hydrateResults(results: FormResult, template: HTMLTemplateElement) {
  const chance = template.content.querySelector(".chance")
  chance.innerHTML = results.chance.toFixed(2);
}