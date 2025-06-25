
function Person(name,age){
    this.name = name; // this.name and this.age are the variables
    this.age = age    // name and age are the parameters
}

function car(make,model){
    this.make = make;
    this.model = model
}
let myCar = new car("Honda","Civic")
console.log(myCar);

// to  create an object we have to use new keyword
// otherwise it will create a empty object or undefined

// this and new are inter linked together and this tells the context and new creates a new object

let myNewcar = new car("tata","City")
console.log(myNewcar);

function Tea(type){
    this.type = type,
    this.describe = function(){
        console.log(`your ${this.type} tea is ready`); // this.type is used to access the variable and in that context
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe()); // your lemon tea is ready    


function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let cat = new Animal("cat");
console.log(cat.sound()); // cat makes a sound

function Drink (name){
    if(!new.target){
        throw new Error("use new keyword");
    }
    this.name = name
}

let tea = new Drink("Tea"); // this will not throw an error
let coffe = Drink("coffe"); // this will throw an error Drink must be called in a new keyword;
console.log(tea);



