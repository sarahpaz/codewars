// N-th Power
// https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n) {
  const num = array[n];
  if (n > array.length || array[n] == undefined) {
    return -1;
  } else if (array.length < 2 && n === 0) {
    return 1;
  } else {
    return Math.pow(num, n);
  }
}
