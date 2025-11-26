let n = 1534236469;

function reverseNumber(num) {
  let numCopy = num;
  num = Math.abs(num);

  let rev = 0;

  while (num > 0) {
    let last = num % 10;
    rev = 10 * rev + last;
    num = Math.floor(num / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;

  return numCopy < 0 ? -rev : rev;
}

console.log(reverseNumber(n));
