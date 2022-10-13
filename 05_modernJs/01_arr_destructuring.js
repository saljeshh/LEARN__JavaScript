'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23 , Firenze,  Italy',
  categories: ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant);

/**
const arrr = [2, 3, 4];
const a = arrr[0];
const b = arrr[1];
const c = arrr[2];

console.log(a, b, c);

const [x, y] = arrr;
console.log(x, y);

let [first, second] = arrr;
console.log(first, second);

// original array doesnt get affected
console.log(arrr);

 */

// skip second by empty variable name
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// without destructuring we switch data like
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring we switch data like
let aa = [secondary, main];
// console.log(aa)
[main, secondary] = aa;

console.log(main, secondary);

// receive two return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];

const [two, , arr] = nested;
console.log(two, arr);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values setting
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
