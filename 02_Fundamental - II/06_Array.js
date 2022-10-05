const friend1 = 'michael';
const friend2 = 'msalehj';

const friends = ['michael', 'msalehj', 'peterson'];

console.log(friends);

friends.forEach((friend) => console.log(friend));

const years = new Array(1990, 1390, 4567, 'mas9i');
console.log(years);

console.log(friends.length);

for (let i = 0; i <= friends.length - 1; i++) {
  console.log(friends[i]);
}

// friends is const but we are changing values of it , becz array is not primitive

friends[0] = 'saljesh';
friends[1] = 'annika';

console.log(friends);

// we cant do this
// friends = ['saljesh', 'annika'];

let sathi = ['saljesh', 'annika', 'masird'];

sathi = ['salli', 'masssei', 'salli'];

console.log(sathi);
