/*
 * Looping a Triangle
 */
for (let x = "#"; x.length < 8; x += "#") {
  console.log(x);
}

/*
 * FizzBuzz
 */
for (let n = 1; n < 100; n++) {
  str = "";
  n % 3 === 0 ? (str += "Fizz") : str;
  n % 5 === 0 ? (str += "Buzz") : str;
  console.log(str || n);
}

/*
 * Chessboard
 */
