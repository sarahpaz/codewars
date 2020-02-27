// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function solution(s) {
  if (s.length % 2 === 0) {
    return s.match(/../g);
  } else {
    const arg = s + "_";
    return arg
      .split("")
      .join("")
      .match(/../g);
  }
}
