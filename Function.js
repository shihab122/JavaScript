// FUNCTION DECLARATIONS

function great(firstName = 'Bashar', lastName = 'Vai') {
  console.log(`Hello ${firstName} ${lastName}`);
}

// great('Bashar', 'Vai');
great();

// FUNCTION EXPRESSIONS
const square = function(x = 2) {
  return x * x;
};
console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS IIFE
(function() {
  console.log('Hello');
})();

const todo = {
  add: function() {
    console.log('Todo Added');
  },
  edit: function(id) {
    console.log(`Todo ${id} is edited`);
  }
};

todo.delete = function() {
  console.log('Todo Deleted');
};

todo.add();
todo.edit(1);
todo.delete();
