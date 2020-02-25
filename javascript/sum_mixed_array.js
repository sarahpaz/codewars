// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
function sumMix(x) {
  const newArr = x.map(v => {
    return parseInt(v);
  });
  return newArr.reduce((a, b) => a + b, 0);
}
