// Ternary operator

let speed = 120;
let message = (speed >= 100) ? "Too Fast": "OK";
console.log(message);

let a = 10;
let b = 20;
let minVal = (a < b) ? a : b;
console.log(minVal);

// Switch Statement
let day = 1;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednusday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;                        
    default:
        console.log("invalid");
        break;    
}


let c = 10;
let d = 20;
let operation = "add";
switch(operation) {
    case "add":
        console.log(`a+b = ${a + b}`);
        break;
    case "sub":
        console.log(`a-b = ${a - b}`);
        break;
    default:
        console.log(`Invalid operation`);
        break;
}


// Defining Functions
/*
They are multiple ways to define a function
    1. Function Declaration
    2. Function Expression
    3. Arrow Functions
    4. Function Constructor
    ..........................many more...etc.
*/

// 1. Function Declaration
function addFunc(a,b){
    return a + b;
}
console.log(addFunc(10,20));

// 2. Function Expression
let addFunc2 = function(a,b) {
    return a + b;
}
console.log(addFunc2(10,20));

// 3. Arrow Function
// let sum = (a,b) => {
//     let result = a + b;
//     return result;
// }
let sum = (a,b) =>  a + b;

console.log(sum(100,200));

let isEqual = (a,b) => a === b;
console.log(isEqual(10,20));

let greet = name => `Hi ${name}`;
console.log(greet("Sivaram"));

let square = n => (n*n);
console.log(square(10));

let sayHi = () => "Hello";
console.log(sayHi());

// returning object using arrow functions
let createUser = name => {
    return {
        firstName: name
    };
};
console.log(createUser("Sivaram"));

let createUser2 = name => ({ firstName: name});
console.log(createUser2("Ram Yadav"));
