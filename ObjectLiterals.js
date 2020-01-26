const person = {
  firstName: 'Shihab',
  lastName: 'Hossain',
  age: 31,
  email: 'shihabhossain611@gmail.com',
  hobbies: ['Music', 'Sports'],
  address: {
    city: 'Dhaka',
    state: 'Tejgaon'
  },
  getBirthYear: function() {
    return 2017 - this.age;
  }
};

let val = person;
val = person.firstName;
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();

const people = [
  { name: 'Jhon', age: 30 },
  { name: 'Mike', age: 30 },
  { name: 'Nancy', age: 30 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name + ' ' + people[i].age);
}

console.log(val);
