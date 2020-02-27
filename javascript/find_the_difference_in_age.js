// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages) {
  const res = [];
  const sortAges = ages.sort((a, b) => a - b);
  const youngestAge = sortAges[0];
  const oldestAge = sortAges[sortAges.length - 1];
  const differenceInAges = oldestAge - youngestAge;
  res.push(youngestAge, oldestAge, differenceInAges);
  return res;
}
