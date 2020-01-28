const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);
clearBtn.addEventListener('mouseup', runEvent);
clearBtn.addEventListener('mousedown', runEvent);
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX}, 
   MouseY: ${e.offsetY}`;
  document.body.style.background = `rgb(${e.offsetX}, 
    ${e.offsetY}, 40)`;
  //   e.preventDefault();
}
