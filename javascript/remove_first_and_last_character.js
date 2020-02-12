// Remove First and Last Character
//
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
