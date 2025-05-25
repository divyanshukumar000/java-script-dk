//Two types of data-types

// * Primitive data-types
// 7 types : String, Number, Boolearn, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 87675643546734556n


// Reference (Non Primitive) data-types
// Array, Objects, Functions

const heros = ["Balveer", "Shaktiman", "Nagraj"]
let myObj = {
    name: "Divyanshu",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myInstaname = "dk.divyanshukumar"

let anothername = myInstaname
anothername = "Divyanshu kumar"
console.log(anothername);
console.log(myInstaname); 

let userOne = {
    email: "divyanshu@gmail.com",
    password: "09342"
    
}

let userTwo = userOne
userTwo.email = "komal@gmail.com",
password = "3421"

console.log(userOne);
console.log(userTwo);






