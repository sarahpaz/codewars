// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
function removeChar(str) {
  if (str.length > 2) {
    const arr = str.split("");
    arr.pop();
    arr.shift();
    return arr.join("");
  } else {
    return str;
  }
}

// Refactored using slice()
function removeChar(str) {
  return str.slice(1, -1);
}
