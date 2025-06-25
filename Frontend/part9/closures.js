// Closures are functions that have access to variables in the outer scope,
//  even after the outer function has closed

// In js the scope of the code is decided during it,s declration not during the execution

function outer(){
    let count = 4;
    return function(){
        count++;
        console.log(count);
    }
}
let increment = outer();
console.log(increment()); // 5 
console.log(increment()); // 6 