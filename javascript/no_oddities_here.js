// No oddities here
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

function noOdds(values) {
  const arr = [];
  values.map(value => {
    if (value % 2 == 0) {
      arr.push(value);
    }
  });
  return arr;
}
