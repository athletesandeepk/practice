for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
/**
1
12
123
1234
12345
 */

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
/**
1
22
333
4444
55555
 */
