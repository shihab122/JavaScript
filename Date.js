const today = new Date();
let val = today;
val = new Date('10-28-1996');
val = new Date('10-28-1996 10:00:00');
val = new Date('October 28 1996');
val = new Date('1/1/2020');

val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getMonth();
console.log(val);
