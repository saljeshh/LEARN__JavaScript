const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();

// steps
/*
1. global execution context is created with secureBooking and booker(undefined now)
2. when secureBooking is called in line 10, it sets passengerCount to 0 , before it was undefined.
3. Now something strange happens, inner function doesnt return anything as it has not been called yet, secureBooking will pop out of execution context, but somehow js preserves scope chain of secureBooking., called closures
4. When it reaches line 12 booker() , it calls inner function of secureBooking, but secureBooking is not in execution context, now a new execution context is created with name booker() with empty local variable environment.
5. Now, because of clousres passengerCount is incremented by 1 and then console prints sth inside console.log() and then , booker() will pop out of execution context.
*/

console.dir(booker);
