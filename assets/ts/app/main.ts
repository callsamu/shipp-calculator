import { submit } from "./form";
import { App } from "./app";

const app = new App(document.querySelector("main"));

app.form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  app.renderTemplate(submit(app.form));
  const button = app.main.querySelector("button");
  button.addEventListener("click", () => app.reRenderContent());
});

if (location.search) {
  const parameters  = location.search.substring(1).split("&");
  const splitted = parameters.map((parameter: string) => parameter.split("="));

  for (let [name, value] of splitted) {
    app.form.elements[name].value = value;
  }

  const event = new SubmitEvent("submit");
  app.form.dispatchEvent(event);
}
