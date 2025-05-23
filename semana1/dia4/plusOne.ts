function plusOne(digits: number[]): number[] {
  let numb = Number(digits.join(""));
  numb++;
  return numb
    .toString()
    .split("")
    .map((s) => parseInt(s));
}

const digits: number[] = [1, 2, 10];
const digits2: number[] = [4, 3, 2, 1];
const digits3: number[] = [9];

console.log(plusOne(digits));
