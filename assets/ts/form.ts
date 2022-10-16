export interface FormResult {
  chance: number
}

export function submit(form: HTMLFormElement): FormResult { 
  // const form = new FormData(form);
  return { chance: Math.random() * 100 }
}
