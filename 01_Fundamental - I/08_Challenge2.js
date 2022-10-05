/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
 */
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

let markBmi = markMass / markHeight ** 2;

let johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI is higher than John's!`);
  console.log(`BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
  console.log(`John's BMI is higher than MarkBmi`);
  console.log(`BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
}
