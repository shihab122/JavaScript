const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello there, my name is Shihab Hossain';
const tags = 'Web Developer, IOS Developer, Android Developer, PHP Developer';
let val;
val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Shihab ';
val += 'Hossain';

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toLowerCase();
val = firstName.toUpperCase();
val = firstName[2];

// indexOf();
val = firstName.indexOf('l'); // If the character did not find in the string then it will return -1
val = firstName.lastIndexOf('l');

// CharAt()
val = firstName.charAt('2');

// Get Last Character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(2, 4);
console.log(val);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); // It will start from the back and it will take three characters.

// split()
val = str.split(' '); // It will give an array
val = tags.split(',');

// replace()
val = str.replace('Shihab', 'Jack');

// includes()
val = str.includes('Shihab'); // It will return true or false based on the search
console.log(val);
