// immediately invoked function
'use strict';

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE
(function (name) {
  console.log(`Hello ${name}`);
})('saljesh');

(() => console.log('It will never run'))();

// iife were invented to make data hiding abstraction
// var inside iife cant be accessed outside

// this is replaced by now block scope in es6

{
  const hello = ' i am not visible outside, so dont use iife use me. ';
}

console.log(hello);
