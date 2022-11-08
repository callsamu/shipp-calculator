import { submit } from "./form";
import { hydrateResults } from "./results";
import { removeAllChildren } from "./helpers";

import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

loadFull(tsParticles);
const particles = {
  "fpsLimit": 120,
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff0000",
      "animation": {
        "enable": false,
        "speed": 20,
        "sync": true
      }
    },
    "shape": {
      "type": "image",
     "image": {
        "src": "/images/heart.svg"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 20,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 2,
      "random": true,
      "straight": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "background": {
    "color": "#fafafa",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }
};

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
 


