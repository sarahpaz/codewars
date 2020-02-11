// What's my golf score?
// https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a

function golfScoreCalculator(parList, scoreList) {
  const pList = parList
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  const sList = scoreList
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return sList - pList;
}
