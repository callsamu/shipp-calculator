import * as params from "@params";
import { renderTemplate } from "./template";
import type { FormResult } from "./form";

interface ResultText {
  headline: string
  paragraph: string  
}

function getText(chance: number): ResultText | null {
    const texts: Array<ResultText> = params.texts.result;

    const index = Math.floor(chance / (100 / texts.length));
    return texts[index] ?? null;
}

export function hydrateResults(results: FormResult, template: HTMLTemplateElement) {
    const text = getText(results.chance);

    const names = template.content.querySelector('.names');
    if (names) names.textContent = `${results.firstName} & ${results.secondName}`;

    const headline = template.content.querySelector('.result-text h2');
    if (headline) headline.textContent = text.headline; // make it optional

    const paragraph = template.content.querySelector('.result-text p');
    if (paragraph) paragraph.textContent = renderTemplate(text.paragraph, {
      "first": results.firstName,
      "second": results.secondName
    });
}
