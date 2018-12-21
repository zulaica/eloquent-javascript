/*
 * Flattening
 */
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((array, value) => array.concat(value)));
// → [1, 2, 3, 4, 5, 6]

/*
 * Your Own Loop
 */
const loop = (value, test, update, body) => {
  if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/*
 * Everything
 */
// Loop version
const every = (array, test) => {
  for (let item of array) {
    if (!test(item)) return false;
  }
  return true;
};

// Arran.some() version
// const every = (array, test) => {
//   return !array.some(item => !test(item))
// }

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
