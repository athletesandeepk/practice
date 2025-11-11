let n = 5;

for (i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < i; j++) {
    row = row + " ";
  }

  for (k = 0; k < n - i; k++) {
    row = row + (i + 1 + k);
  }

  console.log(row);
}
// 12345
//  2345
//   345
//    45
//     5

for (i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < i; j++) {
    row = row + " ";
  }

  for (k = 0; k < n - i; k++) {
    row = row + (n - i - k);
  }

  console.log(row);
}
// 54321
//  4321
//   321
//    21
//     1
