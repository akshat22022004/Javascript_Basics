// console.log("start");

// for(let index = 0; index < 100; index++) {
//    console.log(index);    // synchronous code or regular code
// }

// aysnchronous code => ability to pause a code having a code
/*
network calls
write/read files
time functions

*/

// Asynchronous nature of Javascript
function sayHellow(){
    console.log("Hello");   
}
setTimeout(() => { // callback arrow function
    sayHellow();
}, 2000); // the timer function was send into the browser or the enviroment (wether it is browser or node.js)
console.log("start");
for(let index = 0; index < 10; index++) {
   console.log(index);    // synchronous code or regular code
 }
 // op =>
 //  start
 //  0
 //  1
 //  2
 //  3
 //  4
 //  5
 //  6
 //  7
 //  8
 //  9
 //  Hello  
 // Asyncrhous nature of Javascript


 // Event loop 

/*
Code -> calls a function -> Call Stack (functions loaded)
Event Loop checks the Call Stack for any callback functions
If a callback function is found, it is executed in the Call Stack
After execution, the callback function is moved to the Event Queue
Event Loop checks the Event Queue for any completed requests from the browser
If a request is completed, the associated callback function is executed

The browser call is made when =>
When a request is sent from the browser,
it is not directly executed by the JavaScript engine.
Instead, the request is sent to the Web API (e.g., DOM, Network, Timer, etc.) 
which handles the request.

The Web API then processes the request and, 
when the request is complete, 
it adds the associated callback function to the Event Queue.
*/


 
 

