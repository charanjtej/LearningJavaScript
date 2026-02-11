//primitive data type.
let name = "Ram";
let age = 25; 
//String is always enclosed in quotes (') or (")
//JavaScript is dynamic programing language it automatically based on value understands type of variable.
let mobile = '8881118881'; //it is automatically becomes a String.
let isPresent = true; //true or false without quotes are not strings, they are known as booleans.
let isMarried; //I'm not assigning any value to it, "undefined"

//to print anything on terminal we use the statement as console.log()
//to identify the type of a variable we use an operator in JS: typeof
console.log(typeof age); //number
let myHouseAddress = null;

console.log(typeof myHouseAddress); // what must be ideally output of it. => object

//symbol helps us to create immutable key for object

// pass by value: practical changes
let newAge = age; //= assignment operator, assign the value age to newAge variable
console.log("newage: "+newAge);
console.log("age: " + age);
console.log("===================================");
newAge = 30; //Here I changed the value of newAge variable, did effect the value of age variable?
console.log("newage: "+newAge);
console.log("age: " + age);
