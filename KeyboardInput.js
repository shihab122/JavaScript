const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const taskHeader = document.getElementById('task-title');
taskInput.value = '';

form.addEventListener('submit', runEvent1);
function runEvent1(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(taskInput.value);
  e.preventDefault();
}

// taskInput.addEventListener('keydown', runEvent2);
// taskInput.addEventListener('keyup', runEvent2);
// taskInput.addEventListener('keypress', runEvent2);
// taskInput.addEventListener('focus', runEvent2);
// taskInput.addEventListener('blur', runEvent2);
// taskInput.addEventListener('cut', runEvent2);
// taskInput.addEventListener('paste', runEvent2);
// taskInput.addEventListener('copy', runEvent2);
// taskInput.addEventListener('change', runEvent2);
function runEvent2(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // taskHeader.innerText = e.target.value;
}
