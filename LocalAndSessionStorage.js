// Local Storage clears the value when user clears the value manually
// Set Local Storage Value
localStorage.setItem('name', 'shihab');
// Get Local Storage
console.log(localStorage.getItem('name'));
// Remove localStorage
localStorage.removeItem('name');
localStorage.setItem('age', '23');
// Clear All Local Storage
localStorage.clear();

// Session Storage clears the value when session closed
// Set Session Storage
sessionStorage.setItem('name', 'Noor Hossain');
sessionStorage.setItem('age', '30');
// Get Session Storage
console.log(sessionStorage.getItem('name'));
// Clear All Session Storage
sessionStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
  let tasks;
  const task = document.getElementById('task').value;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task) {
  console.log(task);
});
