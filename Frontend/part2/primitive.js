// Number
let balance = 120
console.log(typeof( balance)); // number

// object
let anotherbalance = new Number(120) // object
// Every thing primitve canbe coverted into object

// String   
let name = "akshat" 
let name2 = 'akshat' // both works
let name3 = `akshat` // used for string interpolation
console.log(typeof( name)); // string

let anothername = new String("akshat") // object

// Boolean  
let isLoggedIn = true   
console.log(typeof( isLoggedIn)); // boolean

let isactive = new Boolean(true) // object

// Null and undefined
let myNull = null   
console.log(typeof( myNull)); // object

let firstname; // it exsist but definition do not exsist
console.log(typeof( firstname)); // undefined

// Symbol
let id = Symbol("id") // unique identifier
console.log(typeof( id)); // symbol 

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2); // false
