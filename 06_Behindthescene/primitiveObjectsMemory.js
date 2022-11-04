let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'saljesh',
  age: 21,
};

// see pic objectHeapPool why it happended
const friend = me;
friend.age = 32;

console.log(friend.name);
console.log(me.name);

// both age 32
console.log(friend);
console.log(me);

// ---video 2 -----
// practise
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
};
// behind scenses it it just referencing to the memory of heap
// even const == obj in heap doenst care about it so we can assign
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
  family: ['aney', 'sak'],
};

// problem with Object.assign is it copies only surface copy not deep , if there is object inside object then inside object will still point to old heap
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('marr'); // it changes all object

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
