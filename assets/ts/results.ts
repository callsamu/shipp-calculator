import * as params from "@params";
import type { FormResult } from "./form"

interface ResultText {
  headline: string
  paragraph: string  
}

export function hydrateResults(results: FormResult, template: HTMLTemplateElement) {
  try {
    const texts: Array<ResultText> = params.texts.content;

    const index = results.chance / (100 / texts.length)
    console.log(index);
    const text = texts[index];

    const headline = template.content.querySelector('.result-text h2');
    headline.innerHTML = text.headline;

    const paragraph = template.content.querySelector('.result-text p');
    paragraph.innerHTML = text.paragraph;
   } catch(e) {
    console.log(e);
   }
}