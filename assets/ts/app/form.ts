import * as calculator from "./calculator";

export interface FormResult {
  firstName: string
  secondName: string
  chance: number
}

export function submit(form: HTMLFormElement): FormResult { 
  const fd = new FormData(form);

  const name1 = fd.get("first").toString();
  const name2 = fd.get("second").toString();
  
  const chance = calculator.computeChance(name1, name2);
  
  console.log(name1, name2);

  return { 
    firstName: name1,
    secondName: name2,
    chance: chance 
  };
}
