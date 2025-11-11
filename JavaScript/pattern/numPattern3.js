let n = 5;

for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
// 11111
// 22222
// 33333
// 44444
// 55555

for (i = n; i > 0; i--) {
  let row = "";
  for (j = 0; j < n; j++) {
    row = row + i;
  }
  console.log(row);
}
// 55555
// 44444
// 33333
// 22222
// 11111

for (i = 0; i < n; i++) {
  let row = "";
  for (j = n; j > 0; j--) {
    row = row + j;
  }
  console.log(row);
}
// 54321
// 54321
// 54321
// 54321
// 54321

for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
// 12345
// 12345
// 12345
// 12345
// 12345
