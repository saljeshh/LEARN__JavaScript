// every value is object or primitive
// value is primitive when it is not object

// 1. Number = Floating point number == used for decimal and integer
let age = 23;
console.log(age);
console.log(typeof age);

// 2. String = Sequence of characters == used for text
let firstName = 'saljesh';
console.log(firstName);

console.log(typeof 'saljesh');

// 3. Boolean = Logical type that can only be true or false == used for taking decisions

let is_logical = true;
console.log(is_logical);

// 4. Undefined = Value taken by variable that is not yet defined ('Empty value')

let children;

// 5. Null = Also means 'empty value'
let child = null;

//6. Symbol = Vlaue thta is unique and cannout be changed

let symbol = Symbol();
console.log(symbol);

// 7. BigInt = Larger interger than the Number can hold

/* BUG OF NULL DATATYPE */

// null is actually a primitive datatype but when done typof it returns object
// it must be like typeof undefined = undefined

console.log(typeof undefined);
console.log(typeof null); // object is returned its bug of js not solved for legacy reasons
