// Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/javascript
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
