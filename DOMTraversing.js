let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector(
  'ul.collection li.collection-item:first-child'
);

val = list;
val = listItem;

// Get children Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (Depricated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Get Children of Children
val = list.children[3].children[0];
list.children[3].children[0].id = 'text-link';

// Get First & Last Child
val = list.firstChild;
val = list.lastChild;

// Get First & Last Child Element
val = list.firstElementChild;
val = list.lastElementChild;

// Get Child Count
val = list.childElementCount;

// Parent Child
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Next Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Previous Siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
