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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// no mon inside openingHours so undefined so .. we use now
console.log(restaurant.openingHours.mon);

// using if
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon);
}

// optional chaining
//console.log(restaurant.openingHours.mon.open); // typeerror: cant read properties of undefined
console.log(restaurant.openingHours.mon?.open); // undefined

// if we want to test more then we can do it too

// with if statement
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);

// real world example
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// check if it is open in weekdsays above
for (const day of days) {
  //   console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} , we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');

// arrays
const users = [
  { name: 'saljesh', email: 'saljesh@gmail.com' },
  { name: 'kyle', email: 'kyle@gmail.com' },
];

console.log(users[1]?.name ?? 'User array empty');
