// higher order function

// function which takes another function as argument or returns a function
// callback function
// give code


// example 
function makeTea(typeoftea){
return ` your ${typeoftea} tea is ready`;
}

function processTeaOrder(teaFunction){
    return teaFunction("green");
}

let order = processTeaOrder(makeTea);
console.log(order);

/*
write a function create tea maker that returns another function
. the returned function should take one parameter  "tea type"and return 
a message like making green tea 

store in a variable named teamaker and call it as green tea
*/

function createTeaMaker(){
    return function (typeoftea){
        return ` your ${typeoftea} tea is ready`;
    }
}

let teamaker = createTeaMaker();
let result = teamaker("green");
console.log(result); // your green tea is ready
