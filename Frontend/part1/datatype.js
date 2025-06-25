/*

string
number
boolean
null => empty
undefined => no defintion for you something unknown may exsist
BigInt => for scientific calculations
Symbol => unique identifier
Object => collection of key value pair

*/
console.log(typeof undefined); // undefined

var score = 162; // old way

let score1 = 162; // new way

const score2 = 162; // here it remains constant always even after updation

let name = "Akshat" // string
let age = 21 // number
let isLoggedin = true // boolean
let externalUser = null // null

// object
let tea = ["black", "green", "white", "herbal"]
let user = { // key value pair
    name : "akshat",
    age : 21
}

let getscore = score; // copy one value but the address will be same

console.log(getscore); // ans = 162


