let num = 434;

function isNumPalindrome(n) {
  if (n < 0) return false;

  let nCopy = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  return rev === nCopy;
}

console.log(isNumPalindrome(num));
