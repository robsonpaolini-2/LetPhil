const fruits = ["Apple", "Orange", "Grape"];

console.log(fruits);



// Declaring and Manipulating Arrays

// n = prompt ("Enter a number");
// console.log(fruits[`${n}`]);

// fruits[1] = "Melon";

// console.log(fruits);

// console.log(fruits.length);




// Array methods

// push
fruits.push("Mango", "Melon"); // add an element in the last index

// const mango = fruits.push("Mango"); // add an element

// console.log(mango); // Show the Length

console.log(fruits);

// pop
fruits.pop(); // remove the last element of the array at this point
console.log(fruits); 
 
// shift
fruits.shift(); // at this point remove the first element of the array
console.log(fruits);


// unshift
fruits.unshift("Bannana"); // add in the frist index
console.log(fruits);


fruits.push("Tomato");
console.log(fruits);



// Array Methods: Splice   add / remove elements

// sintaxy: (positions wherer will add (From here to...), number of elements that will be removed, "New element")
fruits.splice(4, 0, "Peach", "test1", "Test2");
console.log(fruits);

fruits.splice(1, 2); // remove 2 elements from the index 1(including the 1)
console.log(fruits);


const numbers = [1, 2, 3, 4, 5];
console.log("numbers = ", numbers);

// Array Methods: map

// Map
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);
console.log("numbers =", numbers);


// Array Methods: Filter

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Declaring and Maniputating Objects

const person = {
    name: "Damiana",
    age: 42,
    City: "Dallas",
};

console.log(person);

console.log(person.name);



