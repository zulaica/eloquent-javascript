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
