const name = 'Shihab';
const age = 30;
const job = 'Web Development';
const city = 'Dhaka';
let html;

function hello() {
  return 'Hello';
}

html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  '<li>City: ' +
  city +
  '</li></ul>';

html = `
      <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li> ${hello()} </li>
        <li> ${age > 30 ? 'Over 30' : 'Less than or equal to 30'}</li>
      </ul>

`;

document.body.innerHTML = html;
