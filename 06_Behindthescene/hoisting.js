// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared."Variables lifted to the top of their scope"

// Tempral dead zone was introudced in es6 because it makes easy to avoid and catch errors  and  const var actually works as const

'use strict';
// console.log(hello);
let hello = 'saljesh hellow';

// sayHello();

let sayHello = () => {
  console.log(hello);
};

// sayHi();

const sayHi = function () {
  console.log('hi');
};

//block scope for TDz

const name = 'saljesh';

if (name === 'saljesh') {
  //   console.log(`Saljesh is a ${job}`); //TDZ
  const age = 2037 - 2001;
  console.log(age);
  const job = 'teacher';
  //   console.log(x); // x is not defined
}

// ------video2------

console.log(me); // undefined
// console.log(job); // reference error

var me = 'saljesh';
let job = 'teacher';
const year = 2001;

console.log(addDecl(5, 4));
//console.log(addExpr(4, 5)); //Cannot access 'addExpr' before initialization TDZ
console.log(addExprVar); // undefined as we are just calling it
//console.log(addExprVar(4, 4)); // is not a function
//console.log(addArrow(4, 5)); // TDZ

//Functions decleration
function addDecl(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b;
};

var addExprVar = function (a, b) {
  return a + b;
};

// arrow
const addArrow = (a, b) => a + b;

// -------Example

// 0 is falsy value

// this will still execute because of hoising of var
// as it is undefined and is false and !false = true, so let const came
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Items deleted');
}

// variable creatged with var is in window but with let const are not in window

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // in window obj
console.log(y === window.y);
console.log(z === window.z);
