// for (let i = 0; i < 10; i++) {
//   if (i == 2) continue;
//   if (i == 8) break;
//   console.log(i);
// }

// let num = 10;
// while (num < 10) {
//   console.log(num);
// }

// do {
//   console.log(num);
// } while (num < 10);

// FOR EACH
let cars = ['AUDI', 'BMW', 'FORD', 'TOYOTA'];
// cars.forEach(function(car) {
//   console.log(car);
// });
// cars.forEach(function(car, index, array) {
//   console.log(`${index} = ${car}`);
//   console.log(array);
// });

// MAP
// const users = [
//   { id: 1, name: 'Jhon' },
//   { id: 2, name: 'Harry' },
//   { id: 3, name: 'Steve' }
// ];
// const ids = users.map(function(user) {
//   return user.id;
// });
// console.log(ids);
const user = {
  firstName: 'Shihab',
  lastName: 'Hossain',
  age: 23
};
for (let x in user) {
  console.log(`${x} = ${user[x]}`);
}
