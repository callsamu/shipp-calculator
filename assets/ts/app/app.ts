import { FormResult } from "./form";
import { animate } from "./animations";
import { hydrateResults } from "./results";
import { onShareButtonClick } from "./share";

export class App {
  public main: HTMLElement
  private content: HTMLElement;

  public form: HTMLFormElement;
  private template: HTMLTemplateElement;

  public constructor(main: HTMLElement)  {
    this.main = main;

    this.content = main.querySelector("section");
    this.form = this.content.querySelector("form");
    this.template = main.querySelector("template");
  }

  public renderTemplate(data: FormResult) {
    const url = `/?first=${data.firstName}&second=${data.secondName}`;
    history.pushState(null, "", url);

    hydrateResults(data, this.template);
    const clone = document.importNode(this.template.content, true);
    this.main.replaceChildren(clone);

    const counter = this.main.querySelector(".chance");
    if (counter) animate(counter, 0, data.chance, 4000);

    const share = this.main.querySelector(".share")
    if (share)
      if (navigator.canShare)
        share.addEventListener("click", onShareButtonClick(data));
      else {
        share.remove();
      }
  }

  public reRenderContent() {
    history.pushState(null, "", "/");
    this.main.replaceChildren(this.content);
  }
}
