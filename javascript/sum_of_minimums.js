// Sum of Minimums!
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  const nums = [];
  arr.map(a => {
    const sortedArr = a.sort((a, b) => a - b);
    nums.push(sortedArr[0]);
  });
  return nums.reduce((a, b) => a + b, 0);
}
