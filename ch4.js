/*
 * The Sum of a Range
 */
const range = (start, end, step = 1) => {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

const sum = arr => {
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/*
 * Reversing an Array
 */
const reverseArray = arr => {
  let array = [];
  for (let idx = arr.length; idx > 0; idx--) {
    array.push(arr[idx - 1]);
  }
  return array;
};

const reverseArrayInPlace = arr => {
  for (let idx = 0; idx < arr.length; idx++) {
    arr.splice(idx, 0, arr.pop());
  }
  return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
