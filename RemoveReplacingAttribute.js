let newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// Parent
const cardAction = document.querySelector('.card-action');

// Child
let oldHeading = document.getElementById('task-title');

// Replace Child
cardAction.replaceChild(newHeading, oldHeading);

// Child
let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[2]);

// Classes, Attribute
let val = document.querySelector('li:first-child').children[0];
lis = val.className;
val.classList.add('new-class');
val.classList.remove('new-class');

let ans = val.getAttribute('href');
val.setAttribute('href', 'http://google.com');
ans = val.hasAttribute('title');
val.setAttribute('title', 'hello');
ans = val.hasAttribute('title');
console.log(ans);
