function * generatorFunction() {
 // it does not run the all function at once 
 // it returns the value one by one

 // yeidl is used to return the value in place of run here we can place large functions 
 // and then return value using yeid
 yield  1; // shows first time i ll give this result we use yeild in place of return  
 yield 2;
 yield 3;  
}

// Execution done one by one here
let gen = generatorFunction();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }