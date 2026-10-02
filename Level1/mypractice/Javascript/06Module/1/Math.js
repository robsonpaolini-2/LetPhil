// console.log(Math.PI);
// console.log(Math.E);


// Math.round - rounds a number to the nearest integer
console.log("Math.round ---------")
console.log(Math.round(4.5));
console.log(Math.round(4.4));



// Math.floor - Rounds down to the nearest integer
console.log("Math.floor ----------")
console.log(Math.floor(4.8));
console.log(Math.floor(4.2));


// Math.ceil - Rounds up to the nearest integer
console.log("Math.ceil -----------");
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.8));

// Math.max and Math.min - find the largest / smallest number
console.log("Math.max and Math.min -------------")
console.log("Max ------>", Math.max(20, 50, 5, 40, 30, 4));
console.log("Min ------>", Math.min(25, 55, 84, 41, 2, 100));
console.log("The largest number is:", (Math.max(25, 55, 84, 41, 2, 100)));
console.log("The smarllest number is:", (Math.min(25, 55, 84, 41, 2, 100)));



// the user insert the numbers and the the result
console.log("The user enter the numbers ----------");
const numbers = [];

for( let i = 0; i < 5; i++) {
// numbers.push(prompt(`Enter the numbers. Number: ${i + 1}`));
}

console.log(numbers);
console.log(...numbers);
console.log("The largerst number is: ", Math.max(...numbers));
console.log("The smallest number is: ", Math.min(...numbers));




// Math.abs() - Gets the absolute value of a number
// converts negative numbers to positive

console.log(Math.abs(-10));


// Math.pow() - the power of a number

console.log("Math.pow() ------------");
console.log("Math.pow(2, 3)", Math.pow(2,3));


// Math.sqrt() ------------------------
console.log("Math.sqrt() -------------");
console.log("Math.sqrt(25)", Math.sqrt(25));
console.log("Math.sqrt(81)", Math.sqrt(81));


// check if a number is a perfect square
const num = 81;

console.log(Math.sqrt(num));

if (Math.sqrt(num) % 1 === 0) {
    console.log("is a perfect square");
} else {
    console.log("is not a perfect square");
}

console.log(' function to see if is perfect square');
    
    function isPerfectSquare(num) {
        if(Math.sqrt(num) % 1 === 0) return true
        return false
    }

    console.log(isPerfectSquare(81));
    console.log(isPerfectSquare(5));
    console.log(isPerfectSquare(25));
    console.log(isPerfectSquare(100));




