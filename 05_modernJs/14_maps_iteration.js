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

// removes use of map.set()....

const question = new Map([
  ['question', 'what is the best lang in the world'],
  [1, 'C'],
  [3, 'Java'],
  [4, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours)); // an arrays of array

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Maps are also iteretables

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

// const answerKey = question.get('correct');
// // console.log(answerKey);

// if (answer === answerKey) {
//   const right = question.get(true);
//   console.log(right);
// } else {
//   const wrong = question.get(false);
//   console.log(wrong);
// }

// easy way for above
console.log(question.get(question.get('correct') === answer));

// maps are iteretables so we can use destructuring
console.log([...question]);

// if we dont destructure and keep in array it will give us mapIterator
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
