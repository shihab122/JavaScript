// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Set An Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create a link
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// Append li as child in ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
