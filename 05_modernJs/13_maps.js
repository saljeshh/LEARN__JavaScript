const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  // using [] we can do calculations inside too even template literals
  [weekdays[3 + 1]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23 , Firenze,  Italy',
  categories: ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // this was traditional
  //openingHours: openingHours,
  openingHours, //if name is same we write one only

  // this was old way of function in object literals
  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  // enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // same name as obj passed
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is delicious pasta with ${ing1} and ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest = new Map();
rest.set('name', 'classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// dont overuse this as it is hard to read
const time = 21;
const haha = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(haha);

console.log(rest.has('categories'));

rest.delete(2);

//rest.clear(); // it deletes all nodes of maps

// we set [1,2] as our first but when we wanna access it using same we cant as memory location for both are different in heap
rest.set([1, 2], 'test');

console.log(rest);

console.log(rest.size);

console.log(rest.get([1, 2])); // undefined

// to remove undefined
arr = [1, 2];
rest.set(arr, 'test2');
console.log(rest.get(arr));

// using document
rest.set(document.querySelector('h1'), 'heading ok');
console.log(rest);
