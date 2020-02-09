// Generate Range of Integers
// https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step) {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}
