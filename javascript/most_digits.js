//* Most digits
//* https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array) {
  return array.slice().reduce(function(a, b) {
    return b.toString().length > a.toString().length ? b : a;
  });
}
