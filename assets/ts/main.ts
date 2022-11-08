import { submit } from "./form";
import { hydrateResults } from "./results";

import { loadFull } from "tsparticles";

import { particles } from "./particles";
import { tsParticles } from "tsparticles-engine";

loadFull(tsParticles);
tsParticles.load("tsparticles", particles);

const main = document.querySelector("main");

const section = main.querySelector("section");
const form = section.querySelector("form");

// @ts-ignore
const template: HTMLTemplateElement = document.querySelector(".results");

form.addEventListener("submit", (e: Event) => {
  const data = submit(form);
  hydrateResults(data, template);
  
  const clone = document.importNode(template.content, true);
  main.replaceChildren(clone);

  e.preventDefault();

  const button = main.querySelector(".return");
  button.addEventListener("click", () => {
    main.replaceChildren(section);
  });
});
 


