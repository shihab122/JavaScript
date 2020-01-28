// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure you want to delete?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outer Height and Width
val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollX;
val = window.scrollY;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// window.history.go(-1);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
