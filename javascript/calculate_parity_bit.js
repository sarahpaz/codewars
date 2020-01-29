// Calculate Parity Bits
// https://www.codewars.com/kata/5df261342964c80028345a0a

function checkParity(parity, bin) {
  let count = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin.charAt(i) === "1") {
      count++;
    }
  }

  if (count % 2 === 0 && parity == "even") {
    return 0;
  } else if (count % 2 === 0 && parity == "odd") {
    return 1;
  } else if (!count % 2 === 0 && parity == "odd") {
    return 0;
  } else {
    return 1;
  }
}
