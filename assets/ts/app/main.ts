import { submit } from "./form";
import { App } from "./app";

const app = new App(document.querySelector("main"));

app.form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  app.renderTemplate(submit(app.form));
  const button = app.main.querySelector("button");
  button.addEventListener("click", () => app.reRenderContent());
});
