console.log('Test');

let number = 5;

console.log('The number is: ', number);

console.log('The number is: ' + number);

console.log(typeof(number));

let text = 'Test';
let boolean = true;
let nothing = null;
let realNothing;
let person = {
    firstName: 'Stipe',
    lastName: 'Stipić'
};
let numbers = [ 1, 2, 3 ];

console.log(typeof(text));
console.log(typeof(boolean));
console.log(typeof(nothing)); // prints out 'object' - wrong!
console.log(typeof(realNothing));
console.log(typeof(person));
console.log(typeof(numbers)); // arrays have object as type!

console.log(typeof(NaN)); // special value of number type

console.log(typeof(text));

text = 5;

console.log(typeof(text)); // variable is now of different type