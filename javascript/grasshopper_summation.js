// Grasshopper - Summation
//www.codewars.com/kata/55d24f55d7dd296eb9000030
var summation = function(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return arr.reduce((a, b) => a + b, 0);
};
