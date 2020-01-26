// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function Scope a = ${a} b = ${b} c = ${c}`);
}

console.log(`Global Scope a = ${a} b = ${b} c = ${c}`);

// Block Scope
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log(`If Scope a = ${a} b = ${b} c = ${c}`);
}
console.log(`Global Scope a = ${a} b = ${b} c = ${c}`);

for (let a = 0; a < 10; a++) {
  console.log(a);
}
console.log(`Global Scope a = ${a} b = ${b} c = ${c}`);
