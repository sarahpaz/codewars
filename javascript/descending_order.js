// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

function descendingOrder(n) {
  n = n.toString();
  let newNum = n
    .split("")
    .sort()
    .reverse()
    .join("");
  return parseInt(newNum);
}
