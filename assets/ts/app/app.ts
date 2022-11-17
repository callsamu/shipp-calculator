import { FormResult } from "./form";
import { animate } from "./animations";
import { hydrateResults } from "./results";

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
    animate(counter, 0, data.chance, 4000);
  }

  public reRenderContent() {
    history.pushState(null, "", "/");
    this.main.replaceChildren(this.content);
  }
}
