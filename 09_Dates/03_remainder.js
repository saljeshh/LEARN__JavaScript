// works in scripts.js

// remainder
console.log(5 / 2); //2.5
console.log(5 % 2); //1

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(11)); // false

labelBalance.addEventListener('click', function () {
  const docs = document.querySelectorAll('.movements__row');
  [...docs].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'maroon';
    if (i % 3 === 0) row.style.backgroundColor = 'purple';
  });
});
