const numbers = [1, 3, 65, 2, 5, 7, 3];
const numbers2 = new Array(10, 29, 21, 3);
const fruits = ['Mango', 'Apple', 'Banana'];
const mixed = [1, 'Mango', null, undefined, { a: 1, b: 2 }];

let val;
// Length of array
val = numbers.length;
val = Array.isArray(numbers);
val = numbers.concat(numbers2);

val = numbers[0];
val = numbers.indexOf(3);
val = numbers.lastIndexOf(3);

numbers.push(100);
numbers.unshift(0);
numbers.pop();
numbers.shift();

numbers.sort();
numbers.sort(function(x, y) {
  return x - y;
});

function over50(num) {
  return num > 50;
}

val = numbers.splice(2, 1);
val = numbers.find(over50);

console.log(numbers);
console.log(val);
