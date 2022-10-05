// coding challenge

/*
Given an array of forecasted maximum temperatures, 
the thermometer displays a string with these temperatures.


Example: [17,21,23] will print "...17.c in 1 day ... 21.c in 2 days ... 23.c in 3 days ..."

create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

use the problem-solving framework: Understand the problem and break it up into sub problems:

Test data 1 : [17,21,23]
Test data 2 : [12, 5, -5, 0, 4]

*/

// Understand problem
/*
    1. Array transformed to string, seperated by ...
    2. What is x days? Answer: index + 1
*/

// Break the problem
/*
    - Transform array to string
    - Transform each element to string with °C
    - String needs to contain day (index + 1)
    - Add ... between elements and start and end of string
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecast(data1);
