import * as calculator from "./calculator";

export interface FormResult {
  firstName: string
  secondName: string
  chance: number
}

function getName(fd: FormData, name: string): string {
  return fd.get(name).toString().trim().toLocaleLowerCase();
}

export function submit(form: HTMLFormElement): FormResult { 
  const fd = new FormData(form);

  const name1 = getName(fd, "first");
  const name2 = getName(fd, "second");
  
  const chance = calculator.computeChance(name1, name2);
  
  console.log(name1, name2);

  return { 
    firstName: name1,
    secondName: name2,
    chance: chance 
  };
}
