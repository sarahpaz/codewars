// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function solution(s) {
  if (s.length % 2 === 0) {
    return s.match(/.{1,2}/g);
  } else {
    const arr = s.split("");
    arr.push("_");
    return arr.join("").match(/.{1,2}/g);
  }
}
