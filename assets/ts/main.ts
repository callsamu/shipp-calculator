import { submit } from "./form";
import { animate } from "./animations";

import { particles } from "./particles";
import { loadFull } from "tsparticles";
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
  
  const clone = document.importNode(template.content, true);
  main.replaceChildren(clone);
  
  const chance = main.querySelector(".chance");
  animate(chance, 0, data.chance, 4000);
    
  e.preventDefault();

  const button = main.querySelector(".return");
  button.addEventListener("click", () => {
    main.replaceChildren(section);
  });
});

