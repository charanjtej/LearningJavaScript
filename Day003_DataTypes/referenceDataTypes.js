// An array comes under REference data type.

//What is meant by an array?
let numbers = [2, 4, 6, 8, 10];
let newNumbers = numbers;

console.log("numbers: ", numbers); //[2, 4, 6, 8, 10]
console.log("newNumbers: ", newNumbers); // [2, 4, 6, 8, 10]

console.log("=====================================");
newNumbers.push(50);
newNumbers.push(80);
console.log("new numbers", newNumbers); //[2, 4, 6, 8, 10, 50, 80]
console.log("numbers: ", numbers); //[2, 4, 6, 8, 10