const obj = { // key value pair
    name : "akshat",
    age : 21,
    isLoggedIn : true,
}; // this much memory space will be allocated but values can be changed

// key value pair can be added in object obj
obj.firstname = "akshat"; // key value pair added
obj.lastname = "singh"; // key value pair added
console.log(obj);   // object

console.log(typeof obj); // object


let today = new Date(); // object
console.log(today);
console.log(typeof today); // object

// Array
let heros = ["thor", "ironman", "spiderman"];
console.log(heros);
console.log(typeof heros); // object    

let anotherUser = ["hitesh", 21, true];
console.log(anotherUser[0]); // give value at the particular index
console.log(typeof anotherUser); // object

// implicit type conversion
console.log(1 + '1') // 11 // number + string = string
console.log(1 - '1') // 0 // number - string = number
console.log(1 - 'a') // NaN // number - string = NaN

let value = true;
console.log(value + 1) // 2 //  true + number = number
// value is considered as 1 cause it is true

let value1 = false;
console.log(value1 + 1) // 1 // false + number = number     

console.log(typeof(NaN)); // number 

console.log(Number(null)); // 0 
console.log(Number(undefined)); // NaN



