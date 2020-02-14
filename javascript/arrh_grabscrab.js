// Arrj, grabscrab!
// https://www.codewars.com/kata/52b305bec65ea40fe90007a7
function grabscrab(anagram, dictionary) {
  const sortedAnagram = anagram
    .split("")
    .sort()
    .join("");
  const arr = [];

  for (let item of dictionary) {
    sortedItems = item
      .split("")
      .sort()
      .join("");
    if (sortedItems === sortedAnagram) {
      arr.push(item);
    }
  }

  return arr;
}
