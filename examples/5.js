let numbers = [ 5, 2, 3 ];

console.log(numbers);

numbers.push(6);

console.log(numbers);

numbers.pop();

console.log(numbers);

console.log(numbers.length);

numbers = [ 2, 6, 9, 12, -2, 0, 55 ];

const otherNumbers = [ 5, 2, 3 ];

// otherNumbers = [ 2, 6, 9, 12, -2, 0, 55 ];

for(let number of numbers)
    console.log(number);

const firstPerson = {
    firstName: 'Stipe',
    lastName: 'Stipić'
};

const secondPerson = {
    firstName: 'Ivan',
    lastName: 'Ivić'
};

console.log(firstPerson);

console.log(firstPerson.firstName);

console.log(firstPerson['firstName']);

for(let property in firstPerson) {
    console.log(property);
    console.log(firstPerson[property]);
}

firstPerson.height = 168;

console.log(firstPerson);

let text = 'Test this to test it';

console.log(text.length);

for(let letter of text)
    console.log(letter);