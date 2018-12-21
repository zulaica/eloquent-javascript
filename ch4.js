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

const sum = arr => arr.reduce((total, n) => (total += n));

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

/*
 * A List
 */
const arrayToList = arr => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArray = list => {
  let arr = [];
  for (let obj = list; obj; obj = obj.rest) {
    arr.push(obj.value);
  }
  return arr;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
