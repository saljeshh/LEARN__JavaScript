' use strict';

// problem 1:
// we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understand the problem
// - What is temp amplitude ?
// = Difference between highest and lowest temperature
// = how to compute the max and min temperature
// - whats a sensor error ? and what to do when one occurs?

// 2. Breaking into sub probems

// - How to ignore sensor errors ?
// - Find max value in temp array
// = Find min value in temp array
// = Subtract min from max(amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2

// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// = with 2 arrays, should we implement functionality twice? No Just merge two arrays

// 2. Breaking up into sub problems
// == How to merge two arrays?
console.log('---');
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const array1 = [12, 'error', 45, 89, 'error'];
const array2 = [90, 12, 'error', 45, 90];

const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);
