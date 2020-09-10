// function setTimeout(cb, delay) {
//   const debut = Date.now();
//   while (Date.now() < debut + delay);
//   cb();
// }

// setTimeout(() => console.log('A'), 500);
// setTimeout(() => console.log('B'), 0);
// setTimeout(() => console.log('C'), 1000);
// setTimeout(() => console.log('D'), 500);

// console.log('E');


function pause(delay) {
  const debut = Date.now();
  while (Date.now() < debut + delay);
}

pause(500);
console.log('A');
pause(0);
console.log('B');
pause(1000);
console.log('C');
pause(500);
console.log('D');

console.log('E');
