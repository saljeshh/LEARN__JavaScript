console.log('lifting if fun');

for (let i = 1; i <= 10; i++) {
  console.log(`lifting weight repetation ${i}`);
}

const types = [];
const arr = [
  'saljesh',
  'annika',
  'kushal',
  'saugat',
  20,
  [20, 'mas8i', 'audio', 'video'],
];

if (arr.includes('annika')) {
  console.log('Annika Loves me');
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], typeof [arr[i]]);
}

// calculate retirement age for list of ages

const ages = [12, 18, 19, 32, 21, 22, 25];
const newAge = [];

ages.forEach((age) => {
  newAge.push(45 - age);
});

for (let i = 0; i < ages.length; i++) {
  console.log(`Aged ${ages[i]} Person will retire in ${newAge[i]} years`);
}

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'string') {
    continue;
  }
  console.log(arr[i], typeof [arr[i]]);
}

// loop backward
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}

// nested loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---Starting Exercise: ${exercise} ---`);
  for (let rep = 1; rep <= 6; rep++) {
    console.log(`Lifting weight: ${rep}`);
  }
}

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Iteration ${rep}`);
  rep++;
}

// random number
let dices = Math.trunc(Math.random() * 6) + 1;
console.log(dices);


while (dice !== 6) {
  console.log(`You rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`Loop is about to end`);
  }
}
