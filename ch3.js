/*
 * Minimum
 */
const min = (x, y) => (x < y ? x : y);

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*
 * Recursion
 */
const isEven = n => {
  n = Math.abs(n);
  return n > 1 ? isEven(n - 2) : n === 0;
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/*
 * Bean Counting
 */
const countBs = str => countChar(str, "B");

const countChar = (str, char) => {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === char ? total++ : total;
  }
  return total;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
