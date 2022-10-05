'use strict';

// const private = 12;
// console.log(private);

//function

function logger() {
  console.log('hello');
}
logger();

function foodprocessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  console.log(juice);
}

calcAge1(2001);

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  console.log(age);
}

// cant call this below function up
// fn without name anonymous function
calcAge(2001);

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(age);
};
