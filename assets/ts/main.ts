import { submit } from "./form";
import { hydrateResults } from "./results";
import { alternateVisibility } from "./helpers";

const form = document.forms["names"];
const container = document.querySelector(".results");
const returnBtn = container.querySelector(".return");

form.addEventListener("submit", (e: Event) => {
  alternateVisibility(form, container);
  const results = submit(form);
  hydrateResults(results, container);
  
  e.preventDefault();
  return false;
})

returnBtn.addEventListener("click", () => {
  alternateVisibility(container, form);
});
 


