let taskTitle = document.getElementById('task-title');

console.log(taskTitle.id);
console.log(taskTitle.className);

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

taskTitle.innerText = 'Task List';
taskTitle.textContent = 'My Task';
taskTitle.innerHTML = '<span style="color:red">Task List<span>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
