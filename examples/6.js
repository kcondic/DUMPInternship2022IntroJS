function addNumbers(firstNumber, secondNumber) { // named function
    return firstNumber + secondNumber;
}

console.log(addNumbers(2, 3));

console.log(addNumbers(2));

console.log(addNumbers(2, 3, 8));

let subtractNumbers = function(firstNumber, secondNumber) { // anonymous function
    return firstNumber - secondNumber;
}

console.log(subtractNumbers(2, 3));

let multiplyNumbers = (firstNumber,  secondNumber) => {
    return firstNumber * secondNumber;
}

multiplyNumbers(2, 3);

(function() {
    console.log('Hello from IIFE!');
})();