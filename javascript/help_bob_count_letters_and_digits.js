// Help Bob count letters and digits
// https://www.codewars.com/kata/5738f5ea9545204cec000155
function countLettersAndDigits(input) {
  const arr = input.split("");
  const newArr = [];
  arr.map(char => {
    if (char.match(/[a-zA-Z0-9]/g)) {
      newArr.push(char);
    }
  });
  return newArr.length;
}

// refactored solution
function countLettersAndDigits(input) {
  const match = input.match(/[a-zA-Z0-9]/g);
  return match ? match.length : 0;
}
