for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + "*";
  }
  console.log(row);
}
// *****
// ****
// ***
// **
// *

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = i; j > 0; j--) {
    row = row + "*";
  }
  console.log(row);
}
// *****
// ****
// ***
// **
// *
