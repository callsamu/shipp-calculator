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
  const params = new URLSearchParams(location.search);

  app.form.elements["first"].value = params.get("first");
  app.form.elements["second"].value = params.get("second");

  const event = new SubmitEvent("submit");
  app.form.dispatchEvent(event);
}
