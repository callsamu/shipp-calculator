import * as params from "@params";
import type { FormResult } from "./form"

interface ResultText {
  headline: string
  paragraph: string  
}

export function hydrateResults(results: FormResult, template: HTMLTemplateElement) {
  try {
    const texts: Array<ResultText> = params.texts.content;

    const index = Math.floor(results.chance / (100 / texts.length));
    const text = texts[index];

    const headline = template.content.querySelector('.result-text h2');
    headline.innerHTML = text.headline;

    const paragraph = template.content.querySelector('.result-text p');
    paragraph.innerHTML = text.paragraph
      .replace(/{% ?first ?%}/g, results.firstName)
      .replace(/{% ?second ?%}/g, results.secondName);
   } catch(e) {
    console.log(e);
   }
}
