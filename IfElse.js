const id = 100;

if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (typeof val === 'undefined') {
  console.log('Val is undefined');
} else {
  console.log(`Value = ${val}`);
}

const name = 'Shihab';
const age = 22;

if (age >= 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 12 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

if (age <= 12 || age >= 50) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for race`);
}

// TERNARY
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
