import * as hash from "./hash";

export function computeChance(name1: string, name2: string): number {
  const limit = 10_000;

  const m = hash.hashString(name1, limit);
  const n = hash.hashString(name2, limit);
  
  return hash.hashNumber(m + n, limit) / 100;
}
