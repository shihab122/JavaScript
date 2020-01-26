// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log(e);
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  let val = e;

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // val = Array.from(val);
  // val.forEach(function(item) {
  //   console.log(item);
  // });
  // e.target.innerText = 'Hello';

  val = e.type;

  // Cords Event Relative To The Window
  val = e.clientY;
  val = e.clientX;

  // Cords Event Relative To The Element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  // e.preventDefault();
}
