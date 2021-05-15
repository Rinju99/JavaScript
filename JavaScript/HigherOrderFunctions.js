//Hihger Oder Functions Practice

let arr = [1, 5, 6, 3, 8, 15]; // Master Array for practice

//Map: Creates a new array with doubled elements from given array
let mapped = arr.map((x) => x * 2); //
console.log(mapped); //  [ 2, 10, 12, 6, 16, 30 ]

// Reduce: Reduces given array into a single value based on the condition provide.
let reduced = arr.reduce((acc, val) => (val > acc ? val : acc)); // gives max value
reduced = arr.reduce((acc, val) => val + acc); // gives the total sum

// Filter: filters out the element based on the condition provided
let filterd = arr.filter((x) => x % 2 == 0); //filers out odd numbers
console.log(filterd);

//Spft: sorts out the elements in an array
let sorted = arr.sort();
console.log(sorted);

// Fill: fills out elements with given value
let filled = arr.fill(Math.floor(Math.random() * 10));
console.log(filled);
