'use strict';

alert('Hey there!');

// let number = prompt('Which number would you like to print out?');
let number = parseInt(prompt('Which number would you like to print out?'));

console.log(number);
console.log(typeof(number));

if(confirm('Would you like to double the number?'))
    number = number * 2;

console.log('The number is now: ', number)

// undefinedVariable = 2; // This throws an error only in strict mode

if(number)
    console.log('Number has value');

number = undefined;

if(number)
    console.log('Number has value');

let numbers = [1, 2, 3];

if(numbers.length)
    console.log('The array has members');
else
    console.log('The array doesn\'t have members');

// falsy values: false, 0, 0n, null, undefined, NaN, ''
// examples of truthy values: {}, [], '0'

number = '2';

if(number === '2')
    console.log('True with === !');
else if(number == '2')
    console.log('True with == !'); // Coercion demonstration
else
    console.log('False!');