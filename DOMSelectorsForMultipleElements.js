const items = document.getElementsByClassName('collection-item');
console.log(items);

items[0].textContent = 'Hello';

let lis = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');
console.log(lis);

lis = document.getElementsByTagName('li');

lis = Array.from(lis);

lis.forEach(function(li, index) {
  li.textContent = `items ${index}`;
});

let list = document.querySelectorAll('ul.collection li.collection-item');
console.log(list);

list = document.querySelectorAll('li:nth-child(odd)');
list.forEach(function(li, index) {
  li.style.background = '#ccc';
});

list = document.querySelectorAll('li:nth-child(even)');
list.forEach(function(li) {
  li.style.background = '#f4f4f4';
});
