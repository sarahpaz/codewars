// Expressions Matter
//www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
  const firstSum = a * (b + c);
  const secondSum = a * b * c;
  const thirdSum = a + b * c;
  const fourthSum = (a + b) * c;
  const fifthSum = a + b + c;
  const arr = [firstSum, secondSum, thirdSum, fourthSum, fifthSum];

  const highSum = arr.sort((a, b) => b - a);
  return highSum[0];
}
