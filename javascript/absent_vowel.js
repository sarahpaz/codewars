// Absent Vowel
// https://www.codewars.com/kata/56414fdc6488ee99db00002c

function absentVowel(x) {
  if (!x.match(/a/)) return 0;
  if (!x.match(/e/)) return 1;
  if (!x.match(/i/)) return 2;
  if (!x.match(/o/)) return 3;
  if (!x.match(/u/)) return 4;
}
