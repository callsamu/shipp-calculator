export function hashString(s: string, factor: number): number {
  let sum = 0;
  
  for (let i = 0; i < s.length; i++) {
    sum += s.charCodeAt(i);
    sum <<= 5;
    sum %= factor;
  }
  
  return sum;
}

export function hashNumber(n: number, factor: number): number {
  return Math.floor(factor * ((n * 0.357840) % 1));
}