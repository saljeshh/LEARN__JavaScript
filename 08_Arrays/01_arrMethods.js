let arr = ['a', 'b', 'c', 'd', 'e'];

//slice

console.log(arr.slice(2, 4));
console.log(arr.slice(2));
console.log(arr.slice(-2)); // d e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b c
console.log(arr.slice()); //copy of array
console.log([...arr]); // using spread for copy array

// splice - it changes original array

//console.log(arr.splice(2)); // c d e
//arr.splice(-1); // get rid of last element
//arr.splice(1, 2); // start from 1 and delete upto 2  // a d e
console.log(arr); //a b

// reverse - it mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2); // reversed array mutated

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // using spread same as above

// join
console.log(letters.join(' - '));
