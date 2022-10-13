'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23 , Firenze,  Italy',
  categories: ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //opens 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // same name as obj passed
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is delicious pasta with ${ing1} and ${ing2} and ${ing3}`);
  },
};

const arr = [7, 8, 9];

// using manual mode
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// using loop
const news = [1, 2];
for (let i = 0; i < arr.length; i++) {
  news.push(arr[i]);
}

console.log(news);

// using spread
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// example -- new array .. it wont damage existing ones
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const joined = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(joined);

// spread operator works in all iterataables .. object is not iterataables
// Iteretables: arrays, strings, maps, sets. NOT objects
const str = 'saljesh';
const letters = [...str, '', 's.'];
console.log(letters);

console.log(...str);

// real wordld example
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1? "),
//   prompt("let's make pasta! Ingredient 2? "),
//   prompt("let's make pasta! Ingredient 3? "),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// since es8 spread works even in objects i.e not iterataables
const newRestaurant = {
  ...restaurant,
  founder: 'saljesh maharjan',
  cofounder: 'annika maharjan',
};

console.log(newRestaurant);

// copying object and changing name of restaurant
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restornate Roma';
console.log(restaurantCopy);
