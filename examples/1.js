var hello = 'Dobar dan'; // Old way, don't use

let hello2 = 'Dobar dan'; // Redefinable value

hello2 = 'Dobra večer';

const hello3 = 'Dobar dan'; // Non-redefinable value

hello3 = 'Dobra večer';

hello4 = 'Hej hej';

let hello4; // Hoisting

let number = 5;

{
    let number2 = 12;
    number = 6; // Top-level variable is global and can be seen anywhere
}

{
    number2 = 5; // Variable defined in another scope is not visible
}