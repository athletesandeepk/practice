let n = -10;

function countDigit(num) {
  let count = 0;

  num = Math.abs(num); // handle negative number, make absolute

  if (num == 0) return 1;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigit(n));
