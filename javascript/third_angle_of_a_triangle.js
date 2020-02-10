// Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014/javascript
function otherAngle(a, b) {
  if (a > 0 && b > 0) {
    const third = 180 - a - b;
    return third;
  }
}
