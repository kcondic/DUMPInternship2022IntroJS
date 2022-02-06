const firstPerson = {
    firstName: 'Karlo',
    lastName: 'Ivić'
};

const secondPerson = {
    firstName: 'Stipe',
    lastName: 'Stipić'

};

const thirdPerson = {
    firstName: 'Ivan',
    lastName: 'Ivić'
};

const fourthPerson = {
    firstName: 'Željko',
    lastName: 'Antić'
};

const fifthPerson = {
    firstName: 'Josipa',
    lastName: 'Tenžera'
};

const sixthPerson = {
    firstName: 'Anamarija',
    lastName: 'Liović'
}

let persons = [ firstPerson, secondPerson, thirdPerson, fourthPerson, fifthPerson, sixthPerson ];

console.log(persons.map(person => person.firstName));

console.log(persons.filter(person => person.lastName.length >= 5));

let numbers = [ 1, 2, 3, 4, 5 ];

console.log(numbers.includes(2));
console.log(numbers.includes(0));

console.log(numbers.slice(0, 3));
console.log(numbers.slice(-2));

console.log(numbers.splice(0, 2));
console.log(numbers);

console.log(numbers.fill(0));

numbers = [ 1, 2, 3, 4, 5 ];
console.log(numbers.reverse());

let text = 'Try this out';
console.log(text.split(''));

console.log(text.split('').join(''));
console.log(text.split('').join('|'));

numbers = [ 5, 2, -20, 0, 343, 39, 21, -151, 0.23, 12.43, 100];
console.log(numbers);
console.log(numbers.sort());
console.log(numbers);

console.log(persons);
console.log(persons.sort((firstPerson, secondPerson) => {
    if(firstPerson.lastName < secondPerson.lastName)
        return -1;
    else if(firstPerson.lastName > secondPerson.lastName)
        return 1;
    else
        return firstPerson.firstName < secondPerson.firstName ? -1 : 1;
}));

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(100));

console.log(persons.findIndex(person => person.firstName === 'Ivan'));
console.log(persons.findIndex(person => person.firstName === 'Ante'));

console.log(persons[0].firstName.substring(2));
console.log(persons[0].firstName.substring(0, 50));

// forEach, some, every, random, round, reduce, toFixed...

console.log(`The first person is called ${firstPerson.firstName} ${firstPerson.lastName}`);
console.log(`The first person is called ${firstPerson.firstName}    ${firstPerson.lastName}`);
console.log(`The first person is called ${firstPerson.firstName}




${firstPerson.lastName}`);